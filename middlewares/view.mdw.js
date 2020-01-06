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

            getSimpleDate: (datetime) => moment(datetime).format(`hh:mm Do MMMM YYYY`),
            getFormatedDateTime: (datetime) => moment(datetime).format('Do MMMM YYYY, h:mm:ss a'),
            shouldDateRelative: (datetime) => {
                var duration = moment.duration(moment(datetime).diff(moment.now()));
                return duration.asDays() <= 3;
            },
            getRelativeDateTime: (datetime) => moment(datetime).toNow(),
            isGuest: (user) => !user,
            isBidder: (user) => user.f_Permission === 0,
            isSeller: (user) => user.f_Permission === 1,
            isAdmin: (user) => user.f_Permission === 2,
            isBidOver: (datetime) => moment(datetime).isBefore(moment.now()),
            maskString: string => mask(string),
            datetimeToSecond: (datetime) => moment(datetime).format('DD/MM/YYYY'),
        }
    }));
    app.set('view engine', 'hbs');
};

function mask(string) {
    for (let i = 0; i < string.length * 0.5; ++i) {
        string = string.substr(0, i) + '*' + string.substr(i + 1);
    }
    return string;
}
