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
            'xuanfei <xuanfei.liu@hunteron.com>',
            'andy <andy.song@hunteron.com>',
            'TODO <todo.zhao@hunteron.com>',
            'jeff <jeff.liu@hunteron.com>',
            'colin <colin.li@hunteron.com>',
            'jason <jason.wu@hunteron.com>',
            'mizi <mizi.lin@hunteron.com>',
            'clish <clish.wang@hunteron.com>',
            'dolf <dolf.zhang@hunteron.com>',
            'rocca <rocca.peng@hunteron.com>',
            '玛丽 <mark.li@hunteron.com>',
	        '大兵 <ryan.shi@hunteron.com>'
        ]
    };

module.exports = config;
