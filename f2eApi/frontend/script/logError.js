(function(undefined){
    var uid = 0,
        product = 'notSet'
        logSender = new Image(),
        sendError = function(msg){
            var params = [];

            msg.uid = uid;
            msg.product = product;

            for(var key in msg){
                params.push(key + '=' + encodeURIComponent(msg[key]));
            }
            params = params.join('&');
            logSender.src = 'http://f2eapi.hunteron.com/log/browser/error?' + params;

            //TODO remove later
            console.log(msg)
        };

    try{
        (function(){
            var useCustomEvent = false;
            try{
                var e = new CustomEvent('test');
                useCustomEvent = true;
            }catch(err){}

            var handler = function(error){
                var errorEvent = null;
                if(useCustomEvent){
                    //DOM4
                    errorEvent = new CustomEvent("logError", {detail: error});
                }else{
                    //DOM4
                    errorEvent = document.createEvent("Event");
                    /*
                     * @par1 eventType
                     * @par2 canBubble
                     * @par3 cancelable
                     */
                    errorEvent.initEvent("logError", false, false);
                    errorEvent.detail = error;
                }
                window.dispatchEvent(errorEvent);
            }

            if (window.addEventListener){
                window.addEventListener("error", handler, false);
            }else if(window.attachEvent){
                window.attachEvent("error", handler);
            }
        })();
    }catch(err){}
    window.addEventListener('logError', function(e) {
        var msg = {};

        msg.message = e.detail.message;
        msg.script = e.detail.filename.split('/').pop();
        msg.position = 'L:' + e.detail.lineno + ',C:' + (e.detail.colno || '-');

        sendError(msg);
    }, false);

    window.logConfig = function(config){
        uid = config.uid;
        product = product === "notSet" ? config.product : product;
    };
})();
