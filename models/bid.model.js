const db = require('../utils/db');
const config = require('../config/default.json');

module.exports = {
    all: _ => db.load('SELECT * FROM bidhistory'),
    single: id => db.load(`SELECT * FROM bidhistory WHERE id=${id}`),
    limitAndByDate: (proId, limitSize) => (`SELECT * FROM bidhistory where product_id=${proId} ORDER BY 'date' DESC LIMIT ${limitSize};`),
    byProId: proID => db.load(`SELECT * FROM bidhistory WHERE product_id=${proID}`),
}