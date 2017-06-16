var exec = require('child_process').exec

exec('chrome --headless --disable-gpu --dump-dom http://kg.qq.com',function (cb,error) {
	console.log(cb,error)
})