# 脚手架
## 事前准备
```bash
npm install -g yo grunt-cli bower
npm install -g generator-angular
```
## 新建项目
```bash
yo angular
```
## 使用bower管理前端库依赖
```bash
#初始化`bower.json`
bower init

#安装库
bower install `pakageName` --save

#更新库
bower update
bower update `pakagename`

#删除库
bower uninstall 'pakagename' --save

#查看项目依赖库列表
bower list

#安装项目所有的依赖
bower install
```
