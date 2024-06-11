const trim = (str) => {
  // remove /n at the start and end of the string and trim spaces
  return (str || "").replace(/^\s+|\s+$/g, '');
};

const changeQuotes = (str) => {

  if(str instanceof Date ) {
    if(str.toString() === "Invalid Date") {
      return "";
    }

    return str.toISOString();
  } else if (typeof str === 'string') {
    return str.replace(/"/g, '""');
  }

  return str;

}

const getSlug = (string) => {
  return string.toLowerCase().replace(/ /g, '-').replace(/\//g, '-').replace(/\-\+\-/g, '-');
}

module.exports = {
  trim,
  changeQuotes,
  getSlug,
};
