module.exports = function (app) {
  const stocksController = require("../controllers/stocks");

  app
    .route("/StockComp")
    .get(stocksController.nextNode)
};