const express = require('express');
const productModel = require('../models/product.model');
const catModel = require('../models/category.model');
const moment = require('moment');
const multer  = require('multer');
const sharp = require('sharp');
const fs = require('fs');

var upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.get('/', async function (req, res) {
    if (!req.session.authUser || req.session.authUser.f_Permission !== 1) {
        return res.render('404', {
            layout: false
        })
    }

    const categories = await catModel.all();

    return res.render('vwProducts/sell', {categories: categories});
});

var dataUpload = upload.fields([{name: 'main', maxCount: 1}, {name: 'sub'}]);
router.post('/', dataUpload, async function (req, res) {
    var data = JSON.parse(req.body.text);
    const entity = {
        ProName: data.ProName,
        TinyDes: data.TinyDes,
        FullDes: data.FullDes,
        curPrice: data.curPrice,
        CatID: data.CatID,
        priceStep: data.priceStep,
        sellerId: req.session.authUser.f_ID,
        hgBidderId: 0,
        buyPrice: data.buyPrice,
        startDate: moment(moment.now()).format('YYYY-MM-DD HH:mm:ss'),
        endDate: moment(data.endDate).format('YYYY-MM-DD HH:mm:ss'),
    };

    try {
        await productModel.add(entity);
        const product = (await productModel.byProName(data.ProName))[0];
        var dir = './public/imgs/sp/' + product.ProID;
        await  fs.promises.mkdir(dir);

        var mainImg = req.files['main'][0];
        await sharp(mainImg.path).resize(400, 300).jpeg().toFile(`${dir}/main.jpg`);
        await sharp(mainImg.path).resize(200, 150).jpeg().toFile(`${dir}/main_thumbs.jpg`);

        var subImgs = req.files['sub'];
        let index = 0;
        for (const img of subImgs) {
            await sharp(img.path).resize(400, 300).jpeg().toFile(`${dir}/${++index}.jpg`);
            await sharp(img.path).resize(200, 150).jpeg().toFile(`${dir}/${index}_thumbs.jpg`);
        }

        res.status = 200;
        res.send("Item upload successfully!!");

        await fs.promises.unlink(mainImg.path);
        for (const img of subImgs) {
            await fs.promises.unlink(img.path);
        }
    } catch (e) {
        console.log(e);
    }

});


module.exports = router;