const mocha = require('mocha');
const chai = require('chai');
const { assert } = chai;

const insertTag = require('../lib/insertTag');

const testHtml = `<head>
</head>
<body>
</body>`;

describe('Insert tag', () => {
  it('adds a script tag to the body', () => {
    const options = { src: 'test.js' };
    const expected = `<head>
</head>
<body>
<script type="text/javascript"  src="test.js"></script>
</body>`;
    insertTag(testHtml, options, (err, data) => {
      assert.isNull(err);
      assert.equal(data, expected);
    });
    
  });

  it('adds a script tag to the head', () => {
    const options = { src: 'test.js', location: 'head' };
    const expected = `<head>
<script type="text/javascript"  src="test.js"></script>
</head>
<body>
</body>`;
    insertTag(testHtml, options, (err, data) => {
      assert.isNull(err);
      assert.equal(data, expected);
    });
  });

  it('Throws an error when no src is specified', () => {
    const options = {};

    insertTag(testHtml, options, (err, data) => {
      assert.equal(err, 'no source specified.');
      assert.isUndefined(data);
    });
  });

  it('Throws an error when no tag is found', () => {
    const testHtml = '<html></html>';
    const options = {src: 'test.js'};

    insertTag(testHtml, options, (err, data) => {
      assert.equal(err, 'Tag not found.');
      assert.isUndefined(data);
    });
  });
});

