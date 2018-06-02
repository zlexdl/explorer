

const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.mxhichina.com',
    secureConnection: true, // use SSL
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'postmaster@1co.xyz',
        pass: ''
    }
})
module.exports = {



    sendMail: function(mailOptions) {

        
        transporter.sendMail(mailOptions, (error, info) => {
            console.log("sendmail");
            if (error) {
                  return console.log(error);
            }
            console.log(`Message: ${info.messageId}`);
            console.log(`sent: ${info.response}`);
        });
        
        
    }



}