const { getOptions } = require('loader-utils');
const insertTag = require('./insertTag');

module.exports = function(content) {
  const callback = this.async();
  // const options = getOptions(this);
  const options = { src: 'foo', location: 'head'};

  insertTag(content, options, (err, result, maps, meta) => {
    if(err) return callback(err);
    callback(null, result, maps, meta);
  });
};
