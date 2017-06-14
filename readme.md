# phantomjs
- phantomjs 基本语法入门 http://phantomjs.org/quick-start.html

- 截图 this.render()

- 网络调试 https://github.com/jamesgpearce/confess 类似chrome的network

- 执行js evaluate() 

- 监听js 的console回调 

- 监听 网络请求 request 、response

----------------

#casperjs

- http://docs.casperjs.org/en/latest/index.html

- 安装phantomjs 安装python2.7

- 设置环境变量

- 设置编码 phantom.outputEncoding = 'utf-8'

- 内置module



#单元测试

- 有些页面（比如填写表单）做安全测试的时候每次都人工测会比较麻烦，而且是重复的操作，此时就可以借助casperjs来辅助操作，监控页面行为，异常告警，作为人工测试的辅助工具

# 对比
-phantomjs嵌套写起来比较繁琐难懂，不好维护

		var page = require('webpage').create()             //新建一个页面
		page.open(url1, function(status) {                  //导航到第一个URL
		    if (status == "fail") phantom.exit()           //如果发生错误,退出程序
		    page.open(url2, function(status) {              //否则在页面加载完成的回调函数中继续导航到第二个URL,依次类推
		        if (status == "fail") phantom.exit()
		        page.open(url3, function(status) {
		            if (status == "fail") phantom.exit()
		            page.open(url4, function(status) {
		                if (status == "fail") phantom.exit()
		                // 我可以停下来了吗?
		            })
		        })
		    })
		})

- casperjs解决异步错编写格式错乱问题，增加可读性

		var casper = require('casper').create();           //新建一个页面

		casper.start(url1);                                //添加第一个URL
		casper.thenOpen(url2);                             //添加第二个URL,依次类推
		casper.thenOpen(url3);
		casper.thenOpen(url4);

		casper.run();                                      //开始导航

# chrome 59 headless mode 

- chrome59开始支持headless模式

- 在windows下设置chrome环境变量 

- 打开网页 >_ chrome http://qq.com

- 开启headless模式 >_ chrome --headless --disable-gpu http://www.qq.com

- 输出当前页面的dom >_ chrome --headless --disable-gpu --dump-dom http://www.qq.com

- 页面截屏 >_ chrome --headless --disable-gpu --window-size=1280,1696 --screenshot https://www.qq.com

- 下载页面为PDF >_ chrome --headless --disable-gpu --print-to-pdf https://www.qq.com

- 命令行交互模式 >_ chrome --headless --disable-gpu --repl https://www.qq.com

- 远程模式 ，结合chrome dev-tools >_ chrome --headless --disable-gpu --remote-debugging-port=9222 https://www.qq.com
	打开del tools进行调试
