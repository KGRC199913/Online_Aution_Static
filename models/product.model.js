const db = require('../utils/db');
const config = require('../config/default.json');

module.exports = {
    all: _ => db.load('select * from products'),
    remove: id => db.load(`DELETE FROM products WHERE ProID = ${id}`),
    single: id => db.load(`select * from products where ProID = ${id}`),
    allByCat: catId => db.load(`select * from products where CatID = ${catId}`),
    countByCat: async catId => {
        const rows = await db.load(`select count(*) as total from products where CatID = ${catId}`);
        return rows[0].total;
    },
    pageByCat: (catId, offset) => db.load(`select * from products where CatID = ${catId} limit ${config.pagination.limit} offset ${offset}`),
    getXRandomProductInCat: (amount, catId) => db.load(`SELECT * FROM products WHERE ProID IN 
    (SELECT ProID FROM (SELECT ProID FROM products WHERE CatID = ${catId} ORDER BY RAND() LIMIT ${amount}) t)`),
    singleBySellerId: seller_id => db.load(`select * from products where sellerId = ${seller_id}`),
    singleSoldItem: seller_id => db.load(`select * from products where sellerId=${seller_id} and hgBidderId != 0 and datediff(endDate, CURDATE()) < 0`),
    updatePrice: (proId, newPrice, hgBidderId) => db.load(`UPDATE products SET curPrice = ${newPrice}, hgBidderId = ${hgBidderId} WHERE ProID = ${proId}`),
    add: entity => db.add(entity, 'products'),
    byProName: ProName => db.load(`SELECT * FROM products WHERE ProName = '${ProName}'`),
    updateDesc: (id, desc) => db.load(`UPDATE products SET FullDes = "${desc}" WHERE ProID = ${id}`),
};

