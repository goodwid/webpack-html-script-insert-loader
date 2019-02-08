const mocha = require('mocha');
const chai = require('chai');
const { assert } = chai;

const createTag = require('../lib/createTag');

describe('Create tag', () => {
  it('takes parameters and returns valid source HTML tag', () => {
    const src = 'text.js';
    const attribs = 'async';
    const expected = `<script type="text/javascript" ${attribs} src="${src}"></script>`;
    const result = createTag(src, attribs);
    assert.equal(result, expected);
  });
});