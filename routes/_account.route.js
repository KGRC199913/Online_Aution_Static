const express = require('express');
const moment = require('moment');
const bcrypt = require('bcryptjs');
const userModel = require('../models/user.model');
const config = require('../config/default.json');

const router = express.Router();

router.get('/login', async function(req, res) {
    res.render('vwAccount/login', {
        layout: false
    });
})

router.post('/login', async function(req, res) {
    console.log('Login');
    console.log(req.session);

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

    const url = req.query.retUrl || '/';
    res.redirect(url);
})

router.post('/logout', async function(req, res) {
    console.log(req.session);
    req.session.isAuthenticated = false;
    req.session.authUser = null;
    res.redirect(req.headers.referer);
})


const restrict = require('../middlewares/auth.mdw');
router.get('/profile/:id', restrict, async function(req, res) {
    const user = await userModel.singleById(req.params.id);
    res.render('vwAccount/profile', {
        user: user,
    });
})

router.get('/register', async function(req, res) {
    res.render('vwAccount/register');
})

router.post('/register', async function(req, res) {
    console.log("meow" + req.body);
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
})

router.get('/is-available', async function(req, res) {
    const email = await userModel.singleByEmail(req.query.email);
    if (!email)
        return res.json(true);

    res.json(false);
})

module.exports = router;