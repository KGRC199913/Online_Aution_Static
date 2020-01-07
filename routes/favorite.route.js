const express = require('express');
const favoriteModel = require('../models/favorite.model');

const router = express.Router();

router.post('/', async function (req, res) {
    const entity = {
        user_id : req.body.user,
        product_id : req.body.product,
    };
    try {
        await favoriteModel.add(entity);
    } catch (e) {
        res.status(401);
        return res.send('This product is already in favorite list.');
    }
    res.status(200);
    res.send('Added to favorite list.');
});

router.post('/remove', async function (req, res) {
    const entity = {
        user_id : req.body.user,
        product_id : req.body.product,
    };
    try {
        await favoriteModel.remove(entity);
    } catch (e) {
        res.status(401);
        return res.send('Not in favorite list');
    }
    res.status(200);
    res.send('Remove from favorite list.');
});

module.exports = router;