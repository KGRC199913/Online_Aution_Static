
const express = require('express');
const productModel = require('../models/product.model');
const userModel = require('../models/user.model');
const bidHistoryModel = require('../models/bid.model');
const config = require('../config/default.json');

const router = express.Router();

router.get('/byCat/:catId', async function (req, res) {

  for (const c of res.locals.lcCategories) {
    if (c.CatID === +req.params.catId) {
      c.isActive = true;
    }
  }

  let page = +req.query.page || 1;
  if (page < 0) page = 1;
  const offset = (page - 1) * config.pagination.limit;

  // const total = await productModel.countByCat(req.params.catId);

  const [total, rows] = await Promise.all([
    productModel.countByCat(req.params.catId),
    productModel.pageByCat(req.params.catId, offset)
  ])

  const nPages = Math.ceil(total / config.pagination.limit);
  const page_items = [];
  for (i = 1; i <= nPages; i++) {
    const item = {
      value: i,
      isActive: i === page
    }
    page_items.push(item);
  }

  // const rows = await productModel.pageByCat(req.params.catId, offset);
  res.render('vwProducts/byCat', {
    products: rows,
    empty: rows.length === 0,
    page_items,
    can_go_prev: page > 1,
    can_go_next: page < nPages,
    prev_value: page - 1,
    next_value: page + 1,
  })



  // const rows = await productModel.allByCat(req.params.catId);
  // res.render('vwProducts/byCat', {
  //   products: rows,
  //   empty: rows.length === 0
  // })
})

router.get('/:id', async function (req, res) {
  const rows = await productModel.single(req.params.id);
  const seller = await userModel.singleById(rows[0].sellerId);
  const hgBidder = await userModel.singleById(rows[0].hgBidderId);

  const history = await bidHistoryModel.byProId(rows[0].ProID);
  for (let h in history) {
    history[h]['user'] = await userModel.singleById(history[h].user_id);
  }

  const similar = await productModel.getXRandomProductInCat(5, rows[0].CatID);

  res.render('vwProducts/detail', {
    currentUser: req.session.authUser,
    history: history,
    similar: similar,
    product: rows[0],
    seller: seller,
    hgBidder: hgBidder,
  })
});

module.exports = router;