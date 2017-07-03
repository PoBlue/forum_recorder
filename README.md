# forum_recorder

因为在论坛上下载不了 csv ，无法方便地统计。

因此就做了这个项目，直接爬取论坛的数据变为 csv 方便统计

![preview_data](https://user-images.githubusercontent.com/9304701/27799025-3119c7a4-6046-11e7-9d22-43e71d08cf6d.png)

## 环境需求
- Python 3.0
- Chrome 浏览器
- rows，运行下面命令安装，或者[其它的方法](http://turicas.info/rows/installing.html "installing")
```
pip install rows
```

## 如何使用
1. 安装插件，参考这里，加载 路径 
2. 打开网页，读取一个月以上的数据，然后就按 start
3. Google 导入 csv ，进行复制粘贴等处理

## 设置
1. 打开文件
2. 只要包含字符串就能匹配，没有包含则过滤掉，譬如：6月，则 6月25日 的项就会匹配
3. 还有主题也是如 2 那样的原理，因为 FEND 是提问，精品，还有 FEND 。所以就写成下面的样子，进行过滤