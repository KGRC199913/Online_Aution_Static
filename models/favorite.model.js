const db = require('../utils/db');

module.exports = {
    all: _ => db.load('SELECT * FROM favorite'),
    add: entity => db.add(entity, 'favorite'),
    remove: entity => db.load(`DELETE FROM favorite WHERE user_id = ${entity.user_id} AND product_id = ${entity.product_id}`),
    single: id => db.load(`SELECT * FROM favorite WHERE id=${id}`),
    byProId: proID => db.load(`SELECT * FROM favorite WHERE product_id=${proID}`),
    byUserId: userID => db.load(`SELECT * FROM qlbh.favorite WHERE user_id=${userID}`),
    byJoinUserId: userID => db.load(`SELECT * FROM qlbh.favorite as favo, qlbh.products as pro
    where favo.user_id = ${userID} and favo.product_id = pro.ProID`),
};