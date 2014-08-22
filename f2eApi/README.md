#f2eApi

##错误收集
###如何开始
```html
<!--引入文件-->
<script src="http://f2eapi.hunteron.com/src/script/logError.js" type="text/javascript"></script>
<!--初始化-->
<script type="text/javascript" charset="utf-8">
logConfig({
    //用户id
    uid: 332,
    //产品名称
    product: 'errorTest'
});
</script>
```
###注意事项
```javacript
//当后端返回错误或需要主动记录错误日志的时候请手动抛出异常
throw('错误描述');
```
