const db = require('../utils/db');
const config = require('../config/default.json');

module.exports = {
    all: _ => db.load('SELECT * FROM bidhistory'),
    single: id => db.load(`SELECT * FROM bidhistory WHERE id=${id}`),
    limitAndByDate: (proId, limitSize) => (`SELECT * FROM bidhistory where product_id=${proId} ORDER BY 'date' DESC LIMIT ${limitSize};`),
    byProId: proID => db.load(`SELECT * FROM bidhistory WHERE product_id=${proID}`),
    byUserId: userID => db.load(`SELECT * FROM bidhistory WHERE user_id=${userID}`),
    distinctByUserId: UID => db.load(`SELECT distinct product_id, user_id FROM bidhistory WHERE user_id = ${UID}`),
    byJoinUserId: userID => db.load(`SELECT * FROM qlbh.bidhistory as bid, qlbh.products as pro 
    where bid.product_id = pro.ProID and bid.user_id = ${userID}`),
}