var nodemailer = require('nodemailer'),
    transporter = nodemailer.createTransport("SMTP",
        host: 'mtp.exmail.qq.com',
        secureConnection: true,
        port: 465,
        auth: {
            user: 'colin.li@hunteron.com',
            pass: 'thisislaobai'
        }
    ),
    config = {
        transporter: transporter,
        from: [
            'f2eapi <colin.li@hunteron.com>'
        ],
        sendTo: [
            'product center <colin.li@hunteron.com>'
        ]
    };

module.exports = transporter;
