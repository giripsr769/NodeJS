var nodemailer = require('nodemailer');

var transpoter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: 'giripsr769@gmail.com',
            pass: 'i liek micelf giri'
        }
    }
);
var mailoption = {
    from: 'giripsr769@gmail.com',
    to: 'aravindhniit@gmail.com, giripsr769@gmail.com',
    subject: 'NodeMailer-TestMail-Giritharan',
    text: 'This mail was sent by NodeJS server !!!',
};
transpoter.sendMail(mailoption, function (err, info) {
    if (err) {
        console.log('error message');
    }
    else {
        console.log('Mail' + info.response);
    }
});


// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'giripsr769@gmail.com',
//     pass: 'i liek micelf giri'
//   }
// });

// var mailOptions = {
//   from: 'giripsr769@gmail.com',
//   to: 'revug2269@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });