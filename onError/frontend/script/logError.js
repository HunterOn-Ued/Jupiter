(function(undefined){
    var uid = 0,
        product = 'notSet'
        logSender = new Image();

    window.onerror = function(errorMessage, scriptURI, lineNumber,columnNumber,errorObj) {
        var msg = {},
            params = [];

        msg.ua = window.navigator.userAgent;
        msg.message = errorMessage;
        msg.script = scriptURI;
        msg.postion = 'L:' + lineNumber + ',C:' + (columnNumber || '-');
        msg.page = window.location.href;
        msg.uid = uid;
        msg.product = product;

        for(var key in msg){
            params.push(key = encodeURI(msg[key]));
        }
        params = params.join('&');
        logSender.src = 'http://f2eapi.hunteron.com/log/browser/error?' + params;

        //TODO remove later
        console.log(msg)
    }

    window.logConfig = function(config){
        uid = config.uid;
        product = product === "notSet" ? config.product : product;
    };
})();
