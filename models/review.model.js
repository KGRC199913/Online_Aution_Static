const db = require('../utils/db');
const config = require('../config/default.json');

module.exports = {
    all: _ => db.load('SELECT * FROM review'),
    single: id => db.load(`SELECT * FROM review WHERE id=${id}`),
    add: entity => db.add(entity, `review`),
    byReceivingId: uid => db.load(`SELECT * FROM review WHERE to_user_id = ${uid}`),
};