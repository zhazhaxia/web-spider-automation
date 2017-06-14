//截图 可以设置尺寸
var casper = require('casper').create();
casper.start('http://qq.com/',function () {
	this.capture('qq.png');  
});


casper.run(function () {
	console.log('---done---')
	this.exit(0)
});