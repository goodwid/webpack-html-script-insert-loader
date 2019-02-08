const mocha = require('mocha');
const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const { assert } = chai;

const plugin = require('../lib/plugin');
chai.spy.on(plugin, 'async', function() {
  return (err, result) => {
    assert.isNull(err);
    assert.isString(result);
  };
});

const fs = require('fs');
const testHtml = fs.readFileSync('./test/test.html', { encoding: 'utf-8'});
const results = insertTag(testHtml);

describe.skip('does the thing', () => {
  it('and works', () => {


  })
});
