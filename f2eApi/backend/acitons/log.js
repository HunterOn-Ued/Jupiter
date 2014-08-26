var db = require('./db'),
    mongoose = db.mongoose,
    Schema = db.mongoose.Schema,
    ObjectId = Schema.ObjectId,

    nodemailer = require('nodemailer'),
    mailHelper = require('../config/mail'),

    logSchema = new Schema({
        type: String,
        product: String,
        time: {type:Date, default:Date.now},
        content: Object,
        uid:Number
    });

logSchema.statics.add = function(logItem){
    var logModel = new LogModel(logItem);
    logModel.save(function(err){
        if(err){
            console.log(err);
        }else{
            console.log('saved log:'+ logItem);
        }
    });
};

var LogModel = mongoose.model("log", logSchema),

    log= {
        add: function(logItem){
	var strHtml = '<h1>前端错误监控系统捕获了一个系统错误，请及时排查处理并联系用户</h1>' +
		'<hr/>' + 
		'<b>    所在产品</b>:' + logItem.product  + '<br/>' +
		'<b>错误发生页面</b>:' + logItem.content.url + '<br/>' +
		'<b>    所在脚本</b>:' + logItem.content.script + '<br/>' +
		'<b>    所在位置</b>:' + logItem.content.position + '<br/>' +
		'<b>    报错消息</b>:<span style="color:red;">' + logItem.content.message + '</span><br/>' +
		'<b>        用户</b>:#' + logItem.uid + '<br/>' +
		'<b>  用户浏览器</b>:' + logItem.content.ua + '<br/>';

            var mailOptions = {
                from: mailHelper.from.join(' '),
                to: mailHelper.to.join(','),
                subject: '[' + logItem.product + ']错误报警',
                html: strHtml
            };
            mailHelper.transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    console.log(error);
                }else{
                    console.log('Message sent: ' + info.response);
                }
            });

            LogModel.add(logItem);
        }
    };

module.exports = log;
