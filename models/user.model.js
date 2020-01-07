const db = require('../utils/db');

module.exports = {
    all: _ => db.load('select * from users'),
    add: entity => db.add(entity, 'users'),
    update: (id, name, address, dob) => db.load(`update qlbh.users set f_Name = "${name}", f_Address = "${address}", f_DOB = "${dob}" WHERE f_ID = ${id}`),

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
};