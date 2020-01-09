module.exports = function (app) {
  app.get('/', function (req, res) {
    // res.send('hello expressjs');
    res.redirect('/home');
  })

  app.get('/about', function (req, res) {
    res.render('about');
  })

  app.get('/bs', function (req, res) {
    // res.sendFile(__dirname + '/bs.html');
    res.render('bs', {
      layout: false
    });
  })

  app.use('/admin/categories', require('../routes/category.route'));
  app.use('/admin/products', require('../routes/product.route'));
  app.use('/account', require('../routes/_account.route'));
  app.use('/products', require('../routes/_product.route'));
  app.use('/demo', require('../routes/_demo.route'));
  app.use('/home',require('../routes/home.route'));
  app.use('/search',require('../routes/search.route'));
  app.use('/addToFavorite', require('../routes/favorite.route'));
  app.use('/bid', require('../routes/bid.route'));
  app.use('/admin',require('../routes/admin.route'));
  app.use('/sell', require('../routes/sell.route'));
};
