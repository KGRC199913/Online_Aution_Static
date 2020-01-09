const express = require('express');
const searchModel = require('../models/search.model');
var queryString = require("querystring");

const router = express.Router();

router.get('/', async function (req, res) {
  var keywords = req.query.keyword;
  var options = req.query.option;
  var catOp = req.query.cat;
  var results;
  if(catOp == '-1'){

    switch (options) {
      case '1': results = await searchModel.searchDescPrice(keywords);break;
      case '2': results = await searchModel.searchAscPrice(keywords);break;
      case '3': results = await searchModel.searchDescDate(keywords);break;
      case '4': results = await searchModel.searchAscDate(keywords);break;
    }
  }else {
    switch (options) {
      case '1': results = await searchModel.searchDescPriceWithCat(keywords,catOp);break;
      case '2': results = await searchModel.searchAscPriceWithCat(keywords,catOp);break;
      case '3': results = await searchModel.searchDescDateWithCat(keywords,catOp);break;
      case '4': results = await searchModel.searchAscDateWithCat(keywords,catOp);break;
  }
}
  res.render('search', {
    products: results,
    keyword: keywords,
    option: options,
    empty: results.length === 0
  })
})

module.exports = router;