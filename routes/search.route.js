const express = require('express');
const searchModel = require('../models/search.model');
var queryString = require( "querystring" );

const router = express.Router();

router.get('/', async function (req, res) {
    var keywords = req.query.keyword;
  const results = await searchModel.all(keywords);
  res.render('search', {
    products: results,
    keyword:keywords,
    empty: results.length === 0
  })
})

module.exports = router;