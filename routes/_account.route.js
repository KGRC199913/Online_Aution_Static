const express = require('express');
const moment = require('moment');
const bcrypt = require('bcryptjs');
const userModel = require('../models/user.model');
const config = require('../config/default.json');
const reviewModel = require('../models/review.model');
const productModel = require('../models/product.model');
const bidHistoryModel = require('../models/bid.model');
const favoriteModel = require('../models/favorite.model');
const upSellerModel = require('../models/upseller.model');

const router = express.Router();

router.get('/login', async function(req, res) {
    res.render('vwAccount/login', {
        layout: false
    });
})

router.post('/login', async function(req, res) {
    const user = await userModel.singleByEmail(req.body.email);
    if (user === null)
        return res.render('vwAccount/login', {
            layout: false,
            err_message: 'Invalid email or password.'
        });

    const rs = bcrypt.compareSync(req.body.password, user.f_Password);
    if (rs === false)
        return res.render('vwAccount/login', {
            layout: false,
            err_message: 'Invalid email or password.'
        });

    delete user.password;
    req.session.isAuthenticated = true;
    req.session.authUser = user;

    const reviews = await reviewModel.byReceivingId(user.f_ID);
    if (reviews === null) {
        req.session.rating = 5;
    } else {
        let avgRating = 0.0;
        for (let review in reviews) {
            avgRating += reviews[review].rating;
        }
        avgRating /= reviews.length;
        req.session.rating = avgRating;
    }

    const url = req.query.retUrl || '/';
    res.redirect(url);
})

router.post('/logout', async function(req, res) {
    req.session.isAuthenticated = false;
    req.session.authUser = null;
    res.redirect(req.headers.referer);
})


const restrict = require('../middlewares/auth.mdw');
router.get('/profile/:id', restrict, async function(req, res) {
    const rows = await userModel.singleById(req.params.id);

    const history = await bidHistoryModel.byJoinUserId(req.params.id);
    for (let h in history) {
        history[h]['product'] = await productModel.single(history[h].product_id);
    }

    const favorite = await favoriteModel.byJoinUserId(req.params.id);
    for (let f in favorite) {
        favorite[f]['favorite'] = await productModel.single(favorite[f].product_id);
    }

    res.render('vwAccount/profile', {
        user: rows,
        bidding: history,
        favorite: favorite,
    });

})

router.get('/register', async function(req, res) {
    res.render('vwAccount/register');
});

router.post('/register', async function(req, res) {
    const hash = bcrypt.hashSync(req.body.password, config.authentication.saltRounds);
    const f_DOB = moment(req.body.dob, 'DD/MM/YYYY').format('YYYY-MM-DD');
    const entity = {
        f_username: "abc",
        f_password: hash,
        f_name: req.body.name,
        f_email: req.body.email,
        f_DOB,
        f_permission: 0
    }
    const ret = await userModel.add(entity);
    res.render('vwAccount/register');
});

router.get('/is-available', async function(req, res) {
    const email = await userModel.singleByEmail(req.query.email);
    if (!email)
        return res.json(true);

    res.json(false);
});

router.get(`/review/:id`, async function (req, res) {
    const user = await userModel.singleById(req.params.id);
    const reviews = await reviewModel.byReceivingId(req.params.id);

    let totalReview;
    if (reviews === null) {
        totalReview = 5;
    } else {
        let avgRating = 0.0;
        for (let review in reviews) {
            avgRating += reviews[review].rating;
        }
        avgRating /= reviews.length;
        totalReview = avgRating;
    }

    res.render('vwAccount/review', {
        user: user,
        reviews: reviews,
        avgRated: totalReview
    });
});

router.get('/write_review', async function (req, res) {
    const user = await userModel.singleById(req.query.to);
    res.render('vwAccount/review_write', {
        user: user,
    });
});

router.post('/write_review', async function (req, res) {
    const entity = {
        from_user_id: req.body.from,
        to_user_id: req.body.to,
        review: req.body.review,
        rating: req.body.rate,
    };

    try {
        await reviewModel.add(entity);
    } catch (e) {
        res.status = 400;
        res.send("Error saving comment, unknown error!!!");
        return console.log(e);
    }
    res.status = 200;
    res.send("Comment saved");
});

router.post('/up_seller', async function (req, res) {
    const id = req.body.user_id;
    const entity = {
        user_seller : id,
    }
    try {
        await upSellerModel.add(entity);
    } catch (e) {
        res.status = 400;
        return res.send("Already in seller upgrade list, please wait!!");
    }

    res.status = 200;
    return res.send("Added to list, please wait to be approved");
});

module.exports = router;