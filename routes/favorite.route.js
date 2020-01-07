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
        return res.send('This product is already in favorite list');
    }

    res.send('Added');
});

module.exports = router;