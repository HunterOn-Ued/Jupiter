var actions = require('../acitons/log'),
    routes = function(req, res){
        var logItem = {
            type: req.params.type,
            product: req.query.product,
            uid: req.query.uid,
            content: {
                domain: req.params.domain,
                ua: req.get('User-Agent'),
                url: req.get('Referer'),
                script: req.query.script,
                message: req.query.message,
                position: req.query.position
            }
        };
        actions.add(logItem);
        res.send({'success': true});
    };

module.exports = routes;
