//evaluate 
var casper = require('casper').create();
casper.start('http://qq.com/',function () {
	var html = this.evaluate(function (data) {
		console.log(data.text)
    },{text:'script text'});
});

casper.run(function () {
	console.log('---done---')
	this.exit(0)
});