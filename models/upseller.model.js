const db = require('../utils/db');

module.exports = {
    all: _ => db.load('SELECT * FROM up_seller'),
    single: id => db.load(`SELECT * FROM up_seller WHERE id=${id}`),
    add: entity => db.add(entity, `up_seller`),
    byUserId: uid => db.load(`SELECT * FROM up_seller WHERE user_id = ${uid}`),
};