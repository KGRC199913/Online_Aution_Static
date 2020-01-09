const db = require('../utils/db');

module.exports = {
  all: _ => db.load('select * from categories'),
  allWithDetails: _ => {
    const sql = `
      select c.CatID, c.CatName, count(p.ProID) as num_of_products
      from categories c left join products p on c.CatID = p.CatID
      group by c.CatID, c.CatName
    `;
    return db.load(sql);
  },

  single: async id => {
    const sql = `select * from categories where CatID = ${id}`;
    const rows = await db.load(sql);
    if (rows.length === 0)
      return null;

    return rows[0];
  },
  allwithcount: _ => db.load('SELECT c.*,IFNULL(COUNT(p.ProID), 0) AS COUNT FROM categories AS c LEFT JOIN products AS P ON c.CatID = p.CatID GROUP BY c.CatID;'),
  remove: id => db.load(`DELETE FROM categories WHERE CatID = ${id}`),
  patch: entity => {
    const condition = {
      CatID: entity.CatID
    };
    delete entity.CatID;
    return db.patch(entity, condition, 'categories');
  }
};