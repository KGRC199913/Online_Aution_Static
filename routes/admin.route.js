const express = require('express');
const categoryModel = require('../models/category.model');
const productModel = require('../models/product.model');
const userModel = require('../models/user.model');

const router = express.Router();

router.get('/', async function (req, res) {
    if (!req.session.authUser || req.session.authUser.f_Permission !== 2) {
        return res.render('404',
            {
                layout: false
            })
    }
    const cat = await categoryModel.allwithcount();
    const product = await productModel.all();
    const user = await userModel.all();

    res.render('vwAccount/admindashboard', {
        layout: false,
        cats: cat,
        products: product,
        users: user,
    });
})
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