const scriptTag = str => `<script src="${str}" type="text/javascript"></script>`;
const tag = { head: '</head>', body: '</body>' };

module.exports = function(content, maps, meta) {
  const callback = this.async();
  let data;
  
  if(Buffer.isBuffer(content)) data = content.toString().split('\n');
  else data = content.split('\n')
  
  let { location = 'head', name } = this.query;
  const index = data.findIndex(str => str.trim() === tag[location]);
  if(index === -1) callback('No tag found.');
  data.splice(index, 0, scriptTag(name));
  callback(null, data, maps, meta);
};
