//debug 模式
var casper = require('casper').create({
  verbose: true, // 实时输出
  logLevel: 'debug'
});

casper.start('http://qq.com/',function () {

	var html = this.evaluate(function (data) {
		console.log(data.text)


    },{data:{text:'script text form casperjs...'}});
});

casper.on('remote.message', function(msg) {//接收沙箱的console
	console.log('msg:'+msg)
});

casper.run(function () {
	console.log('---done---')
	this.exit(0)
});