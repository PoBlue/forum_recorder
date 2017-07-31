# Forum Data to csv

因为在论坛上下载不了 csv ，无法方便地统计。

因此就做了这个项目，直接将论坛的数据变为 csv （如下）
![图](https://user-images.githubusercontent.com/9304701/27799025-3119c7a4-6046-11e7-9d22-43e71d08cf6d.png)

## 环境需求
- Python 3.0
- Chrome 浏览器
- rows，运行下面命令安装，或者[其它的方法](http://turicas.info/rows/installing.html "installing")
```
pip install rows
```

## 如何使用
1. 打开 Chrome 安装插件，参考[这里](http://open.chrome.360.cn/extension_dev/getstarted.html)，加载路径 `chrome_extension`
```
	加载应用（扩展）
	a)点击图标，在菜单中选择工具〉扩展程序，这会打开扩展管理的页面
	b)如果“开发人员模式”旁边有个“+”号，点击这个“+”号进入开发人员模式。“+”号会变成“-”号，同时会显示更多的按钮和信息
	c)点击“载入正在开发的扩展程序…”按钮，会出现一个文件选择对话框
	d)在对话框中，找到扩展目录并点击“确定”
```

2. 打开个人的页面，转到活动(如下)，读取一个月以上的数据，然后按插件的 start

![读取](https://user-images.githubusercontent.com/9304701/27848146-8b69d00c-6175-11e7-8771-29814d9cbaab.png)

3. 下载数据，放进文件夹 `input_json`
ps: 在新标签出现闪退情况时，可直接看看 Chrome 的开发者工具里面的 Log，有文件的 url 可以直接下载

4. 在 `Froum_to_csv` 目录下，运行下面的命令，完成导出
```
	python json_to_csv.py 
```

5. 然后在 `output_csv` 文件夹就能看到生成的文件了。用 Google 表格导入 csv 即可

## 设置
1. 打开文件 `chrome_extension/page_handler.js`,会看到开头有下面三行代码。
```
	var DATE = ['6月', '天'];
	var FENDCATE = ['提问', 'FEND', '精品'];
	var ANDCATE = ['ABND', 'AND', 'Android', '纳米新生'];
```

匹配：

2. 只要包含数组里面的字符串就能匹配，没有包含则过滤掉，譬如：6月，则 6月25日 的项就会匹配

3. 还有主题也是如 2 那样的原理，因为 FEND 是提问，精品，还有 FEND 。所以就如上进行过滤

- DATE 是匹配日期的
- FENDCATE 是匹配主题的，里面写有关 FEND 的关键词
- ANDCATE 这个是我 Android 这边统计用到的，可以忽略


![示意图](https://user-images.githubusercontent.com/9304701/27848187-d9ddf7ae-6175-11e7-92b3-4fd77ea4965f.png)


