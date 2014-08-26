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
            var mailOptions = {
                from: mailHelper.from.join(' '),
                to: mailHelper.to.join(','),
                subject: logItem.content.message,
                html: 'test'
            };
            mailHelper.transporter.sendMail(mailOptions, function(error, response){
                if(error){
                    console.log(error);
                }else{
                    console.log('Message sent: ' + response.message);
                }
            });

            LogModel.add(logItem);
        }
    };

module.exports = log;
