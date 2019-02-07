const InsertTag = require('../lib/insertTag');
const fs = require('fs');
const testHtml = fs.readFileSync('./test/test.html');
const mocha = require('mocha');
const chai = require('chai');
const { assert } = chai;
InsertTag.prototype.async = function() {
  return (err, result) => {
    assert.isNull(err);
    assert.isString(result);
  };
};
const insertTag = new InsertTag(testHtml);
const options = { name: 'test.js', location: 'body'};
InsertTag.prototype.query = options;

describe('does the thing', () => {
  it('and works', () => {

    insertTag();

  })
});
