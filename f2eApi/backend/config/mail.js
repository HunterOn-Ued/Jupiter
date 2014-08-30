var nodemailer = require('nodemailer'),
    smtpTransport = require('nodemailer-smtp-transport'),
    transporter = nodemailer.createTransport(smtpTransport({
        host: 'smtp.exmail.qq.com',
        secure: true,
        port: 465,
        auth: {
            user: 'f2eapi@hunteron.com',
            pass: 'f2e@2014'
        }
    })),
    config = {
        transporter: transporter,
        from: [
            'f2eapi <f2eapi@hunteron.com>'
        ],
        to: [
            'dev <dev@hunteron.com>',
	    '大兵 <ryan.shi@hunteron.com>'
        ]
    };

module.exports = config;
