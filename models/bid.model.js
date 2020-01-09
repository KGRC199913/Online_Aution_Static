const db = require('../utils/db');
const config = require('../config/default.json');

module.exports = {
    all: _ => db.load('SELECT * FROM bidhistory'),
    single: id => db.load(`SELECT * FROM bidhistory WHERE id=${id}`),
    limitAndByDate: (proId, limitSize) => (`SELECT * FROM bidhistory where product_id=${proId} ORDER BY 'date' DESC LIMIT ${limitSize};`),
    byProId: proID => db.load(`SELECT * FROM bidhistory WHERE product_id=${proID} ORDER BY bid_money DESC`),
    add: entity => db.add(entity, `bidhistory`),
    getHighestByProId: proID => db.load(`SELECT * FROM bidhistory WHERE product_id = ${proID} ORDER BY bid_money DESC LIMIT 1`),
    getSecondHgByProId: proId => db.load(`select * from bidhistory where product_id = ${proId} order by bid_money desc limit 1,1`),
    byUserId: userID => db.load(`SELECT * FROM bidhistory WHERE user_id=${userID}`),
    byJoinUserId: userID => db.load(`SELECT distinct ProID, ProName FROM bidhistory join products on product_id = ProID
    where user_id = ${userID}`),
}