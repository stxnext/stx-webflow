const { readFileSync, writeFileSync, existsSync } = require('fs');
const { join, basename } = require('path');
const cheerio = require('cheerio');

const { changeQuotes, trim } = require('./utils');

const getPressData = (fileName) => {
  let filePath = join(__dirname, `../data/press/items/${fileName}.html`);

  if (!existsSync(filePath)) {
    filePath = join(__dirname, `../data/blog/all/${fileName}.html`);
    if (!existsSync(filePath)) {
      filePath = join(__dirname, `../data/blog/all/${fileName}_.html`);
    }
  }

  const data = {};

  const htmlContent = readFileSync(filePath, 'utf8');
  const $ = cheerio.load(htmlContent);

  data.title = $('title').text().trim();
  data.metaDescription = $('meta[name="description"]').attr('content');

  const placeDate = $('.ebookBanrCont').children('p').first().text().trim();
  const intro = trim($('.ebookBanrCont').children('p').last().html());

  data.published = new Date(placeDate.replace("Poznań, ", ""));

  data.content = trim($('.columnRContnt').html());
  data.intro = intro;

  return data;
};

const parseFile = async (filePath) => {
  const items = [];

  const htmlContent = readFileSync(filePath, 'utf8');
  const $ = cheerio.load(htmlContent);

  $('.bookBoxInner')
    .toArray()
    .forEach((itemElement) => {
      const item = {
        name: $(itemElement)
          .find('.bookBoxTitle')
          .children('h5')
          .first()
          .text()
          .trim(),
        cover: $(itemElement)
          .find('.bookBoxImg')
          .children('img')
          .first()
          .attr('data-src'),
        slug: basename(
          $(itemElement)
            .find('.bookBoxButton')
            .children('a')
            .first()
            .attr('href'),
          '.html',
        ),
      };

      const data = getPressData(item.slug);
      Object.assign(item, data);

      items.push(item);
    });

  return items;
};

const getList = async (filePath) => {
  try {
    const items = await parseFile(filePath);

    let result = '';
    const fields = [
      'slug',
      'name',
      'cover',
      'title',
      'place',
      'published',
      'metaDescription',
      'content',
      'intro'
    ];

    result += fields.join(',') + '\n';

    items.forEach((item) => {
      const values = [];

      fields.forEach((key) => {
        let value = changeQuotes(item[key] || '');

        values.push(`"${value}"`);
      });

      result += values.join(',') + '\n';
    });

    writeFileSync(join(__dirname, '../data/press/news.csv'), result, 'utf8');

    console.log('Parsing completed');
  } catch (error) {
    console.error(`Error reading file ${filePath}: ${error}`);
  }
};

getList(join(__dirname, '../data/press/main.html'));
