# webpack-html-script-insert-loader

This is a loader for Webpack.  It adds a script to the specified html file, either in the `<head>` or `<body>` elements, and with an option to add attributes as well.

Usage: add to the module.rules array in `webpack.config.js` file.

Required options:

`src`:  The full path of the script.  

Optional options:

`location`: A string, one of either `head` or `body`.  Defaults to 'body'.  Script tag will be added immediately before the closing tag of the specified block.
  `attribs`: A string, to be added to the `<script>` tag.

``` javascript
   module: {
      rules: [
        {
          test: /index.html/,
          use: [
            {
              loader: 'html-loader'
            },
            {
              loader: 'webpack-html-script-insert-loader',
              options: {
                src: 'https://.../script.js',
                location: 'head',
                attribs: 'async'
              }
            },
          ]
        },
    ...
```
