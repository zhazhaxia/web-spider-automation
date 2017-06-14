//message.on* 事件
var casper = require('casper').create();
casper.start('http://qq.com/',function () {
	var html = this.evaluate(function (data) {
		console.log(data.text)
		// console.log(a.b)//错误可以捕获
    },{data:{text:'script text form casperjs...'}});
});

casper.on('remote.message', function(msg) {//接收沙箱的console
	console.log('msg:'+msg)
});
casper.on('resource.requested', function(requestData, resource) {//监听页面的请求
	if (requestData.url.indexOf("qq.com/www") >= 0) this.echo(decodeURI(requestData.url));
});
casper.on("page.error",function (err) {//如果沙箱注入的js脚本报错了会在这边捕获
	console.log("err:"+err)
})
casper.run(function () {
	console.log('---done---')
	this.exit(0)
});