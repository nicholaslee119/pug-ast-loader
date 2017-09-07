const path = require('path');
const pugASTLoader = require('../index');
const fs = require('fs');

describe('pug-ast-loader', function(){
  it ('parse', function(){
    var str = fs.readFileSync(path.join(__dirname, './comp.pug'), 'utf8');
    var ast = pugASTLoader(str);
    console.log(ast);
  });
});