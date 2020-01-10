const db = require('../utils/db');
const config = require('../config/default.json');

module.export={
    add: entity => db.add(entity, `autobid`),
    remove: (user_id,pro_id) => db.load(`DELETE FROM autobid WHERE user_id = ${user_id} and product_id = ${pro_id}`),
}