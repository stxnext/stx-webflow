const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const cheerio = require('cheerio');

const { changeQuotes, trim, getSlug } = require('./utils');

function extractCompanyName(url) {
  const matches = url.match(/\/([^\/]+?)(?:\.\w+)+$/);
    if (matches && matches[1]) {
      // Replace common separator characters with spaces and decode URI encoding
      const match  = matches[1];
      let name = decodeURIComponent(match.replace(/[-_%20]+/g, ' '));

      // Optionally, remove known file indicators like 'logo'
      name = name.replace(/logo/gi, '').trim();

      // Capitalize the first letter of each word for better readability
      name = name.replace(/\b\w/g, l => l.toUpperCase());

      return name;
    }
    return 'Unknown';
}

const parseFile = async (filePath) => {
  const items = [];

  const htmlContent = readFileSync(filePath, 'utf8');
  const $ = cheerio.load(htmlContent);

  let order = 66;

  $('.gridBox')
    .toArray()
    .forEach((itemElement) => {
      const item = {
        name: $(itemElement)
          .find('.gridBoxDatasubtitle')
          .children('h6')
          .first()
          .text()
          .trim(),
        intro: trim($(itemElement)
          .find('.gridBoxDataContinr')
          .children('p')
          .first()
          .html()),
        logo: $(itemElement)
          .find('.gridBoxLogo')
          .children('img')
          .first()
          .attr('src'),
        link: $(itemElement)
          .find('a')
          .last()
          .attr('href'),
      };

      item.publisherName = extractCompanyName(item.logo);
      item.publisher = getSlug(item.publisherName);
      item.order = order--;

      items.push(item);
    });

  return items;
};

const getList = async (filePath) => {
  try {
    const items = await parseFile(filePath);

    let result = '';
    const fields = [
      'name',
      'logo',
      'intro',
      'link',
      'publisher',
      'publisherName',
      'order',
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

    writeFileSync(join(__dirname, '../data/press/press.csv'), result, 'utf8');

    console.log('Parsing completed');
  } catch (error) {
    console.error(`Error reading file ${filePath}: ${error}`);
  }
};

getList(join(__dirname, '../data/press/main.html'));
