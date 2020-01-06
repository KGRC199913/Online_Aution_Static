const express = require('express');
const homeproduct = require('../models/homeproduct.model');

const router = express.Router();

router.get('/', async function (req, res) {
  const top5price = await homeproduct.top5price();
  const top5date  = await homeproduct.top5date();
  const top5active = await homeproduct.top5active();
  res.render('home', {
    top5prices: top5price,
    top5dates: top5date,
    top5actives : top5active,
    empty1: top5price.length === 0,
    empty2: top5date.length === 0,
    empty3: top5active.length === 0
  })
})

module.exports = router;