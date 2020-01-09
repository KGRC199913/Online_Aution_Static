const db = require('../utils/db');
const config = require('../config/default.json');

module.exports = {
  all: keyword => db.load(`SELECT * FROM products WHERE MATCH(ProName) AGAINST('${keyword}' IN NATURAL LANGUAGE MODE)`),
  searchDescDate: keyword => db.load(`SELECT * FROM products WHERE MATCH(ProName) AGAINST('${keyword}' IN NATURAL LANGUAGE MODE) ORDER BY DATEDIFF(NOW(),endDate) asc `),
  searchDescDateWithCat: (keyword,catOp) => db.load(`SELECT * FROM products WHERE CatID=${catOp} and MATCH(ProName) AGAINST('${keyword}' IN NATURAL LANGUAGE MODE) ORDER BY DATEDIFF(NOW(),endDate) asc `),
  searchAscDate: keyword => db.load(`SELECT * FROM products WHERE MATCH(ProName) AGAINST('${keyword}' IN NATURAL LANGUAGE MODE) ORDER BY DATEDIFF(NOW(),endDate) desc `),
  searchAscDateWithCat: (keyword,catOp) => db.load(`SELECT * FROM products WHERE CatID=${catOp} and MATCH(ProName) AGAINST('${keyword}' IN NATURAL LANGUAGE MODE) ORDER BY DATEDIFF(NOW(),endDate) desc `),
  searchDescPrice: keyword => db.load(`SELECT * FROM products WHERE MATCH(ProName) AGAINST('${keyword}' IN NATURAL LANGUAGE MODE) ORDER BY curPrice desc `),
  searchDescPriceWithCat: (keyword,catOp) => db.load(`SELECT * FROM products WHERE CatID=${catOp} and MATCH(ProName) AGAINST('${keyword}' IN NATURAL LANGUAGE MODE) ORDER BY curPrice desc `),
  searchAscPrice: keyword => db.load(`SELECT * FROM products WHERE MATCH(ProName) AGAINST('${keyword}' IN NATURAL LANGUAGE MODE) ORDER BY curPrice asc `),
  searchAscPriceWithCat: (keyword,catOp) => db.load(`SELECT * FROM products WHERE CatID=${catOp} and MATCH(ProName) AGAINST('${keyword}' IN NATURAL LANGUAGE MODE) ORDER BY curPrice asc `),
  single: id => db.load(`select * from products where ProID = ${id}`),
  allByCat: catId => db.load(`select * from products where CatID = ${catId}`),
  countByCat: async catId => {
    const rows = await db.load(`select count(*) as total from products where CatID = ${catId}`);
    return rows[0].total;
  },
  pageByCat: (catId, offset) => db.load(`select * from products where CatID = ${catId} limit ${config.pagination.limit} offset ${offset}`),
};
