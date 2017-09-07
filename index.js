const load = require('pug-load');
const lex = require('pug-lexer');
const parse = require('pug-parser');
const path = require('path');

module.exports = function (source) {
  var ast = load.string(source, {
    filename: '',
    lex: lex,
    parse: parse,
    resolve: function(filename, source, option) {
      console.log(`fileanme is ${filename}, source is ${source}`);
    },
  })
  return ast;
}