const db = require('../utils/db');
const config = require('../config/default.json');

module.exports = {
  top5date: _ => db.load('SELECT * FROM products ORDER BY endDate ASC LIMIT 5'),
  top5active: _ => db.load('SELECT * FROM products ORDER BY endDate ASC LIMIT 5'),
  top5price: _ => db.load('SELECT * FROM products ORDER BY buyPrice ASC LIMIT 5'),
};
