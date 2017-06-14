//__util__
var casper = require('casper').create();
casper.start('http://qq.com/',function () {
	var html = this.evaluate(function (data) {
		__utils__.echo(data.text)
		console.log(__utils__.exists('body');)
		//http://docs.casperjs.org/en/latest/modules/clientutils.html
		//getBase64
		//findOne
		//findAll
		//sendAjax
    },{data:{text:'script text form casperjs...'}});
});

casper.on('remote.message', function(msg) {//接收沙箱的console
	console.log('msg:'+msg)
});
casper.run(function () {
	console.log('---done---')
	this.exit(0)
});