const db = require('../utils/db');

module.exports = {
    all: _ => db.load('SELECT * FROM favorite'),
    add: entity => db.add(entity, 'favorite'),
    single: id => db.load(`SELECT * FROM favorite WHERE id=${id}`),
    byProId: proID => db.load(`SELECT * FROM favorite WHERE product_id=${proID}`),
    byUserId: userID => db.load(`SELECT * FROM favorite WHERE user_id=${userID}`),
};