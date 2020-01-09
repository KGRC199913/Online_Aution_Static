const sgMail = require('@sendgrid/mail');
const mail = require('./models/mail.model');
sgMail.setApiKey('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');

const bid = mail.bidsuccess('thefirst1441999@gmail.com','ndthong144@gmail.com','nducthong1441999@gmail.com','Laptop ABC','12364262vnd');
const bidfinish =mail.bidfinish('thefirst1441999@gmail.com','ndthong144@gmail.com','IPHONE X 256GB','1213000');
console.log(bidfinish);
sgMail.send(bidfinish);


