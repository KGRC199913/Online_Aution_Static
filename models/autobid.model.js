const db = require('../utils/db');

module.exports = {
    byProId: id => db.load(`select * from autobid where product_id = ${id}`),
    add: entity => db.add(entity, `autobid`),
    remove: (user_id,pro_id) => db.load(`DELETE FROM autobid WHERE user_id = ${user_id} and product_id = ${pro_id}`),
    upsert: (uid, pid, price) => db.load(`replace into autobid (user_id, product_id, max) values (${uid}, ${pid}, ${price})`),
};