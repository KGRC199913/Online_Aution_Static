const productModel = require('../models/product.model');
const bidHis = require('../models/bid.model');
const autoModel = require('../models/autobid.model');

module.exports = {
  invokeAuto: async proId => {
      const his = await bidHis.getHighestByProId(proId);
      const product = (await productModel.single(proId))[0];
      const auto = (await autoModel.byProId(proId));

      let cur = product.curPrice;
      let curUser;
      for (const a of auto) {
          if (a.max > his.bid_money) {
              const entity = {
                  product_id : proId,
                  user_id : a.user_id,
                  bid_money : cur + product.priceStep,
                  date: moment(moment.now()).format(`YYYY-MM-DD HH:mm:ss`),
              };
              await bidHis.add(entity);
              cur = cur + product.priceStep;
              curUser = a.user_id;
          }
      }

      if (!cur)
        await productModel.updatePrice(proId, cur, curUser);
  }

};