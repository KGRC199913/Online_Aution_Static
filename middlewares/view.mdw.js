const exphbs = require('express-handlebars');
const hbs_sections = require('express-handlebars-sections');
const numeral = require('numeral');
const moment = require('moment');
const userModel = require('../models/user.model');

module.exports = function (app) {
    app.engine('hbs', exphbs({
        defaultLayout: 'main.hbs',
        helpers: {
            section: hbs_sections(),
            format: val => numeral(val).format('0,0'),
            nextPrice: (cur, step) => cur + step,
            getDMYOnly: (datetime) => moment(datetime).format('DD/MM/YYYY'),
            getSimpleDate: (datetime) => moment(datetime).format(`hh:mm Do MMMM YYYY`),
            getFormatedDateTime: (datetime) => moment(datetime).format('Do MMMM YYYY, h:mm:ss a'),
            shouldDateRelative: (datetime) => moment.duration(moment(datetime).diff(moment.now())).asDays() <= 3,
            getRelativeDateTime: (datetime) => moment(datetime).fromNow(),
            isGuest: (user) => !user,
            isBidder: (user) => user && user.f_Permission === 0,
            isSeller: (user) => user && user.f_Permission === 1,
            isAdmin: (user) => user && user.f_Permission === 2,
            isBidOver: (datetime) => moment(datetime).isBefore(),
            maskString: string => mask(string),
            datetimeToSecond: (datetime) => moment(datetime).format('DD/MM/YYYY'),
            isUserRateSuit: (rating) => rating >= 4,
            isSameId: (us1, us2) => us1 !== null && us2 !== null && us1.f_ID === us2.f_ID,
            role: permission => {
                if(permission === 2) return 'Admin';
                if(permission === 1) return 'Seller';
                else return 'Bidder'},
            searchoption: option => {
                if(option == '1') return 'Giá giảm dần';
                if(option == '2') return 'Giá tăng dần';
                if(option == '3') return 'Thời gian giảm dần';
                if(option == '4') return 'Thời gian tăngtăng dần';
            },
            eq: (l,r) => l==r,
            neq: (l,r) => l != r,
            },
       }));
    app.set('view engine', 'hbs');
};

function mask(string) {
    for (let i = 0; i < string.length * 0.5; ++i) {
        string = string.substr(0, i) + '*' + string.substr(i + 1);
    }
    return string;
}
