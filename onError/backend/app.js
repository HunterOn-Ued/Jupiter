var express = require("express"),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler'),
    logger = require('morgan'),
    multer = require('multer'),
    favicon = require('serve-favicon'),
    routes = require('./routes'),
    app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cookieParser('pE4qZlZORH'));
app.use(session({ resave: true, saveUninitialized: true, secret: 'hwOGHS1SGH' }));
app.use(multer());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

app.get('/log/:domain/:type', routes.log);

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
