const express = require('express');
const categoryModel = require('../models/category.model');
const productModel = require('../models/product.model');
const userModel = require('../models/user.model');
const upsellerModel = require('../models/upseller.model');

const router = express.Router();

router.get('/', async function (req, res) {
    if (!req.session.authUser || req.session.authUser.f_Permission !== 2) {
        return res.render('404', {
            layout: false
        })
    }
    const cat = await categoryModel.allwithcount();
    const product = await productModel.all();
    const user = await userModel.all_upseller();

    res.render('vwAccount/admindashboard', {
        layout: false,
        cats: cat,
        products: product,
        users: user,
    });
})
router.post('/add-user', async function (req, res) {
    const hash = bcrypt.hashSync(req.body.password, config.authentication.saltRounds);
    const f_DOB = moment(req.body.dob, 'DD/MM/YYYY').format('YYYY-MM-DD');
    const entity = {
        f_username: req.body.username,
        f_password: hash,
        f_name: req.body.name,
        f_email: req.body.email,
        f_DOB,
        f_permission: req.body.permission,
    }
    try {
        const ret = await userModel.add(entity);
    } catch (e) {
        res.status(401);
        return res.send('Add user fail');
    }
    res.status(200);
    res.send('Add user Success.');
});
router.post('/add-cat', async function (req, res) {
    const entity = {
        CatName: req.body.CatName,
    }
    try {
        const ret = await categoryModel.add(entity);
    } catch (e) {
        res.status(401);
        return res.send('Add Category fail');
    }
    res.status(200);
    res.send('Add Category Success.');
});
router.post('/up-user', async function (req, res) {
    const entity = {
        f_ID: req.body.user_id,
        f_Permission: req.body.f_Permission,
    }
    try {
        const res  = await upsellerModel.remove(entity.f_ID);
        const ret = await userModel.patch(entity);
    } catch (e) {
        res.status(401);
        return res.send('Update permission user fail');
    }
    res.status(200);
    res.send('Update permission user Success.');
});
router.post('/edit-cat', async function (req, res) {
    const entity = {
        CatID: req.body.CatID,
        CatName: req.body.CatName,
    }
    try {
        const ret = await categoryModel.patch(entity);
    } catch (e) {
        res.status(401);
        return res.send('Update Category fail');
    }
    res.status(200);
    res.send('Update Category Success.');
});
router.post('/remove-user', async function (req, res) {
    const user_id = req.body.userId;
    try {
        await userModel.remove(user_id);
    } catch (e) {
        res.status(401);
        return res.send('Not in User list');
    }
    res.status(200);
    res.send('Remove user Success.');
});
router.post('/remove-product', async function (req, res) {
    const pro_id = req.body.proId;
    try {
        await productModel.remove(pro_id);
    } catch (e) {
        res.status(401);
        return res.send('Not in Product list');
    }
    res.status(200);
    res.send('Remove Product Success.');
});
router.post('/remove-cat', async function (req, res) {
    const cat_id = req.body.catId;
    console.log(cat_id);
    try {
        await categoryModel.remove(cat_id);
    } catch (e) {
        res.status(401);
        return res.send('Not in Category list');
    }
    res.status(200);
    res.send('Remove Category Success.');
});
module.exports = router;