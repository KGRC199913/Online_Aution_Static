const db = require('../utils/db');

module.exports = {
    all: _ => db.load('select * from users'),
    add: entity => db.add(entity, 'users'),
    all_upseller: _ => db.load('SELECT u.*,IFNULL(COUNT(p.user_id), 0) AS COUNT FROM users AS u  LEFT JOIN up_seller AS p ON u.f_ID = p.user_id GROUP BY u.f_ID;'),
    update: (id, name, address, dob) => db.load(`update qlbh.users set f_Name = "${name}", f_Address = "${address}", f_DOB = "${dob}" WHERE f_ID = ${id}`),
    update_pw: (id, password) => db.load(`update qlbh.users set f_Password="${password}" where f_ID=${id}`),
    remove: id => db.load(`DELETE FROM users WHERE f_ID = ${id}`),
    singleByUserName: async username => {
        const rows = await db.load(`select * from users where f_username = '${username}'`);
        if (rows.length > 0)
            return rows[0];

        return null;
    },
    singleById: async id => {
        const rows = await db.load(`select * from users where f_ID = '${id}'`);
        if (rows.length > 0)
            return rows[0];

        return null;
    },
    singleByEmail: async email => {
        const rows = await db.load(`select * from users where f_Email = '${email}'`);
        if (rows.length > 0)
            return rows[0];

        return null;
    },
    patch: entity => {
        const condition = {
          f_ID: entity.f_ID
        };
        delete entity.f_ID;
        return db.patch(entity, condition, 'users');
      }
};