const createTag = require('./createTag');
const tag = { head: '</head>', body: '</body>' };

module.exports = function (content, options = {}, callback) {
  const { src, location = 'body', attribs = '' } = options;
  if(!src) callback('no source specificed.');
  const scriptTag = createTag(src, attribs);
  const data = content.split('\n');
  const index = data.findIndex(str => str.trim() === tag[location]);
  if(index === -1) callback('Tag not found.');
  data.splice(index, 0, scriptTag);
  callback(null, data.join('\n'));
}