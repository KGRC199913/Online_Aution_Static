const sgMail = require('@sendgrid/mail');
const mail = require('./models/mail.model');
sgMail.setApiKey('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');

const bid = mail.bidsuccess('thefirst1441999@gmail.com','ndthong144@gmail.com','nducthong1441999@gmail.com','Laptop ABC','12364262');
const bidfinish =mail.bidfinish('thefirst1441999@gmail.com','ndthong144@gmail.com','IPHONE X 256GB','1213000');
console.log(bid);
sgMail.send(bid);
