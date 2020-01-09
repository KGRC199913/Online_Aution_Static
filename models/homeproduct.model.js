const db = require('../utils/db');
const config = require('../config/default.json');

module.exports = {
  top5date: _ => db.load('SELECT * FROM products Where DATEDIFF(NOW(),endDate) < 0 ORDER BY endDate DesC LIMIT 5'),
  top5active: _ => db.load('SELECT count(products.ProID),products.* FROM products,bidhistory where products.ProID = bidhistory.product_id and DATEDIFF(NOW(),products.endDate) < 0 GROUP BY products.ProID ORDER BY count(products.ProID) Desc;'),
  top5price: _ => db.load('SELECT * FROM products Where DATEDIFF(NOW(),endDate) < 0 ORDER BY buyPrice ASC LIMIT 5'),
};
