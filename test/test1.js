phantom.outputEncoding = 'gbk'
var casper = require('casper').create();
casper.start('http://qq.com/');

casper.then(function() {
    this.echo('First Page: ' + this.getTitle());
});

casper.thenOpen('http://baidu.com', function() {
    this.echo('Second Page: ' + this.getTitle());
});

casper.run();
