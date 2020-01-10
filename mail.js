const sgMail = require('@sendgrid/mail');
const mail = require('./models/mail.model');
sgMail.setApiKey('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');

mail.bidsuccess('thefirst1441999@gmail.com','ndthong144@gmail.com','nducthong1441999@gmail.com','Laptop ABC','12364262');
