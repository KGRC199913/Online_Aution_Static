const express = require('express');
const bidModel = require('../models/bid.model');
const productModel = require('../models/product.model')
const moment = require('moment');

const router = express.Router();

router.post('/', async function (req, res) {
    const highest = (await bidModel.getHighestByProId(req.body.product)).bid_money;
    const userBid = req.body.price;
    if (userBid <= highest) {
        res.status(402);
        return res.send("Your bid must be higher than current bid, please enter higher price!!!");
    }
    const entity = {
        product_id : parseInt(req.body.product),
        user_id : parseInt(req.body.user),
        bid_money : parseInt(req.body.price),
        date: moment().format(`YYYY-MM-DD HH:mm:ss`),
    };
    try {
        await bidModel.add(entity);
        productModel.updatePrice(req.body.product, req.body.price, req.body.user);
    } catch (err) {
        res.status(401);
        return res.send(`Error Placing bid!! (Unknown Error)`);
    }

    res.status(200);
    res.send(`Bid placed successfully`);
});

module.exports = router;