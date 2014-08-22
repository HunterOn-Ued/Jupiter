var db = require('./db'),
    mongoose = db.mongoose,
    Schema = db.mongoose.Schema,
    ObjectId = Schema.ObjectId,

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
            LogModel.add(logItem);
        }
    };

module.exports = log;
