# phantomjs

- phantomjs 基本语法入门 http://phantomjs.org/quick-start.html

- 截图 this.render()

- 网络调试 https://github.com/jamesgpearce/confess 类似chrome的network

- 执行js evaluate() 

- 监听js 的console回调 

- 监听 网络请求 request 、response

----------------

# casperjs

- http://docs.casperjs.org/en/latest/index.html

- 安装phantomjs 安装python2.7

- 设置环境变量

- 设置编码 phantom.outputEncoding = 'utf-8'

- 内置module



# 单元测试

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

- node模式，在node下结合child_process模块，模拟命令行进行自动化操作 >_ require("child_process").exec('chrom ...',callback)


#PPT web自动化工具介绍-phantomjs、casperjs、headless chrome

## phantomjs

作者Ariya Hidayat

- PhantomJS是一个基于webkit的JavaScript API。它使用WebKit作为它核心浏览器的功能，使用webkit来编译解释执行JavaScript代码。任何你可以在基于webkit浏览器做的事情，它都能做到。它不仅是个隐形的浏览器，提供了诸如CSS选择器、支持Web标准、DOM操作、JSON、HTML5、Canvas、SVG等，同时也提供了处理文件I/O的操作，从而使你可以向操作系统读写文件等。PhantomJS的用处可谓非常广泛，诸如前端无界面自动化测试、网络监测、网页截屏等。
	

- python selenium，slimerjs 基于gecko，phantom基于webkit

- 进行网络请求，linux下的网络工具curl、wget，网络测试，下载。node 下一些http模块、nodegrass模块也可以请求网络，做一些爬虫工具。
	不过对一些需要ajax动态加载的页面就无法爬取。

- phantom可以在界面浏览器下运行，通过js来模拟网页的执行

开始

- 安装 win 、linux

- 设置代理 source .~/.bash_profile

- webpage对象 、render截图、evaluate注入js、监听console、request

## casperjs

作者Nicolas Perriault 

- 是phantomjs的扩充，新增了很多api，优化了phantomjs的语法编写方式

- 语法编写区别 。。。

- casper模块、capture截图、getTitle()或者页面信息、evaluate脚本注入、监听console、request
	参数设置pageSettings、viewportSize、userAgent、debug、提供了写脚本工具__utils__、内置模块util
	编写自己的模块patchRequire

## 爬取新浪微博搜索信息

- 分析，动态页面、采用casperjs，脚本模拟操作，获取信息。
	1 获取搜索结果：搜索页，直接搜索，获取微博条目，uid等信息
	2 获取粉丝数目：微博开放平台申请为开发者，模拟登录授权，获取accesstoken，批量获取粉丝数、微博数、转发数
	3 定时爬取：node-schedule模块写crontab
	4 发邮件


## headless chrome

- chrome 59开始支持，windows要chrome60才支持，下载chrome canary金丝雀版本体验

- 设置chrome环境变量

- 命令行开打页面 >_ chrome www.qq.com

- 开启headless模式 >_ chrome --headless 

- 截图、保存为pdf、repl模式（主要）、远程模式（结合dev-tools）、利用node编写自动化脚本
