# lazyColor

quickly color your background and text

# 使用

## 下载

1. 使用`npm install --save lazycolor`

2. 下载本仓库

## 安装

1. 直接在html中引入:
<link src="'/path/to/dist/lazyColor.min.css'">

2. webpack打包
```js
 import 'lazycolor/dist/lazyColor.min.css'
```

## 使用

直接在class中加入所需颜色的类名，并且颜色默认加入 !important进行覆盖。

默认命名： cor-red-1 cor-txt-red-1

此处应该有张图


## 开发

如果你想要生成自己的颜色表。

1. clone 本仓库
2. npm install
3. gulp dev

在less文件中，你可以自定义类名的命名，只配置生成所需的颜色。


## TODO

- add Sass
- add Stylus
- a detailed & cool document
