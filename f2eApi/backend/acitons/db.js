var config = require('../config'),
    mongoose = require("mongoose");

console.log(config)
mongoose.connect(config.db.ADDRESS);

exports.mongoose=mongoose;
