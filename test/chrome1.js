var exec = require('child_process').exec

exec('chrome --headless http://qq.com',function (cb,error) {
	console.log(cb,error)
})