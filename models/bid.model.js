const db = require('../utils/db');
const config = require('../config/default.json');

module.exports = {
    all: _ => db.load('SELECT * FROM bidhistory'),
    single: id => db.load(`SELECT * FROM bidhistory WHERE id=${id}`),
    limitAndByDate: (proId, limitSize) => (`SELECT * FROM bidhistory where product_id=${proId} ORDER BY 'date' DESC LIMIT ${limitSize};`),
    byProId: proID => db.load(`SELECT * FROM bidhistory WHERE product_id=${proID}`),
    add: entity => db.add(entity, `bidhistory`),
    getHighestByProId: proID => db.load(`SELECT * FROM bidhistory WHERE product_id = ${proID} ORDER BY bid_money DESC LIMIT 1`),
};