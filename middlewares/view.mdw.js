const exphbs = require('express-handlebars');
const hbs_sections = require('express-handlebars-sections');
const numeral = require('numeral');
const moment = require('moment');

module.exports = function(app) {
    app.engine('hbs', exphbs({
        defaultLayout: 'main.hbs',
        helpers: {
            section: hbs_sections(),
            format: val => numeral(val).format('0,0'),
            nextPrice: (cur, step) => cur + step,
            getFormatedDateTime: (datetime) => moment(datetime).format('MMMM Do YYYY, h:mm:ss a'),
            datetimeToSecond: (datetime) => moment(datetime).format('DD/MM/YYYY'),
        }
    }));
    app.set('view engine', 'hbs');
};