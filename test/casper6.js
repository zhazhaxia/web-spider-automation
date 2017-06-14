//viewport窗口大小 userAgent
var casper = require('casper').create({
	// verbose: true,
	// logLevel: "info",
	viewportSize: {
        width: 1024,
        height: 768
    },
    pageSettings: {
    	userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11"
  	}
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