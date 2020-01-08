const db = require('../utils/db');
const config = require('../config/default.json');

module.exports = {
    all: _ => db.load('SELECT * FROM bid_finished'),
    single: id => db.load(`SELECT * FROM bid_finished WHERE id=${id}`),
    limitAndByDate: (proId, limitSize) => (`SELECT * FROM bid_finished where product_id=${proId} ORDER BY 'date' DESC LIMIT ${limitSize};`),
    byProId: proID => db.load(`SELECT * FROM bid_finished WHERE product_id=${proID}`),
    add: entity => db.add(entity, `bid_finished`),
    byUserId: userID => db.load(`SELECT * FROM bid_finished WHERE user_id=${userID}`),
    byJoinUserId: userID => db.load(`SELECT * FROM qlbh.bid_finished as win, qlbh.products as pro 
    where win.product_id = pro.ProID and win.winner = ${userID}`),
}