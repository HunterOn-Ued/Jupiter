var actions = require('../acitons/log'),
    routes = function(req, res){
        var logItem = {
            type: req.params.type,
            product: req.query.product,
            uid: req.query.uid,
            content: {
                domain: req.params.domain,
                ua: req.get('User-Agent'),
                url: req.get('Referer') + req.query.locationHash,
                script: req.query.script,
                message: req.query.message,
                position: req.query.position
            }
        },

        subDomain = logItem.content.url.split('.')[0];
        if(subDomain.length < 11){
            actions.add(logItem);
        }
        res.send({'success': true});
    };

module.exports = routes;
