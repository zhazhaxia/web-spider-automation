//capture
var page = require('webpage').create();
page.open('http://baidu.com', function () {
    page.render('baidu.png');
    phantom.exit();
});