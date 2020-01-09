const db = require('../utils/db');

module.exports = {
    all: _ => db.load('SELECT * FROM ban_list'),
    byProId: proID => db.load(`SELECT * FROM ban_list WHERE product_id=${proID}`),
    byUserId: uid => db.load(`SELECT * FROM ban_list WHERE user_id=${uid}`),
    add: entity => db.add(entity, `ban_list`),
}