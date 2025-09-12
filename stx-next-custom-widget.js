function init() {
  var escapeHtml = (text) => {
    if (typeof text !== 'string') {
      return text;
    }

    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };
  var isObject = function (data) {
    return typeof data === 'object' && data !== null;
  };

  const transformBody = (data) => {
    if (!isObject(data)) {
      throw new Error('Transform Body needs an object');
    }

    const mapObject = (data, index = 0, prevKey = '') => {
      const mappedData = data.map(([key, value]) => {
        const newKey = index === 0 ? key : `${prevKey}[${key}]`;

        if (!isObject(value)) {
          return {
            [newKey]: value,
          };
        }

        return mapObject(Object.entries(value), index + 1, newKey);
      });

      return mappedData.flat();
    };
    const mappedArrayWithObjects = mapObject(Object.entries(data));

    return mappedArrayWithObjects.reduce((acc, obj) => {
      const data = Object.entries(obj)?.[0];

      if (!data) {
        return acc;
      }

      const [key, value] = data;

      return {
        ...acc,
        [key]: value,
      };
    }, {});
  };
  var stripTags = (text) => text.replace(/<\/?[^>]+(>|$)/g, '');

  var xxtraffitxxAppend = function (parent, text) {
    if (!text) {
      return;
    }

    var tempWrapperBody = new DOMParser().parseFromString(
      `<div id="xxtraffitxxTempWrapper">${text}</div>`,
      'text/html',
    ).body;
    var elements = tempWrapperBody.querySelectorAll('#xxtraffitxxTempWrapper > *');
    if (elements && elements.length) {
      for (var i = 0; i < elements.length; i++) {
        parent.appendChild(elements[i]);
      }
    }
  };

  // #region Locales
  var locales = {
    en: {
      search: 'Search',
      keyword: 'Keyword',
      location: 'Location',
      clearForm: 'Clear filter',
      advertsFound: 'Offers found',
      readMore: 'Apply',
      advertsNotFound: 'We did not find any offers with chosen criteria.',
      filterBy: 'Filter by',
      locationTitle: 'Location',
      categoryTitle: 'Job Category',
      remoteTitle: 'Remote',
      onSiteTitle: 'On Site',
      hybridTitle: 'Hybrid',
    },
  };
  // #endregion

  var settingsString =
    '\u007B\u0022announcement_list_carreer_page\u0022\u003Anull,\u0022announcement_list_css\u0022\u003A\u0022\u0020\u0020\\/\u002A\u0020ADVERT\u0020\u002A\\/\\n\u0020\u0020\u0020\u0020.job\u002Dpost\u0020.button\u002D\u002Dcta,\u0020.job\u002Dpost\u0020.job\u002Dpost__mobile\u002Dmenu\u0020.mobile\u002Dmenu__button\u0020\u007B\\n\u0020\u0020\u0020\u0020\u0020\u0020color\u003A\u0020white\u003B\\n\u0020\u0020\u0020\u0020\u0020\u0020background\u002Dcolor\u003A\u0020\u0023196694\\n\u0020\u0020\u0020\u0020\u007D\\n\u0020\u0020\\/\u002A\u0020FORM\u0020\u002A\\/\\n\u0020\u0020\u0020\u0020.traffit\u002Dpublic\u002Dform\u0020.traffit\u002Dpublic\u002Dform__main\u0020.main__form\u0020.form__button\u002Dwrapper\u0020.submit\u002Dbutton\u0020\u007B\\n\u0020\u0020\u0020\u0020\u0020\u0020color\u003A\u0020white\u003B\\n\u0020\u0020\u0020\u0020\u0020\u0020background\u002Dcolor\u003A\u0020\u0023196694\\n\u0020\u0020\u0020\u0020\u007D\\n\\/\u002A\u0020bullets\u0020\u002A\\/\\nul\u0020li\u003A\u003Abefore\u0020\u007B\u0020\\ncolor\u003A\u0020\u00231ebec0\u0020\u0021important\u003B\\n\u007D\\nul\u0020li\u0020\u007B\\ncolor\u003A\u0020\u00231ebec0\u0020\u0021important\u003B\\n\u007D\\nli\u003A\u003Abefore\u0020\u007B\u0020color\u003A\u0020\u00231ebec0\u003B\u007D\\n\\n\\n\\nhtml\u0020\u007B\\n\\n\\n\u0020\u0020\u0020\u0020font\u002Dfamily\u003A\u0020lato\u003B\\n\\n\u007D\\n\\nbody\u0020\u007B\\n\u0020\u0020\u0020\u0020background\u002Dcolor\u003A\u0020white\u003B\\n\u0020\u0020\u0020\u0020font\u002Dfamily\u003A\u0020Lato\u003B\u0020\u0020\u0020\u0020\\n\u007D\\n\\nh1\u0020\u007B\\n\u0020\u0020\u0020\u0020text\u002Dalign\u003A\u0020center\u003B\\n\u007D\\n\\n\\np\u0020\u007B\\n\u0020\u0020\u0020\u0020font\u002Dsize\u003A\u002020px\u003B\\n\u007D\\n\\n.backdrop_img\u0020\u007B\\n\u0020\u0020\u0020\u0020background\u002Dimage\u003A\u0020\u002Dwebkit\u002Dgradient\u0028linear,right\u0020top,left\u0020top,from\u0028hsla\u00280,0\u0025,97.6\u0025,.3\u0029\u0029,to\u0028\u0023f9f9f9\u0029\u0029,url\u0028https\u003A\\/\\/career.stxnext.com\\/wp\u002Dcontent\\/themes\\/stxcareers\\/images\\/bg\u002Dpattern.png\u0029\u003B\\n\u0020\u0020\u0020\u0020background\u002Dimage\u003A\u0020linear\u002Dgradient\u0028270deg,hsla\u00280,0\u0025,97.6\u0025,.3\u0029,\u0023f9f9f9\u0029,url\u0028https\u003A\\/\\/career.stxnext.com\\/wp\u002Dcontent\\/themes\\/stxcareers\\/images\\/bg\u002Dpattern.png\u0029\u003B\\n\u007D\\n\\n.Benefits_grid\u0020\u007B\\n\u0020\u0020\u0020\u0020display\u003A\u0020\u0020\u0020\u0020grid\u003B\\n\u0020\u0020\u0020\u0020gap\u003A\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u00201.3em\u003B\\n\u0020\u0020\u0020\u0020padding\u003A\u002030px\u002010px\u002030px\u003B\\n\u0020\u0020\u0020\u0020margin\u002Dbottom\u003A\u002080px\u003B\\n\u007D\\n\\n\u0040media\u0020\u0028min\u002Dwidth\u003A\u0020480px\u0029\u0020\u007B\\n\u0020\u0020\u0020\u0020.Benefits_grid\u0020\u007B\\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020grid\u002Dtemplate\u002Dcolumns\u003A\u00201fr\u00201fr\u003B\\n\u0020\u0020\u0020\u0020\u007D\\n\u0020\u0020\u0020\u0020.Benefit_perk\u003Ahover\u0020\u002B\u0020.perk_text,\u0020\\n\u0020\u0020\u0020\u0020.perk_text\u003Ahover,\u0020\\n\u0020\u0020\u0020\u0020.perk_text\u0020\u007B\\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020width\u003A\u002045\u0025\u003B\\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u002Dwebkit\u002Dbox\u002Dshadow\u003A\u00200\u002015px\u002040px\u00200\u0020rgb\u00280\u00200\u00200\u0020\\/\u00206\u0025\u0029\u003B\\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020box\u002Dshadow\u003A\u00200\u002015px\u002040px\u00200\u0020rgb\u00280\u00200\u00200\u0020\\/\u00206\u0025\u0029\u003B\\n\u0020\u0020\u0020\u0020\u007D\\n\\n\u007D\\n\u0040media\u0020\u0028min\u002Dwidth\u003A\u00201250px\u0029\u0020\u007B\\n\u0020\u0020\u0020\u0020.Benefits_grid\u0020\u007B\\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020grid\u002Dtemplate\u002Dcolumns\u003A\u00201fr\u00201fr\u00201fr\u003B\\n\u0020\u0020\u0020\u0020\u007D\\n\u0020\u0020\u0020\u0020.Benefit_perk\u003Ahover\u0020\u002B\u0020.perk_text,\u0020\\n\u0020\u0020\u0020\u0020.perk_text\u003Ahover,\u0020\\n\u0020\u0020\u0020\u0020.perk_text\u0020\u007B\\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020width\u003A\u002030\u0025\u003B\\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u002Dwebkit\u002Dbox\u002Dshadow\u003A\u00200\u002015px\u002040px\u00200\u0020rgb\u00280\u00200\u00200\u0020\\/\u00206\u0025\u0029\u003B\\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020box\u002Dshadow\u003A\u00200\u002015px\u002040px\u00200\u0020rgb\u00280\u00200\u00200\u0020\\/\u00206\u0025\u0029\u003B\\n\u0020\u0020\u0020\u0020\u007D\\n\u0020\u0020\u0020\u0020\\n\u007D\\n\\n.article_flow\u0020\u007B\\n\u0020\u0020\u0020\u0020overflow\u003A\u0020\u0020\u0020hidden\u003B\\n\u007D\\n\\n\\n.Benefit_perk\u0020\u007B\\n\u0020\u0020\u0020\u0020display\u003A\u0020\u002Dwebkit\u002Dbox\u003B\\n\u0020\u0020\u0020\u0020\\/\u002A\u0020display\u003A\u0020\u002Dms\u002Dflexbox\u003B\\n\u0020\u0020\u0020\u0020display\u003A\u0020flex\u003B\u0020\u002A\\/\\n\u0020\u0020\u0020\u0020\u002Dwebkit\u002Dbox\u002Dalign\u003A\u0020center\u003B\\n\u0020\u0020\u0020\u0020\u002Dms\u002Dflex\u002Dalign\u003A\u0020center\u003B\\n\u0020\u0020\u0020\u0020align\u002Ditems\u003A\u0020center\u003B\\n\u0020\u0020\u0020\u0020position\u003A\u0020relative\u003B\\n\u0020\u0020\u0020\u0020overflow\u003A\u0020hidden\u003B\\n\u0020\u0020\u0020\u0020\\/\u002A\u0020border\u003A\u0020rgb\u0028138,\u0020138,\u0020138\u0029\u003B\\n\u0020\u0020\u0020\u0020border\u002Dwidth\u003A\u00201px\u003B\\n\u0020\u0020\u0020\u0020border\u002Dstyle\u003A\u0020solid\u003B\\n\u0020\u0020\u0020\u0020border\u002Dradius\u003A\u002015px\u003B\u0020\u002A\\/\\n\u007D\\n\\n.Benefit_perk\u003Ahover\u0020\u007B\\n\u0020\u0020\u0020\u0020\\/\u002A\u0020background\u002Dcolor\u003A\u0020white\u003B\u0020\u002A\\/\\n\u0020\u0020\u0020\u0020overflow\u003A\u0020visible\u003B\\n\u007D\\n\\n.Benefit_perk\u003Ahover\u0020\u002B\u0020.perk_text\u0020\u007B\\n\u0020\u0020\u0020\u0020\\/\u002A\u0020\u002B\u0020\u003E\u0020\u002A\\/\u0020\\n\u0020\u0020\u0020\u0020position\u003A\u0020absolute\u003B\\n\u0020\u0020\u0020\u0020opacity\u003A\u00201\u003B\\n\u0020\u0020\u0020\u0020visibility\u003A\u0020visible\u003B\\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u002Dwebkit\u002Dtransition\u003A\u0020.15s\u0020ease\u002Din\u002Dout\u003B\\n\u0020\u0020\u0020\u0020transition\u003A\u0020.15s\u0020ease\u002Din\u002Dout\u003B\\n\u0020\u0020\u0020\u0020overflow\u003A\u0020visible\u003B\\n\u0020\u0020\u0020\u0020height\u003A\u002011vh\u003B\\n\u0020\u0020\u0020\u0020z\u002Dindex\u003A\u0020100\u003B\\n\u0020\u0020\u0020\u0020\\/\u002A\u0020display\u003A\u0020block\u003B\u0020\u002A\\/\\n\u0020\u0020\u0020\u0020margin\u002Dtop\u003A\u0020\u002D20px\u003B\\n\u007D\\n\\n\\n\\/\u002A\u0020.Benefit_perk\u003Ahover\u0020.Benefit_perk\u003Ahover\u003Abefore\u0020\u0020\u007B\\n\u0020\u0020\u0020\u0020opacity\u003A\u00201\u003B\\n\u0020\u0020\u0020\u0020visibility\u003A\u0020visible\u003B\\n\u007D\u0020\u002A\\/\\n.perk_figure\u0020\u007B\\n\u0020\u0020\u0020\u0020\\/\u002A\u0020width\u003A\u002075px\u003B\u0020\u002A\\/\\n\u0020\u0020\u0020\u0020\\/\u002A\u0020margin\u003A\u00200\u003B\u0020\u002A\\/\\n\u0020\u0020\u0020\u0020margin\u002Dright\u003A\u002020px\u003B\\n\u0020\u0020\u0020\u0020margin\u002Dleft\u003A\u0020\u0020\u00200px\u003B\\n\u007D\\n\\n.perk_title\u0020\u007B\\n\u0020\u0020\u0020\u0020font\u002Dsize\u003A\u002016px\u003B\\n\u0020\u0020\u0020\u0020width\u003A\u002073\u0025\u003B\\n\u007D\\n\\n.perk_text\u0020\u007B\\n\u0020\u0020\u0020\u0020font\u002Dsize\u003A\u002014px\u003B\\n\u0020\u0020\u0020\u0020opacity\u003A\u00200\u003B\\n\u0020\u0020\u0020\u0020\\/\u002A\u0020display\u003A\u0020none\u003B\u0020\u002A\\/\\n\u0020\u0020\u0020\u0020margin\u002Dtop\u003A\u00200px\u003B\\n\u0020\u0020\u0020\u0020margin\u002Dbottom\u003A\u00200px\u003B\\n\u0020\u0020\u0020\u0020padding\u002Dleft\u003A\u0020\u002010px\u003B\\n\u0020\u0020\u0020\u0020padding\u002Dright\u003A\u002010px\u003B\\n\u0020\u0020\u0020\u0020\\/\u002A\u0020padding\u002Dtop\u003A\u002010px\u003B\u0020\u002A\\/height\u003A\u00200px\u003B\\n\u0020\u0020\u0020\u0020line\u002Dheight\u003A\u00201.5em\u003B\\n\u0020\u0020\u0020\u0020background\u002Dcolor\u003A\u0020white\u003B\\n\u0020\u0020\u0020\u0020\u002Dwebkit\u002Dbox\u002Dshadow\u003A\u00200\u002015px\u002040px\u00200\u0020rgb\u00280\u00200\u00200\u0020\\/\u00206\u0025\u0029\u003B\\n\u0020\u0020\u0020\u0020box\u002Dshadow\u003A\u00200\u002015px\u002040px\u00200\u0020rgb\u00280\u00200\u00200\u0020\\/\u00206\u0025\u0029\u003B\\n\u0020\u0020\u0020\u0020z\u002Dindex\u003A\u0020100\u003B\\n\u0020\u0020\u0020\u0020display\u003A\u0020flex\u003B\\n\u0020\u0020\u0020\u0020align\u002Ditems\u003A\u0020center\u003B\\n\u007D\\n\\n.perk_text\u003Ahover\u007B\\n\u0020\u0020\u0020\u0020position\u003A\u0020absolute\u003B\\n\u0020\u0020\u0020\u0020opacity\u003A\u00201\u003B\\n\u0020\u0020\u0020\u0020overflow\u003A\u0020visible\u003B\\n\u0020\u0020\u0020\u0020height\u003A\u002011vh\u003B\\n\u0020\u0020\u0020\u0020background\u002Dcolor\u003A\u0020white\u003B\\n\u0020\u0020\u0020\u0020z\u002Dindex\u003A\u0020100\u003B\\n\u0020\u0020\u0020\u0020margin\u002Dtop\u003A\u0020\u002D20px\u003B\\n\u007D\\n\\n\\/\u002A\u0020summary\u0020\u007B\\n\u0020\u0020\u0020\u0020display\u003A\u0020\u002Dwebkit\u002Dbox\u003B\\n\u0020\u0020\u0020\u0020display\u003A\u0020\u002Dms\u002Dflexbox\u003B\\n\u0020\u0020\u0020\u0020display\u003A\u0020flex\u003B\\n\u0020\u0020\u0020\u0020\u002Dwebkit\u002Dbox\u002Dalign\u003A\u0020center\u003B\\n\u0020\u0020\u0020\u0020\u002Dms\u002Dflex\u002Dalign\u003A\u0020center\u003B\\n\u0020\u0020\u0020\u0020align\u002Ditems\u003A\u0020center\u003B\\n\u0020\u0020\u0020\u0020position\u003A\u0020relative\u003B\\n\u007D\u0020\u002A\\/\\n\\n\\n.job_salary\u0020\u007B\\n\u0020\u0020\u0020\u0020background\u002Dcolor\u003A\u0020\u002315c5c0\u003B\\n\u0020\u0020\u0020\u0020background\u002Dimage\u003A\u0020linear\u002Dgradient\u0028113deg,\u0020\u0023186894,\u0020rgba\u002821,\u0020197,\u0020192,\u00200\u0029\u0029,\u0020url\u0028images\\/bg\u002Dpattern\u002Dwhite.png\u0029\u003B\\n\u0020\u0020\u0020\u0020padding\u003A\u002040px\u002020px\u002030px\u003B\\n\u0020\u0020\u0020\u0020color\u003A\u0020\u0023fff\u003B\\n\u0020\u0020\u0020\u0020\u002Dwebkit\u002Dbox\u002Dshadow\u003A\u00200\u00205px\u002025px\u00200\u0020rgba\u00280,\u00200,\u00200,\u0020.2\u0029\u003B\\n\u0020\u0020\u0020\u0020box\u002Dshadow\u003A\u00200\u00205px\u002025px\u00200\u0020rgba\u00280,\u00200,\u00200,\u0020.2\u0029\u003B\\n\u0020\u0020\u0020\u0020margin\u002Dtop\u003A\u002020px\u003B\\n\u0020\u0020\u0020\u0020\\/\u002A\u0020position\u003A\u0020absolute\u003B\u0020\u002A\\/\\n\u0020\u0020\u0020\u0020right\u003A\u002015px\u003B\\n\u0020\u0020\u0020\u0020left\u003A\u002015px\u003B\\n\u0020\u0020\u0020\u0020top\u003A\u002010\u0025\u003B\\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020font\u002Dsize\u003A\u002012px\u003B\\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020letter\u002Dspacing\u003A\u00202px\u003B\\n\u007D\\n\\n.job_salary_heading\u0020\u007B\\n\u0020\u0020\u0020\u0020margin\u003A\u00200\u003B\\n\u0020\u0020\u0020\u0020text\u002Dtransform\u003A\u0020uppercase\u003B\\n\u0020\u0020\u0020\u0020font\u002Dsize\u003A\u002014px\u003B\\n\u0020\u0020\u0020\u0020font\u002Dweight\u003A\u0020900\u003B\\n\u0020\u0020\u0020\u0020letter\u002Dspacing\u003A\u00202px\u003B\\n\u007D\\n\\n.job_salary_text\u0020\u007B\\n\u0020\u0020\u0020\u0020margin\u003A\u002010px\u00200\u003B\\n\u0020\u0020\u0020\u0020display\u003A\u0020\u002Dwebkit\u002Dbox\u003B\\n\u0020\u0020\u0020\u0020display\u003A\u0020\u002Dms\u002Dflexbox\u003B\\n\u0020\u0020\u0020\u0020display\u003A\u0020flex\u003B\\n\u0020\u0020\u0020\u0020\u002Dwebkit\u002Dbox\u002Dalign\u003A\u0020center\u003B\\n\u0020\u0020\u0020\u0020\u002Dms\u002Dflex\u002Dalign\u003A\u0020center\u003B\\n\u0020\u0020\u0020\u0020align\u002Ditems\u003A\u0020center\u003B\\n\u0020\u0020\u0020\u0020font\u002Dsize\u003A\u002016px\u003B\\n\u007D\\n\\n.job_salary_title\u0020\u007B\\n\u0020\u0020\u0020\u0020\u002Dwebkit\u002Dbox\u002Dflex\u003A\u00200\u003B\\n\u0020\u0020\u0020\u0020\u002Dms\u002Dflex\u003A\u00200\u00200\u0020100px\u003B\\n\u0020\u0020\u0020\u0020flex\u003A\u00200\u00200\u0020100px\u003B\\n\u0020\u0020\u0020\u0020font\u002Dsize\u003A\u002016px\u003B\\n\u0020\u0020\u0020\u0020line\u002Dheight\u003A\u00201.5\u003B\\n\u007D\\n\\n.job_salary_range\u0020\u007B\\n\u0020\u0020\u0020\u0020font\u002Dsize\u003A\u002012px\u003B\\n\u0020\u0020\u0020\u0020letter\u002Dspacing\u003A\u00202px\u003B\\n\u007D\\n\\n\\n.skills\u0020\u007B\\n\u0020\u0020\u0020\u0020padding\u003A\u0020170px\u00200\u002030px\u003B\\n\u007D\\n\\n.skills_text\u0020\u007B\\n\u0020\u0020\u0020\u0020font\u002Dweight\u003A\u0020400\u003B\\n\u0020\u0020\u0020\u0020font\u002Dsize\u003A\u002014px\u003B\\n\u0020\u0020\u0020\u0020margin\u002Dleft\u003A\u002010px\u003B\\n\u0020\u0020\u0020\u0020line\u002Dheight\u003A\u00201.67\u003B\\n\u007D\\n\\n.skills\u0020ul\u0020\u007B\\n\u0020\u0020\u0020\u0020max\u002Dwidth\u003A\u0020680px\u003B\\n\u0020\u0020\u0020\u0020padding\u002Dleft\u003A\u002025px\u003B\\n\u0020\u0020\u0020\u0020list\u002Dstyle\u003A\u0020none\u003B\\n\u007D\\n\\n.skills\u0020li\u0020\u007B\\n\u0020\u0020\u0020\u0020position\u003A\u0020relative\u003B\\n\u0020\u0020\u0020\u0020font\u002Dsize\u003A\u002014px\u003B\\n\u0020\u0020\u0020\u0020line\u002Dheight\u003A\u00201.71\u003B\\n\u0020\u0020\u0020\u0020margin\u003A\u002010px\u002010px\u003B\\n\u007D\\n\\n.skills\u0020li\u003Abefore\u0020\u007B\\n\u0020\u0020\u0020\u0020content\u003A\u0020\\\u0022\\\u0022\u003B\\n\u0020\u0020\u0020\u0020display\u003A\u0020block\u003B\\n\u0020\u0020\u0020\u0020position\u003A\u0020absolute\u003B\\n\u0020\u0020\u0020\u0020width\u003A\u00205px\u003B\\n\u0020\u0020\u0020\u0020height\u003A\u00205px\u003B\\n\u0020\u0020\u0020\u0020background\u002Dcolor\u003A\u0020\u00231ebec0\u003B\\n\u0020\u0020\u0020\u0020border\u002Dradius\u003A\u002050\u0025\u003B\\n\u0020\u0020\u0020\u0020left\u003A\u0020\u002D25px\u003B\\n\u0020\u0020\u0020\u0020top\u003A\u002010px\u003B\\n\u007D\\n\\n.job\u002Dpost\u0020.job\u002Dpost__main\u0020.main__article\u0020\u007B\\n\u0020\u0020\u0020\u0020background\u002Dimage\u003A\u0020\u002Dwebkit\u002Dgradient\u0028linear,right\u0020top,left\u0020top,from\u0028hsla\u00280,0\u0025,97.6\u0025,.3\u0029\u0029,to\u0028\u0023f9f9f9\u0029\u0029,url\u0028https\u003A\\/\\/career.stxnext.com\\/wp\u002Dcontent\\/themes\\/stxcareers\\/images\\/bg\u002Dpattern.png\u0029\u003B\\n\u0020\u0020\u0020\u0020background\u002Dimage\u003A\u0020linear\u002Dgradient\u0028270deg,hsla\u00280,0\u0025,97.6\u0025,.3\u0029,\u0023f9f9f9\u0029,url\u0028https\u003A\\/\\/career.stxnext.com\\/wp\u002Dcontent\\/themes\\/stxcareers\\/images\\/bg\u002Dpattern.png\u0029\u003B\\n\u007D\\n\\n.job\u002Dpost\u0020.job\u002Dpost__main\u0020.main__article\u0020.article__content\u0020ul\u0020\u007B\\n\u0020\u0020\u0020\u0020padding\u002Dinline\u002Dstart\u003A\u00201em\u003B\\n\u007D\\n\\n.job\u002Dpost\u0020.job\u002Dpost__main\u0020.main__article\u0020.article__content\u0020li\u003A\u003Amarker\u0020\u007B\\n\u0020\u0020\u0020\u0020color\u003A\u0020\u00231ebec0\u003B\\n\u007D\\n\\n.job\u002Dpost\u0020.job\u002Dpost__main\u0020.main__article\u0020.article__content\u0020li\u0020\u007B\\n\u0020\u0020\u0020\u0020margin\u003A\u002010px\u00200\u003B\\n\u0020\u0020\u0020\u0020padding\u002Dleft\u003A\u00201em\u003B\\n\u0020\u0020\u0020\u0020position\u003A\u0020relative\u003B\\n\u0020\u0020\u0020\u0020font\u002Dsize\u003A\u002014px\u003B\\n\u007D\\n\\n.job\u002Dpost\u0020.job\u002Dpost__main\u0020.main__article\u0020.article__content\u0020p\u0020\u007B\\n\u0020\u0020\u0020\u0020line\u002Dheight\u003A\u00202\u003B\\n\u0020\u0020\u0020\u0020font\u002Dsize\u003A\u002014px\u003B\\n\u007D\u0022,\u0022announcement_page\u0022\u003Anull,\u0022custom_traffit_row_string\u0022\u003Anull,\u0022embed_code_config\u0022\u003A\u0022\u007B\\\u0022additionalStyles\\\u0022\u003A\\\u0022\u0020\u0020\\\\\\/\u002A\u0020ADVERT\u0020\u002A\\\\\\/\\\\n\u0020\u0020\u0020\u0020.job\u002Dpost\u0020.button\u002D\u002Dcta,\u0020.job\u002Dpost\u0020.job\u002Dpost__mobile\u002Dmenu\u0020.mobile\u002Dmenu__button\u0020\u007B\\\\n\u0020\u0020\u0020\u0020\u0020\u0020color\u003A\u0020white\u003B\\\\n\u0020\u0020\u0020\u0020\u0020\u0020background\u002Dcolor\u003A\u0020\u0023196694\\\\n\u0020\u0020\u0020\u0020\u007D\\\\n\u0020\u0020\\\\\\/\u002A\u0020FORM\u0020\u002A\\\\\\/\\\\n\u0020\u0020\u0020\u0020.traffit\u002Dpublic\u002Dform\u0020.traffit\u002Dpublic\u002Dform__main\u0020.main__form\u0020.form__button\u002Dwrapper\u0020.submit\u002Dbutton\u0020\u007B\\\\n\u0020\u0020\u0020\u0020\u0020\u0020color\u003A\u0020white\u003B\\\\n\u0020\u0020\u0020\u0020\u0020\u0020background\u002Dcolor\u003A\u0020\u0023196694\\\\n\u0020\u0020\u0020\u0020\u007D\\\\n\\\\\\/\u002A\u0020bullets\u0020\u002A\\\\\\/\\\\nul\u0020li\u003A\u003Abefore\u0020\u007B\u0020\\\\ncolor\u003A\u0020\u00231ebec0\u0020\u0021important\u003B\\\\n\u007D\\\\nul\u0020li\u0020\u007B\\\\ncolor\u003A\u0020\u00231ebec0\u0020\u0021important\u003B\\\\n\u007D\\\\nli\u003A\u003Abefore\u0020\u007B\u0020color\u003A\u0020\u00231ebec0\u003B\u007D\\\\n\\\\n\\\\n\\\\nhtml\u0020\u007B\\\\n\\\\n\\\\n\u0020\u0020\u0020\u0020font\u002Dfamily\u003A\u0020lato\u003B\\\\n\\\\n\u007D\\\\n\\\\nbody\u0020\u007B\\\\n\u0020\u0020\u0020\u0020background\u002Dcolor\u003A\u0020white\u003B\\\\n\u0020\u0020\u0020\u0020font\u002Dfamily\u003A\u0020Lato\u003B\u0020\u0020\u0020\u0020\\\\n\u007D\\\\n\\\\nh1\u0020\u007B\\\\n\u0020\u0020\u0020\u0020text\u002Dalign\u003A\u0020center\u003B\\\\n\u007D\\\\n\\\\n\\\\np\u0020\u007B\\\\n\u0020\u0020\u0020\u0020font\u002Dsize\u003A\u002020px\u003B\\\\n\u007D\\\\n\\\\n.backdrop_img\u0020\u007B\\\\n\u0020\u0020\u0020\u0020background\u002Dimage\u003A\u0020\u002Dwebkit\u002Dgradient\u0028linear,right\u0020top,left\u0020top,from\u0028hsla\u00280,0\u0025,97.6\u0025,.3\u0029\u0029,to\u0028\u0023f9f9f9\u0029\u0029,url\u0028https\u003A\\\\\\/\\\\\\/career.stxnext.com\\\\\\/wp\u002Dcontent\\\\\\/themes\\\\\\/stxcareers\\\\\\/images\\\\\\/bg\u002Dpattern.png\u0029\u003B\\\\n\u0020\u0020\u0020\u0020background\u002Dimage\u003A\u0020linear\u002Dgradient\u0028270deg,hsla\u00280,0\u0025,97.6\u0025,.3\u0029,\u0023f9f9f9\u0029,url\u0028https\u003A\\\\\\/\\\\\\/career.stxnext.com\\\\\\/wp\u002Dcontent\\\\\\/themes\\\\\\/stxcareers\\\\\\/images\\\\\\/bg\u002Dpattern.png\u0029\u003B\\\\n\u007D\\\\n\\\\n.Benefits_grid\u0020\u007B\\\\n\u0020\u0020\u0020\u0020display\u003A\u0020\u0020\u0020\u0020grid\u003B\\\\n\u0020\u0020\u0020\u0020gap\u003A\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u00201.3em\u003B\\\\n\u0020\u0020\u0020\u0020padding\u003A\u002030px\u002010px\u002030px\u003B\\\\n\u0020\u0020\u0020\u0020margin\u002Dbottom\u003A\u002080px\u003B\\\\n\u007D\\\\n\\\\n\u0040media\u0020\u0028min\u002Dwidth\u003A\u0020480px\u0029\u0020\u007B\\\\n\u0020\u0020\u0020\u0020.Benefits_grid\u0020\u007B\\\\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020grid\u002Dtemplate\u002Dcolumns\u003A\u00201fr\u00201fr\u003B\\\\n\u0020\u0020\u0020\u0020\u007D\\\\n\u0020\u0020\u0020\u0020.Benefit_perk\u003Ahover\u0020\u002B\u0020.perk_text,\u0020\\\\n\u0020\u0020\u0020\u0020.perk_text\u003Ahover,\u0020\\\\n\u0020\u0020\u0020\u0020.perk_text\u0020\u007B\\\\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020width\u003A\u002045\u0025\u003B\\\\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u002Dwebkit\u002Dbox\u002Dshadow\u003A\u00200\u002015px\u002040px\u00200\u0020rgb\u00280\u00200\u00200\u0020\\\\\\/\u00206\u0025\u0029\u003B\\\\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020box\u002Dshadow\u003A\u00200\u002015px\u002040px\u00200\u0020rgb\u00280\u00200\u00200\u0020\\\\\\/\u00206\u0025\u0029\u003B\\\\n\u0020\u0020\u0020\u0020\u007D\\\\n\\\\n\u007D\\\\n\u0040media\u0020\u0028min\u002Dwidth\u003A\u00201250px\u0029\u0020\u007B\\\\n\u0020\u0020\u0020\u0020.Benefits_grid\u0020\u007B\\\\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020grid\u002Dtemplate\u002Dcolumns\u003A\u00201fr\u00201fr\u00201fr\u003B\\\\n\u0020\u0020\u0020\u0020\u007D\\\\n\u0020\u0020\u0020\u0020.Benefit_perk\u003Ahover\u0020\u002B\u0020.perk_text,\u0020\\\\n\u0020\u0020\u0020\u0020.perk_text\u003Ahover,\u0020\\\\n\u0020\u0020\u0020\u0020.perk_text\u0020\u007B\\\\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020width\u003A\u002030\u0025\u003B\\\\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u002Dwebkit\u002Dbox\u002Dshadow\u003A\u00200\u002015px\u002040px\u00200\u0020rgb\u00280\u00200\u00200\u0020\\\\\\/\u00206\u0025\u0029\u003B\\\\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020box\u002Dshadow\u003A\u00200\u002015px\u002040px\u00200\u0020rgb\u00280\u00200\u00200\u0020\\\\\\/\u00206\u0025\u0029\u003B\\\\n\u0020\u0020\u0020\u0020\u007D\\\\n\u0020\u0020\u0020\u0020\\\\n\u007D\\\\n\\\\n.article_flow\u0020\u007B\\\\n\u0020\u0020\u0020\u0020overflow\u003A\u0020\u0020\u0020hidden\u003B\\\\n\u007D\\\\n\\\\n\\\\n.Benefit_perk\u0020\u007B\\\\n\u0020\u0020\u0020\u0020display\u003A\u0020\u002Dwebkit\u002Dbox\u003B\\\\n\u0020\u0020\u0020\u0020\\\\\\/\u002A\u0020display\u003A\u0020\u002Dms\u002Dflexbox\u003B\\\\n\u0020\u0020\u0020\u0020display\u003A\u0020flex\u003B\u0020\u002A\\\\\\/\\\\n\u0020\u0020\u0020\u0020\u002Dwebkit\u002Dbox\u002Dalign\u003A\u0020center\u003B\\\\n\u0020\u0020\u0020\u0020\u002Dms\u002Dflex\u002Dalign\u003A\u0020center\u003B\\\\n\u0020\u0020\u0020\u0020align\u002Ditems\u003A\u0020center\u003B\\\\n\u0020\u0020\u0020\u0020position\u003A\u0020relative\u003B\\\\n\u0020\u0020\u0020\u0020overflow\u003A\u0020hidden\u003B\\\\n\u0020\u0020\u0020\u0020\\\\\\/\u002A\u0020border\u003A\u0020rgb\u0028138,\u0020138,\u0020138\u0029\u003B\\\\n\u0020\u0020\u0020\u0020border\u002Dwidth\u003A\u00201px\u003B\\\\n\u0020\u0020\u0020\u0020border\u002Dstyle\u003A\u0020solid\u003B\\\\n\u0020\u0020\u0020\u0020border\u002Dradius\u003A\u002015px\u003B\u0020\u002A\\\\\\/\\\\n\u007D\\\\n\\\\n.Benefit_perk\u003Ahover\u0020\u007B\\\\n\u0020\u0020\u0020\u0020\\\\\\/\u002A\u0020background\u002Dcolor\u003A\u0020white\u003B\u0020\u002A\\\\\\/\\\\n\u0020\u0020\u0020\u0020overflow\u003A\u0020visible\u003B\\\\n\u007D\\\\n\\\\n.Benefit_perk\u003Ahover\u0020\u002B\u0020.perk_text\u0020\u007B\\\\n\u0020\u0020\u0020\u0020\\\\\\/\u002A\u0020\u002B\u0020\u003E\u0020\u002A\\\\\\/\u0020\\\\n\u0020\u0020\u0020\u0020position\u003A\u0020absolute\u003B\\\\n\u0020\u0020\u0020\u0020opacity\u003A\u00201\u003B\\\\n\u0020\u0020\u0020\u0020visibility\u003A\u0020visible\u003B\\\\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u002Dwebkit\u002Dtransition\u003A\u0020.15s\u0020ease\u002Din\u002Dout\u003B\\\\n\u0020\u0020\u0020\u0020transition\u003A\u0020.15s\u0020ease\u002Din\u002Dout\u003B\\\\n\u0020\u0020\u0020\u0020overflow\u003A\u0020visible\u003B\\\\n\u0020\u0020\u0020\u0020height\u003A\u002011vh\u003B\\\\n\u0020\u0020\u0020\u0020z\u002Dindex\u003A\u0020100\u003B\\\\n\u0020\u0020\u0020\u0020\\\\\\/\u002A\u0020display\u003A\u0020block\u003B\u0020\u002A\\\\\\/\\\\n\u0020\u0020\u0020\u0020margin\u002Dtop\u003A\u0020\u002D20px\u003B\\\\n\u007D\\\\n\\\\n\\\\n\\\\\\/\u002A\u0020.Benefit_perk\u003Ahover\u0020.Benefit_perk\u003Ahover\u003Abefore\u0020\u0020\u007B\\\\n\u0020\u0020\u0020\u0020opacity\u003A\u00201\u003B\\\\n\u0020\u0020\u0020\u0020visibility\u003A\u0020visible\u003B\\\\n\u007D\u0020\u002A\\\\\\/\\\\n.perk_figure\u0020\u007B\\\\n\u0020\u0020\u0020\u0020\\\\\\/\u002A\u0020width\u003A\u002075px\u003B\u0020\u002A\\\\\\/\\\\n\u0020\u0020\u0020\u0020\\\\\\/\u002A\u0020margin\u003A\u00200\u003B\u0020\u002A\\\\\\/\\\\n\u0020\u0020\u0020\u0020margin\u002Dright\u003A\u002020px\u003B\\\\n\u0020\u0020\u0020\u0020margin\u002Dleft\u003A\u0020\u0020\u00200px\u003B\\\\n\u007D\\\\n\\\\n.perk_title\u0020\u007B\\\\n\u0020\u0020\u0020\u0020font\u002Dsize\u003A\u002016px\u003B\\\\n\u0020\u0020\u0020\u0020width\u003A\u002073\u0025\u003B\\\\n\u007D\\\\n\\\\n.perk_text\u0020\u007B\\\\n\u0020\u0020\u0020\u0020font\u002Dsize\u003A\u002014px\u003B\\\\n\u0020\u0020\u0020\u0020opacity\u003A\u00200\u003B\\\\n\u0020\u0020\u0020\u0020\\\\\\/\u002A\u0020display\u003A\u0020none\u003B\u0020\u002A\\\\\\/\\\\n\u0020\u0020\u0020\u0020margin\u002Dtop\u003A\u00200px\u003B\\\\n\u0020\u0020\u0020\u0020margin\u002Dbottom\u003A\u00200px\u003B\\\\n\u0020\u0020\u0020\u0020padding\u002Dleft\u003A\u0020\u002010px\u003B\\\\n\u0020\u0020\u0020\u0020padding\u002Dright\u003A\u002010px\u003B\\\\n\u0020\u0020\u0020\u0020\\\\\\/\u002A\u0020padding\u002Dtop\u003A\u002010px\u003B\u0020\u002A\\\\\\/height\u003A\u00200px\u003B\\\\n\u0020\u0020\u0020\u0020line\u002Dheight\u003A\u00201.5em\u003B\\\\n\u0020\u0020\u0020\u0020background\u002Dcolor\u003A\u0020white\u003B\\\\n\u0020\u0020\u0020\u0020\u002Dwebkit\u002Dbox\u002Dshadow\u003A\u00200\u002015px\u002040px\u00200\u0020rgb\u00280\u00200\u00200\u0020\\\\\\/\u00206\u0025\u0029\u003B\\\\n\u0020\u0020\u0020\u0020box\u002Dshadow\u003A\u00200\u002015px\u002040px\u00200\u0020rgb\u00280\u00200\u00200\u0020\\\\\\/\u00206\u0025\u0029\u003B\\\\n\u0020\u0020\u0020\u0020z\u002Dindex\u003A\u0020100\u003B\\\\n\u0020\u0020\u0020\u0020display\u003A\u0020flex\u003B\\\\n\u0020\u0020\u0020\u0020align\u002Ditems\u003A\u0020center\u003B\\\\n\u007D\\\\n\\\\n.perk_text\u003Ahover\u007B\\\\n\u0020\u0020\u0020\u0020position\u003A\u0020absolute\u003B\\\\n\u0020\u0020\u0020\u0020opacity\u003A\u00201\u003B\\\\n\u0020\u0020\u0020\u0020overflow\u003A\u0020visible\u003B\\\\n\u0020\u0020\u0020\u0020height\u003A\u002011vh\u003B\\\\n\u0020\u0020\u0020\u0020background\u002Dcolor\u003A\u0020white\u003B\\\\n\u0020\u0020\u0020\u0020z\u002Dindex\u003A\u0020100\u003B\\\\n\u0020\u0020\u0020\u0020margin\u002Dtop\u003A\u0020\u002D20px\u003B\\\\n\u007D\\\\n\\\\n\\\\\\/\u002A\u0020summary\u0020\u007B\\\\n\u0020\u0020\u0020\u0020display\u003A\u0020\u002Dwebkit\u002Dbox\u003B\\\\n\u0020\u0020\u0020\u0020display\u003A\u0020\u002Dms\u002Dflexbox\u003B\\\\n\u0020\u0020\u0020\u0020display\u003A\u0020flex\u003B\\\\n\u0020\u0020\u0020\u0020\u002Dwebkit\u002Dbox\u002Dalign\u003A\u0020center\u003B\\\\n\u0020\u0020\u0020\u0020\u002Dms\u002Dflex\u002Dalign\u003A\u0020center\u003B\\\\n\u0020\u0020\u0020\u0020align\u002Ditems\u003A\u0020center\u003B\\\\n\u0020\u0020\u0020\u0020position\u003A\u0020relative\u003B\\\\n\u007D\u0020\u002A\\\\\\/\\\\n\\\\n\\\\n.job_salary\u0020\u007B\\\\n\u0020\u0020\u0020\u0020background\u002Dcolor\u003A\u0020\u002315c5c0\u003B\\\\n\u0020\u0020\u0020\u0020background\u002Dimage\u003A\u0020linear\u002Dgradient\u0028113deg,\u0020\u0023186894,\u0020rgba\u002821,\u0020197,\u0020192,\u00200\u0029\u0029,\u0020url\u0028images\\\\\\/bg\u002Dpattern\u002Dwhite.png\u0029\u003B\\\\n\u0020\u0020\u0020\u0020padding\u003A\u002040px\u002020px\u002030px\u003B\\\\n\u0020\u0020\u0020\u0020color\u003A\u0020\u0023fff\u003B\\\\n\u0020\u0020\u0020\u0020\u002Dwebkit\u002Dbox\u002Dshadow\u003A\u00200\u00205px\u002025px\u00200\u0020rgba\u00280,\u00200,\u00200,\u0020.2\u0029\u003B\\\\n\u0020\u0020\u0020\u0020box\u002Dshadow\u003A\u00200\u00205px\u002025px\u00200\u0020rgba\u00280,\u00200,\u00200,\u0020.2\u0029\u003B\\\\n\u0020\u0020\u0020\u0020margin\u002Dtop\u003A\u002020px\u003B\\\\n\u0020\u0020\u0020\u0020\\\\\\/\u002A\u0020position\u003A\u0020absolute\u003B\u0020\u002A\\\\\\/\\\\n\u0020\u0020\u0020\u0020right\u003A\u002015px\u003B\\\\n\u0020\u0020\u0020\u0020left\u003A\u002015px\u003B\\\\n\u0020\u0020\u0020\u0020top\u003A\u002010\u0025\u003B\\\\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020font\u002Dsize\u003A\u002012px\u003B\\\\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020letter\u002Dspacing\u003A\u00202px\u003B\\\\n\u007D\\\\n\\\\n.job_salary_heading\u0020\u007B\\\\n\u0020\u0020\u0020\u0020margin\u003A\u00200\u003B\\\\n\u0020\u0020\u0020\u0020text\u002Dtransform\u003A\u0020uppercase\u003B\\\\n\u0020\u0020\u0020\u0020font\u002Dsize\u003A\u002014px\u003B\\\\n\u0020\u0020\u0020\u0020font\u002Dweight\u003A\u0020900\u003B\\\\n\u0020\u0020\u0020\u0020letter\u002Dspacing\u003A\u00202px\u003B\\\\n\u007D\\\\n\\\\n.job_salary_text\u0020\u007B\\\\n\u0020\u0020\u0020\u0020margin\u003A\u002010px\u00200\u003B\\\\n\u0020\u0020\u0020\u0020display\u003A\u0020\u002Dwebkit\u002Dbox\u003B\\\\n\u0020\u0020\u0020\u0020display\u003A\u0020\u002Dms\u002Dflexbox\u003B\\\\n\u0020\u0020\u0020\u0020display\u003A\u0020flex\u003B\\\\n\u0020\u0020\u0020\u0020\u002Dwebkit\u002Dbox\u002Dalign\u003A\u0020center\u003B\\\\n\u0020\u0020\u0020\u0020\u002Dms\u002Dflex\u002Dalign\u003A\u0020center\u003B\\\\n\u0020\u0020\u0020\u0020align\u002Ditems\u003A\u0020center\u003B\\\\n\u0020\u0020\u0020\u0020font\u002Dsize\u003A\u002016px\u003B\\\\n\u007D\\\\n\\\\n.job_salary_title\u0020\u007B\\\\n\u0020\u0020\u0020\u0020\u002Dwebkit\u002Dbox\u002Dflex\u003A\u00200\u003B\\\\n\u0020\u0020\u0020\u0020\u002Dms\u002Dflex\u003A\u00200\u00200\u0020100px\u003B\\\\n\u0020\u0020\u0020\u0020flex\u003A\u00200\u00200\u0020100px\u003B\\\\n\u0020\u0020\u0020\u0020font\u002Dsize\u003A\u002016px\u003B\\\\n\u0020\u0020\u0020\u0020line\u002Dheight\u003A\u00201.5\u003B\\\\n\u007D\\\\n\\\\n.job_salary_range\u0020\u007B\\\\n\u0020\u0020\u0020\u0020font\u002Dsize\u003A\u002012px\u003B\\\\n\u0020\u0020\u0020\u0020letter\u002Dspacing\u003A\u00202px\u003B\\\\n\u007D\\\\n\\\\n\\\\n.skills\u0020\u007B\\\\n\u0020\u0020\u0020\u0020padding\u003A\u0020170px\u00200\u002030px\u003B\\\\n\u007D\\\\n\\\\n.skills_text\u0020\u007B\\\\n\u0020\u0020\u0020\u0020font\u002Dweight\u003A\u0020400\u003B\\\\n\u0020\u0020\u0020\u0020font\u002Dsize\u003A\u002014px\u003B\\\\n\u0020\u0020\u0020\u0020margin\u002Dleft\u003A\u002010px\u003B\\\\n\u0020\u0020\u0020\u0020line\u002Dheight\u003A\u00201.67\u003B\\\\n\u007D\\\\n\\\\n.skills\u0020ul\u0020\u007B\\\\n\u0020\u0020\u0020\u0020max\u002Dwidth\u003A\u0020680px\u003B\\\\n\u0020\u0020\u0020\u0020padding\u002Dleft\u003A\u002025px\u003B\\\\n\u0020\u0020\u0020\u0020list\u002Dstyle\u003A\u0020none\u003B\\\\n\u007D\\\\n\\\\n.skills\u0020li\u0020\u007B\\\\n\u0020\u0020\u0020\u0020position\u003A\u0020relative\u003B\\\\n\u0020\u0020\u0020\u0020font\u002Dsize\u003A\u002014px\u003B\\\\n\u0020\u0020\u0020\u0020line\u002Dheight\u003A\u00201.71\u003B\\\\n\u0020\u0020\u0020\u0020margin\u003A\u002010px\u002010px\u003B\\\\n\u007D\\\\n\\\\n.skills\u0020li\u003Abefore\u0020\u007B\\\\n\u0020\u0020\u0020\u0020content\u003A\u0020\\\\\\\u0022\\\\\\\u0022\u003B\\\\n\u0020\u0020\u0020\u0020display\u003A\u0020block\u003B\\\\n\u0020\u0020\u0020\u0020position\u003A\u0020absolute\u003B\\\\n\u0020\u0020\u0020\u0020width\u003A\u00205px\u003B\\\\n\u0020\u0020\u0020\u0020height\u003A\u00205px\u003B\\\\n\u0020\u0020\u0020\u0020background\u002Dcolor\u003A\u0020\u00231ebec0\u003B\\\\n\u0020\u0020\u0020\u0020border\u002Dradius\u003A\u002050\u0025\u003B\\\\n\u0020\u0020\u0020\u0020left\u003A\u0020\u002D25px\u003B\\\\n\u0020\u0020\u0020\u0020top\u003A\u002010px\u003B\\\\n\u007D\\\\n\\\\n.job\u002Dpost\u0020.job\u002Dpost__main\u0020.main__article\u0020\u007B\\\\n\u0020\u0020\u0020\u0020background\u002Dimage\u003A\u0020\u002Dwebkit\u002Dgradient\u0028linear,right\u0020top,left\u0020top,from\u0028hsla\u00280,0\u0025,97.6\u0025,.3\u0029\u0029,to\u0028\u0023f9f9f9\u0029\u0029,url\u0028https\u003A\\\\\\/\\\\\\/career.stxnext.com\\\\\\/wp\u002Dcontent\\\\\\/themes\\\\\\/stxcareers\\\\\\/images\\\\\\/bg\u002Dpattern.png\u0029\u003B\\\\n\u0020\u0020\u0020\u0020background\u002Dimage\u003A\u0020linear\u002Dgradient\u0028270deg,hsla\u00280,0\u0025,97.6\u0025,.3\u0029,\u0023f9f9f9\u0029,url\u0028https\u003A\\\\\\/\\\\\\/career.stxnext.com\\\\\\/wp\u002Dcontent\\\\\\/themes\\\\\\/stxcareers\\\\\\/images\\\\\\/bg\u002Dpattern.png\u0029\u003B\\\\n\u007D\\\\n\\\\n.job\u002Dpost\u0020.job\u002Dpost__main\u0020.main__article\u0020.article__content\u0020ul\u0020\u007B\\\\n\u0020\u0020\u0020\u0020padding\u002Dinline\u002Dstart\u003A\u00201em\u003B\\\\n\u007D\\\\n\\\\n.job\u002Dpost\u0020.job\u002Dpost__main\u0020.main__article\u0020.article__content\u0020li\u003A\u003Amarker\u0020\u007B\\\\n\u0020\u0020\u0020\u0020color\u003A\u0020\u00231ebec0\u003B\\\\n\u007D\\\\n\\\\n.job\u002Dpost\u0020.job\u002Dpost__main\u0020.main__article\u0020.article__content\u0020li\u0020\u007B\\\\n\u0020\u0020\u0020\u0020margin\u003A\u002010px\u00200\u003B\\\\n\u0020\u0020\u0020\u0020padding\u002Dleft\u003A\u00201em\u003B\\\\n\u0020\u0020\u0020\u0020position\u003A\u0020relative\u003B\\\\n\u0020\u0020\u0020\u0020font\u002Dsize\u003A\u002014px\u003B\\\\n\u007D\\\\n\\\\n.job\u002Dpost\u0020.job\u002Dpost__main\u0020.main__article\u0020.article__content\u0020p\u0020\u007B\\\\n\u0020\u0020\u0020\u0020line\u002Dheight\u003A\u00202\u003B\\\\n\u0020\u0020\u0020\u0020font\u002Dsize\u003A\u002014px\u003B\\\\n\u007D\\\u0022\u007D\u0022\u007D';
  var settings = JSON.parse(settingsString);

  var embedCodeConfig = {};

  if (settings.embed_code_config) {
    try {
      var parsedData = JSON.parse(settings.embed_code_config);
      embedCodeConfig = Object.fromEntries(
        Object.entries(parsedData).map(([key, value]) => [
          key,
          key === 'additionalStyles' ? stripTags(value) : escapeHtml(value),
        ]),
      );
    } catch (e) {
      console.error(e);
    }
  }

  var defaultLimit = 10;

  var scriptConfig = {
    ...embedCodeConfig,
    customTraffitRowString: settings['custom_traffit_row_string'],
    careerPageJobPostLimit: defaultLimit,
    jobPostLimit: parseInt(embedCodeConfig.jobPostLimit || defaultLimit),
  };

  var browserLang = navigator.language || navigator.userLanguage;
  var browserLangShort = browserLang.substr(0, 2);
  var createTranslator = (locales, language) => (message) => {
    var locale = locales[browserLangShort] || locales['en'];
    return locale[message];
  };
  var t = createTranslator(locales, browserLangShort);

  var isWithinAts = !!document.querySelector('script[data-name="traffit"]');
  var limit = Math.max(
    1,
    isWithinAts ? scriptConfig.careerPageJobPostLimit : scriptConfig.jobPostLimit,
  );

  var request = {
    obj: {},
    filter: [],
    limit,
    offset: 0,
    page: 1,
  };

  let selectedJobCategory;
  let selectedLocation;

  var traffitSite = decodeURIComponent('https\u003A//stxnext.traffit.com/');

  var columnCount = scriptConfig.jobListing === 'boxes' ? 2 : 1;

  var fontColorVar = '--traffit-an-list-font-color';
  var leadingColorVar = '--traffit-an-list-leading-color';
  var backgroundColorVar = '--traffit-an-list-background-color';
  var fontFamilyVar = '--traffit-an-list-font-family';

  var fontPreconnect =
    '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>';
  var fontUrl =
    fontPreconnect +
    '<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">';

  var root = document.documentElement;
  if (scriptConfig.fontColor) {
    root.style.setProperty(fontColorVar, scriptConfig.fontColor);
  }
  if (scriptConfig.leadingColor) {
    root.style.setProperty(leadingColorVar, scriptConfig.leadingColor);
  }
  if (scriptConfig.backgroundColor) {
    root.style.setProperty(backgroundColorVar, scriptConfig.backgroundColor);
  }
  if (scriptConfig.fontFamily) {
    var fontFamilyValue = scriptConfig.fontFamily;
    var googleFonts = ['Lato', 'Roboto', 'Poppins', 'Open Sans'].map((font) => font.toLowerCase());

    if (googleFonts.includes(fontFamilyValue.toLowerCase())) {
      var formattedFontFamily = fontFamilyValue.replace(/ /g, '+');
      fontUrl = `${fontPreconnect}<link href="https://fonts.googleapis.com/css2?family=${formattedFontFamily}:wght@300;400;500;700&display=swap" rel="stylesheet">`;
      fontFamilyValue = `'${fontFamilyValue}', sans-serif`;
    } else {
      fontUrl = undefined;
    }
    root.style.setProperty(fontFamilyVar, fontFamilyValue);
  }

  var divId = 'traffit-an-list-xtxrxaxfxixtx2x0x1x6x';
  var filterId = 'traffit-an-filters-xtxrxaxfxixtx2x0x1x6x';
  var listId = 'xtxrxaxfxixtx2x0x1x6x-list-div';
  var scriptType = 'filters';
  var paginationId = 'xtxrxaxfxixtx2x0x1x6x-pagination-div';
  var coreDiv, listDiv, filtersDiv, paginationDiv, counterSpan, infoDiv, loader;
  var iconsFont =
    '<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">';
  var styles =
    '<link rel="stylesheet" href="https\u003A//cdn3.traffit.com/24S43092/bundles/traffitcareerpage/styles/main.css">';
  var scripts =
    '<script type="text/javascript" src="https\u003A//cdn3.traffit.com/24S43092/bundles/traffitcareerpage/app/careerFront.js"></script>';
  var hoverFilter = 'filter: brightness(90%);';
  var outsideStyles =
    '<style>' +
    `:root { ${fontColorVar}: #0b285b; ${leadingColorVar}: #2862ef; ${backgroundColorVar}: #ffffff; ${fontFamilyVar}: 'Roboto', sans-serif; }` +
    '.traffit-xx-flex-container{display: -moz-box; display: -webkit-flexbox; display: -ms-flexbox; display: -webkit-flex; display: -moz-flex; display: flex; -moz-flex-flow: row; -ms-flex-flow: row; flex-flow: row; }' +
    '.traffit-xx-flex-big{ -moz-box-flex: 1 1 auto;-webkit-flex: 1 1 auto;-moz-flex: 1 1 auto;-ms-flex: 1 1 auto;flex: 1 1 auto; }' +
    '.traffit-xx-flex-no-shrink{ -moz-flex-shrink: 0;-ms-flex-shrink: 0;-webkit-flex-shrink: 0;flex-shrink: 0; }' +
    '@media screen and (max-width: 800px){ #traffit-an-filters-xtxrxaxfxixtx2x0x1x6x>div>*{width:100% !important; margin-bottom: 16px; margin-right: 0 !important; } } ' +
    `#traffit-an-list-xtxrxaxfxixtx2x0x1x6x, #traffit-an-filters-xtxrxaxfxixtx2x0x1x6x{ color: var(${fontColorVar}); font-family: var(${fontFamilyVar}); max-width: 1000px; margin: 0 auto; position:relative; padding: 0 20px;}` +
    `#traffit-an-list-xtxrxaxfxixtx2x0x1x6x .traffit-xx-input, #traffit-an-filters-xtxrxaxfxixtx2x0x1x6x .traffit-xx-input{  font-family: var(${fontFamilyVar});}` +
    '#traffit-an-list-xtxrxaxfxixtx2x0x1x6x *, #traffit-an-filters-xtxrxaxfxixtx2x0x1x6x *{ box-sizing: border-box; }' +
    '@media screen and (max-width: 800px){ #traffit-an-filters-xtxrxaxfxixtx2x0x1x6x>div{ flex-direction: column; } }' +
    `#traffit-an-list-xtxrxaxfxixtx2x0x1x6x select, #traffit-an-filters-xtxrxaxfxixtx2x0x1x6x select, #traffit-an-filters-xtxrxaxfxixtx2x0x1x6x input, #traffit-an-filters-xtxrxaxfxixtx2x0x1x6x select{font-family: var(${fontFamilyVar}); width:calc(20% - 36px); font-size:12px; border: none; padding: 12px 8px; background: white; outline: none;margin-right: 16px; box-shadow: 0px 1px 2px #C5C5C5;}` +
    `#traffit-an-filters-xtxrxaxfxixtx2x0x1x6x button{ font-size:12px;background: var(${fontColorVar});color: var(${backgroundColorVar});border: none;padding: 12px 0;font-family: var(${fontFamilyVar});border-radius: 2px;cursor: pointer; width: 80px;outline: none; box-shadow: 0px 1px 2px #C5C5C5;}` +
    `#traffit-an-filters-xtxrxaxfxixtx2x0x1x6x button:active, #traffit-an-filters-xtxrxaxfxixtx2x0x1x6x button:hover{ ${hoverFilter} }` +
    `#traffit-an-list-xtxrxaxfxixtx2x0x1x6x a{ color: var(${leadingColorVar}) !important; text-decoration: none !important; cursor: pointer;}` +
    '#xtxrxaxfxixtx2x0x1x6x-list-div {display: grid; margin: 12px 0; grid-gap: 12px;}' +
    `@media screen and (min-width: 840px) { #xtxrxaxfxixtx2x0x1x6x-list-div {grid-template-columns: repeat(${columnCount}, 1fr);}}` +
    `.traffit-an-list-xtxrxaxfxixtx2x0x1x6x-list-element{ display: flex; align-items: center; justify-content: space-between; padding: 0 50px; height: 120px; box-shadow: 0 0 25px 2px rgba(137, 187, 219, 0.2); border-radius: 12px; background-color: var(${backgroundColorVar}); cursor: pointer; min-width: 0;}` +
    `.traffit-an-list-xtxrxaxfxixtx2x0x1x6x-list-element:hover{ ${hoverFilter} }` +
    '@media screen and (max-width: 1000px) { .traffit-an-list-xtxrxaxfxixtx2x0x1x6x-list-element { height: 120px; padding: 0 30px;}}' +
    '@media screen and (max-width: 450px) { .traffit-an-list-xtxrxaxfxixtx2x0x1x6x-list-element { flex-direction: column; justify-content: center; align-items: center; height: auto; padding: 30px; }}' +
    '.traffit-an-list-xtxrxaxfxixtx2x0x1x6x-list-element .info { display: flex; flex-direction: column; overflow: hidden; }' +
    '@media screen and (max-width: 450px) { .traffit-an-list-xtxrxaxfxixtx2x0x1x6x-list-element .info { align-items: center; margin-bottom: 10px; width: 100%; }}' +
    `.traffit-an-list-xtxrxaxfxixtx2x0x1x6x-list-element .info .title { color: var(${fontColorVar}); font-size: 18px; font-weight: 700; margin-bottom: 10px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; padding-right: 8px; width: 100%; }` +
    `.traffit-an-list-xtxrxaxfxixtx2x0x1x6x-list-element .info .details { display: flex; color: var(${fontColorVar}); font-size: 14px; font-weight: 300; }` +
    '.traffit-an-list-xtxrxaxfxixtx2x0x1x6x-list-element .info .details > div { display: flex; align-items: center; padding-right: 8px; overflow: hidden;}' +
    '.traffit-an-list-xtxrxaxfxixtx2x0x1x6x-list-element .info .details > div > span { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }' +
    `.traffit-an-list-xtxrxaxfxixtx2x0x1x6x-list-element .info .details > div .material-icons { margin-right: 10px; color: var(${leadingColorVar}); font-size: 18px; }` +
    ".traffit-an-list-xtxrxaxfxixtx2x0x1x6x-list-element > div:after { content: ''; float: none; clear: both; display: block; }" +
    `#traffit-an-list-xtxrxaxfxixtx2x0x1x6x #xtxrxaxfxixtx2x0x1x6x-pagination-div > div:not(.xxxseparatorxxxtraffit) { display: inline-block; border-radius: 3px; border: 1px solid #b3b3b3; background-color: var(${backgroundColorVar});color: var(${fontColorVar}); text-align: center; line-height: 30px; width: 30px; height: 30px; cursor: pointer; margin: 4px; }` +
    `#traffit-an-list-xtxrxaxfxixtx2x0x1x6x #xtxrxaxfxixtx2x0x1x6x-pagination-div > div.xxxactivexxxtraffit { background: var(${fontColorVar}); color: var(${backgroundColorVar}); border-color: var(${fontColorVar}); }` +
    `#traffit-an-list-xtxrxaxfxixtx2x0x1x6x #xtxrxaxfxixtx2x0x1x6x-pagination-div > div.xxxactivexxxtraffit:hover { ${hoverFilter} }` +
    '#traffit-an-list-xtxrxaxfxixtx2x0x1x6x #xtxrxaxfxixtx2x0x1x6x-pagination-div > div.xxxseparatorxxxtraffit { display: inline-block; line-height: 30px; width: 30px; height: 30px; cursor: default; margin: 4px; text-align: center; }' +
    `#traffit-an-list-xtxrxaxfxixtx2x0x1x6x #xtxrxaxfxixtx2x0x1x6x-pagination-div > div:not(.xxxseparatorxxxtraffit):not(.xxxactivexxxtraffit):hover { ${hoverFilter} }` +
    '#traffit-an-filters-xtxrxaxfxixtx2x0x1x6x .traffit-xx-filter-clear { font-size: 12px; cursor: pointer; }' +
    `#traffit-pagin-xxx-counter:not(:empty), .traffit-xx-filter-clear { font-size: 12px; background-color: var(${backgroundColorVar}); border-radius: 3px; padding: 2px 8px; }` +
    '.traffit-xx-pagination-bottom > div { width: 50%; display: inline-block; }' +
    '.traffit-xx-pagination-bottom > div:last-child { text-align: right; }' +
    `.traffit-xx-info-box { margin-top: 16px; display: grid; place-items: center; color: var(${fontColorVar}); background-color: var(${backgroundColorVar});  padding: 0 50px; height: 120px; border-radius: 12px; box-shadow: 0 0 25px 2px rgba(137, 187, 219, 0.2); }` +
    '.traffit-xx-info-box:empty { display: none;}' +
    '.traffit-xx-loader { position: fixed; left: 0; top: 0; width: 100%; height: 100%; text-align: center; }' +
    '.traffit-xx-loader > div { position: absolute; width: 50px; height: 50px; left: 50%; top: 50%; margin: -25px 0 0 -25px; background: white; border-radius: 50%; padding: 5px; box-shadow: 0px 1px 2px #c5c5c5; }' +
    '#traffit-an-list-xtxrxaxfxixtx2x0x1x6x select, #traffit-an-filters-xtxrxaxfxixtx2x0x1x6x select, #traffit-an-list-xtxrxaxfxixtx2x0x1x6x input, #traffit-an-filters-xtxrxaxfxixtx2x0x1x6x input, #traffit-an-filters-xtxrxaxfxixtx2x0x1x6x button { border-radius: 5px; }' +
    `.btn-container__button { display: flex; justify-content: center; align-items: center; cursor: pointer; border-radius: 8px; background-color: var(${leadingColorVar}); color: white; font-size: 14px; font-weight: 400; text-transform: uppercase; padding: 15px 40px;  text-decoration: none; white-space: nowrap; }` +
    '.btn-container__button:hover, .btn-container__button:active, .btn-container__button:focus, .btn-container__button:visited { text-decoration: none; }' +
    `.btn-container__button--text-only { background: none; color: var(${leadingColorVar}); padding: 0; }` +
    `.btn-container__button--text-only span { max-width: 150px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }` +
    '.btn-container__button .material-icons { transition: transform 0.2s ease-in-out; }' +
    '.btn-container__button--opened .material-icons { transform: rotate(-90deg); }' +
    '.btn-container--align-start { justify-content: flex-start;}' +
    '</style>';

  var htmlDiv;

  if (scriptConfig.customTraffitRowString && scriptConfig.customTraffitRowString.length > 0) {
    htmlDiv = scriptConfig.customTraffitRowString;
  } else {
    htmlDiv =
      "<div class='traffit-an-list-xtxrxaxfxixtx2x0x1x6x-list-element {{awarded}}' onclick=\"window.open('{{url}}')\">" +
      "<div class='info'>" +
      `<div class='title' title="{{name}}">{{name}}</div>` +
      `<div class='details'>
          {{remoteHTML}}
          {{geolocationHTML}}
          </div>` +
      '</div>' +
      "<div class='btn-container'>" +
      "<div class='btn-container__button btn-container__button--text-only'>" +
      "<span title='{{readMore}}' >{{readMore}}</span><i class='material-icons'>keyboard_arrow_right</i>" +
      '</div>' +
      '</div>' +
      '</div>';
  }
  //   <input type="text" placeholder="${t(
  //     "location"
  //   )}" name="geolocation" class="traffit-xx-flex-no-shrink traffit-xx-input"/>

  //   <input type="text" placeholder="${t(
  //     "keyword"
  //   )}" name="query" class="traffit-xx-flex-big traffit-xx-input"/>

  var filtersInterior =
    `<div class="traffit-xx-flex-container traffit-xx-filters-container">` +
    `<div class="traffit-xx-select">
              <div class="traffit-xx-select-title">${t('locationTitle')}</div>
              <select name="geolocation" class="traffit-xx-flex-big traffit-xx-input"/>
                  <option disabled selected value> -- select an option -- </option>
              </select>
  
          </div>` +
    `<div class="traffit-xx-select">
              <div class="traffit-xx-select-title">${t('categoryTitle')}</div>
              <select name="job-category" class="traffit-xx-flex-big traffit-xx-input"/>
                <option disabled selected value> -- select an option -- </option>
              </select>
  
          </div>` +
    `<button onclick="xxtraffixxlist.search()" id="traff-xx-search-button" class="traffit-xx-flex-no-shrink">${t(
      'search',
    )}</button></div>` +
    `<div style="margin-top:8px;" class="traffit-xx-pagination-bottom">
          <div>
              <span class="traffit-xx-filter-clear" onclick="xxtraffixxlist.clear()">
              ${t('clearForm')}
              </span>
          </div>
          <div class="traffit-xx-filter-title">
             ${t('filterBy')}
          </div>
      </div>`;

  var paginationInterior =
    "<div onclick=\"document.querySelector('#traffit-an-list-xtxrxaxfxixtx2x0x1x6x').scrollIntoView({behavior:'smooth'});xxtraffixxlist.changePage({{page}})\" class='{{class}}'>{{page}}</div>";
  var paginationInteriorSeparator = "<div class='xxxseparatorxxxtraffit'>...</div>";

  String.prototype.template = function (data) {
    var i;
    var that = this.toString();
    for (i in data) {
      var regExp = new RegExp('{{' + i + '}}', 'g');
      that = that.replace(regExp, data[i] || '');
    }

    var regExpClear = /{{(.+?(?=})}})/gi;
    that = that.replace(regExpClear, '');

    return that;
  };

  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
  };

  var formatDate = function (date) {
    date = new Date(parseInt(date + '000'));

    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    if (month < 10) {
      month = '0' + month.toString();
    }
    if (day < 10) {
      day = '0' + day.toString();
    }
    return '{{dd}}/{{mm}}/{{rrrr}}'.template({
      dd: day,
      mm: month,
      rrrr: year,
    });
  };

  var filtering = function (key, value, type) {
    if (!value || value === '') {
      delete request.obj[key];
    } else {
      type = type || 'like';

      if (type === 'like') {
        value = '%' + value + '%';
      }

      request.obj[key] = {
        field: key,
        values: value,
        comparision: type,
        type: type,
      };
    }
  };

  var sendRequestAnotherSite = function () {
    var filterObj = {};
    for (var i in request.obj) {
      if (!request.obj.hasOwnProperty(i)) continue;
      filterObj[i] = request.obj[i].values.replace(/^%/, '').replace(/%$/, '');
    }
    if (request.query) {
      filterObj.query = request.query;
    }
  };

  var sendFiltersRequest = function () {
    var req = {
      limit: 100, // PUBLIC API
      offset: 0,
    };

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function (e) {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        if (!e.target.response) {
          return;
        }

        try {
          handleFiltersResponse(e.target.response);
        } catch (e) {
          console.error(e);
        }
      }
    };

    const fetchUrl = new URL(traffitSite + 'public/an/list/');
    fetchUrl.search = new URLSearchParams(transformBody(req));

    xhttp.open('GET', fetchUrl.href, true);
    xhttp.send();
  };

  var handleFiltersResponse = function (response) {
    const TRAFFIT_DATA = JSON.parse(response);

    const jobCategoryIds = new Set();
    const TRAFFIT_JOB_CATEGORY = TRAFFIT_DATA.items
      .filter((item) => {
        const jobCategoryId = item['_job_category'];
        return !jobCategoryIds.has(jobCategoryId) && jobCategoryIds.add(jobCategoryId);
      })
      .map((item) => ({
        label: item['_job_category.translate'],
        value: item['_job_category'],
      }));

    const locations = new Set();
    TRAFFIT_DATA.items.forEach((item) => {
      const [country, city] = item['_custom_location.translate'].split(', ');
      locations.add(country);
    });
    const TRAFFIT_JOB_LOCATION = [...locations];

    // TRAFFIT_DATA.items
    //   .filter((item) => item.geolocation)
    //   .map((item) => {
    //     return { job_location: JSON.parse(item.geolocation) };
    //   })
    //   .forEach((item) => {
    //     const key1 = TRAFFIT_JOB_LOCATION[item.job_location.country];
    //     const key2 =
    //       TRAFFIT_JOB_LOCATION[`${item.job_location.country}, ${item.job_location.locality}`];

    //     if (!key1) {
    //       TRAFFIT_JOB_LOCATION[item.job_location.country] = item.job_location.country;
    //     }

    //     if (!key2) {
    //       TRAFFIT_JOB_LOCATION[`${item.job_location.country}, ${item.job_location.locality}`] =
    //         item.job_location.locality;
    //     }
    //   });

    const CUSTOM_DATA = {
      TRAFFIT_DATA,
      TRAFFIT_JOB_LOCATION,
      TRAFFIT_JOB_CATEGORY,
    };

    const geoField = document.querySelector('select[name="geolocation"]');
    const jobCategoryField = document.querySelector('select[name="job-category"]');

    for (let key in TRAFFIT_JOB_LOCATION) {
      geoField.add(new Option(TRAFFIT_JOB_LOCATION[key], TRAFFIT_JOB_LOCATION[key]));
    }

    TRAFFIT_JOB_CATEGORY.forEach(({ label, value }) => {
      jobCategoryField.add(new Option(label, value));
    });
  };

  sendFiltersRequest();

  var sendRequest = function (limit) {
    loader.style.display = 'block';

    var req = {
      limit: limit ?? request.limit,
      offset: request.offset,
    };

    if (request.filter.length) {
      req.filter = {
        fields: request.filter,
      };
    }

    if (request.query) {
      req.filter = req.filter || {};
      req.filter.query = request.query;
    }

    var isAwarded = '';
    if (isAwarded === '1') {
      req.awarded = 1;
    }
    if (isAwarded === '0') {
      req.awarded = 0;
    }

    var languageString = '' || '';
    if (languageString !== '') {
      req.language = languageString;
    }

    if (scriptType === 'filters') {
      sendRequestAnotherSite();
      return;
    }

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function (e) {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        if (!e.target.response) {
          return;
        }

        try {
          xxtraffixxlist.callback(JSON.parse(e.target.response));
        } catch (e) {
          console.error(e);
        }
      }
    };

    const fetchUrl = new URL(traffitSite + 'public/an/list/');
    fetchUrl.search = new URLSearchParams(transformBody(req));

    xhttp.open('GET', fetchUrl.href, true);
    xhttp.send();
  };

  var paginationStandard = function (pages) {
    for (var i = 1; i <= pages; i++) {
      var cls = i === request.page ? 'xxxactivexxxtraffit' : '';
      var pageData = {
        page: i,
        class: cls,
      };
      xxtraffitxxAppend(paginationDiv, paginationInterior.template(pageData));
    }
  };

  var generatePagination = function (fr, to) {
    for (var i = fr; i <= to; i++) {
      var cls = i === request.page ? 'xxxactivexxxtraffit' : '';
      var pageData = {
        page: i,
        class: cls,
      };
      xxtraffitxxAppend(paginationDiv, paginationInterior.template(pageData));
    }
  };

  var paginationLeft = function (pages) {
    generatePagination(1, 7);
    xxtraffitxxAppend(paginationDiv, paginationInteriorSeparator);
    generatePagination(pages - 2, pages);
  };

  var paginationRight = function (pages) {
    generatePagination(1, 3);
    xxtraffitxxAppend(paginationDiv, paginationInteriorSeparator);
    generatePagination(pages - 6, pages);
  };

  var paginationCenter = function (pages) {
    generatePagination(1, 2);
    xxtraffitxxAppend(paginationDiv, paginationInteriorSeparator);
    generatePagination(request.page - 2, request.page + 2);
    xxtraffitxxAppend(paginationDiv, paginationInteriorSeparator);
    generatePagination(pages - 1, pages);
  };

  var createPagination = function (num) {
    var pages = Math.ceil(num / request.limit);
    while (paginationDiv.firstChild) paginationDiv.removeChild(paginationDiv.firstChild);

    if (pages <= 1) return;
    if (pages <= 11) {
      paginationStandard(pages);
    } else if (request.page < 7) {
      paginationLeft(pages);
    } else if (pages - request.page <= 5) {
      paginationRight(pages);
    } else {
      paginationCenter(pages);
    }
  };

  var isJSONString = function (string) {
    try {
      JSON.parse(string);
    } catch (e) {
      return false;
    }
    return true;
  };

  var getInputs = function () {
    var inputs = Array.prototype.slice.call(filtersDiv.getElementsByTagName('input'));
    var selects = Array.prototype.slice.call(filtersDiv.getElementsByTagName('select'));
    var elements = [];

    if (inputs && inputs.length) {
      elements = elements.concat(inputs);
    }

    if (selects && selects.length) {
      elements = elements.concat(selects);
    }

    return elements;
  };

  window.xxtraffixxlist = {
    callback: function (data) {
      while (listDiv.firstChild) listDiv.removeChild(listDiv.firstChild);
      infoDiv.innerText = '';

      var items = data.items;
      if (selectedJobCategory) {
        items = items.filter((item) => item._job_category === selectedJobCategory);
      }
      if (selectedLocation) {
        items = items.filter((item) =>
          item['_custom_location.translate'].includes(selectedLocation),
        );
      }

      if (!items.length) {
        infoDiv.innerText = t('advertsNotFound');
      }

      for (var i = 0; i < items.length; i++) {
        items[i].name = escapeHtml(items[i].name);
        var fillData = {
          name: items[i].name,
          nrRef: items[i].nrRef,
          date: formatDate(items[i].validStart),
          url: items[i].url,
          location: items[i].location,
          awarded: items[i].awarded ? 'traffit-an-list-xtxrxaxfxixtx2x0x1x6x-awarded' : '',
        };
        Object.assign(fillData, items[i]);
        fillData.date = formatDate(items[i].validStart);
        fillData.awarded = items[i].awarded ? 'traffit-an-list-xtxrxaxfxixtx2x0x1x6x-awarded' : '';
        var geo =
          items[i].geolocation && isJSONString(items[i].geolocation)
            ? JSON.parse(items[i].geolocation)
            : {};
        fillData.geolocation = geo.hasOwnProperty('locality')
          ? `${geo.country}, ${geo.locality}`
          : '';

        const isRemote = items[i] && items[i].remote === '1';

        const positionType = fillData['_position_type.translate'];
        const positionTypeToIconMap = {
          Remote: 'my_location',
          'On Site': 'push_pin',
          Hybrid: 'home_work',
        };
        const positionTypeIcon = positionTypeToIconMap[positionType] ?? '';

        const location = fillData.geolocation || fillData['_custom_location.translate'] || '';
        const geoLocation = isRemote ? location.split(', ')[0] : location;

        fillData.geolocationHTML = geoLocation
          ? `
              <div>
                  <i class='material-icons'>room</i>
                  <span>
                      ${geoLocation}
                  </span>
              </div>
              `
          : '';

        fillData.remoteHTML = `
          <div>
              <i class='material-icons'>${positionTypeIcon}
              </i>
              <span>
              ${positionType}
              </span>
          </div>
          `;

        fillData.readMore = t('readMore');

        xxtraffitxxAppend(listDiv, htmlDiv.template(fillData));
      }

      if (data.count === 0) {
        if (counterSpan) {
          counterSpan.innerText = '';
        }

        infoDiv.innerText = t('advertsNotFound');
      } else if (data.count > 0 && counterSpan) {
        counterSpan.innerText = `${t('advertsFound')}: ${data.count}`;
      }

      const count = !selectedJobCategory && !selectedLocation ? data.count : 0;
      createPagination(count);

      loader.style.display = 'none';
      changeButtonsColor();
    },
    search: function () {
      var elements = getInputs();
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var name = element.getAttribute('name');
        var value = element.value;
        var type = element.getAttribute('data-search');

        switch (name) {
          case 'job-category':
            selectedJobCategory = value;
            break;
          case 'geolocation':
            selectedLocation = value;
            break;
          default:
            filtering(name, value, type);
        }
      }

      request.filter.length = 0;
      for (var i in request.obj) {
        if (!request.obj.hasOwnProperty(i)) continue;
        request.filter.push(request.obj[i]);
      }

      request.offset = 0;
      request.page = 1;
      sendRequest(100);
    },
    changePage: function (page) {
      request.offset = (page - 1) * request.limit;
      request.page = page;
      sendRequest();
    },
    clear: function () {
      request.offset = 0;
      request.page = 1;
      request.filter.length = 0;
      delete request.query;

      selectedJobCategory = null;
      selectedLocation = null;

      var elements = getInputs();

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var name = element.getAttribute('name');

        filtering(name);
        element.value = '';
      }

      sendRequest();
    },
  };

  var coreFunc = function () {
    coreDiv = document.getElementById(divId);
    filtersDiv = document.getElementById(filterId);
    var regExp = /(traffit\.com\/.*career.*)|(traffit\.local:1025\/.*career.*)/;
    var head = document.getElementsByTagName('head')[0];

    if (!regExp.test(window.location.href)) {
      xxtraffitxxAppend(head, fontUrl);
      xxtraffitxxAppend(head, iconsFont);
      xxtraffitxxAppend(head, outsideStyles);
    }

    var isWithinAts = !!document.querySelector('script[data-name="traffit"]');

    if (!isWithinAts && scriptConfig.additionalStyles) {
      xxtraffitxxAppend(head, '<style>' + scriptConfig.additionalStyles + '</style>');
    }

    paginationDiv = document.createElement('div');
    paginationDiv.setAttribute('id', paginationId);

    listDiv = document.createElement('div');
    listDiv.setAttribute('id', listId);

    loader = document.createElement('div');
    loader.classList.add('traffit-xx-loader');
    xxtraffitxxAppend(
      loader,
      '<div><img src="https\u003A//cdn3.traffit.com/24S43092/bundles/traffitfrontend/images/ajax\u002Dloader.gif" alt/></div>'.template(
        {
          site: traffitSite.replace('app_dev.php/', ''),
        },
      ),
    );

    infoDiv = document.createElement('div');
    infoDiv.classList.add('traffit-xx-info-box');

    coreDiv.appendChild(loader);
    coreDiv.appendChild(infoDiv);

    if (filtersDiv) {
      xxtraffitxxAppend(filtersDiv, filtersInterior);

      var inputs = filtersDiv.getElementsByTagName('input');

      if (inputs && inputs.length) {
        for (var i = 0; i < inputs.length; i++) {
          inputs[i].addEventListener('keydown', function (e) {
            if (e.keyCode === 13) {
              window.xxtraffixxlist.search();
            }
          });
        }
      }

      counterSpan = filtersDiv.querySelector('#traffit-pagin-xxx-counter');
    }

    if (coreDiv) {
      coreDiv.appendChild(listDiv);
      coreDiv.appendChild(paginationDiv);
      scriptType = 'all';

      //   $('select[name="geolocation"]').select2({
      //     placeholder: "Select location",
      //     minimumResultsForSearch: -1,
      //     allowClear: true,
      //   });

      //   $('select[name="query"]').select2({
      //     placeholder: "Select job category",
      //     minimumResultsForSearch: -1,
      //     allowClear: true,
      //   });

      sendRequest();
    }
  };

  function changeButtonsColor() {
    var searchButton = document.querySelector('#traff-xx-search-button');

    if (!searchButton) {
      return;
    }

    var backgroundColor = searchButton.style.backgroundColor;
    var rgbColor = backgroundColor,
      rgbSeparate = rgbColor
        .substring(rgbColor.indexOf('(') + 1, rgbColor.lastIndexOf(')'))
        .split(/,\s*/),
      rgbRed = rgbSeparate[0],
      rgbGreen = rgbSeparate[1],
      rgbBlue = rgbSeparate[2],
      yiq = (rgbRed * 299 + rgbGreen * 587 + rgbBlue * 114) / 1000;

    searchButton.style.color = yiq >= 128 ? '#000000' : '#ffffff';
  }

  try {
    coreFunc();
  } catch (e) {
    console.error(e);
  }
}

init();
