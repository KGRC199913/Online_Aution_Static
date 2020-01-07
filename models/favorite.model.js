const db = require('../utils/db');

module.exports = {
    all: _ => db.load('SELECT * FROM favorite'),
    add: entity => db.add(entity, 'favorite'),
    remove: entity => db.del({user_id: entity.user_id, product_id: entity.product_id}, `favorite`),
    single: id => db.load(`SELECT * FROM favorite WHERE id=${id}`),
    byProId: proID => db.load(`SELECT * FROM favorite WHERE product_id=${proID}`),
    byUserId: userID => db.load(`SELECT * FROM qlbh.favorite WHERE user_id=${userID}`),
    byJoinUserId: userID => db.load(`SELECT * FROM qlbh.favorite as favo, qlbh.products as pro
    where favo.user_id = ${userID} and favo.product_id = pro.ProID`),
};