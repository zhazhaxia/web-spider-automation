//write module编写自己的casperjs模块
// my module, stored in universe.js
// patching phantomjs' require()

var require = patchRequire(require);//编写自己的模块，必须加上这么一句

var utils = require('utils');
var magic = Date();
exports.today = function() {
    return utils.format("今天日期是：--- %s ---", magic);
};

/*
使用,假设当前模块名叫myModule

var myModule = require('./myModule')
console.log(myModule.today()) 
*/