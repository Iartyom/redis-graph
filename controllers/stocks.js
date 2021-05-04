var query = require("../dal/query");

const stocks = async function (req, res, next) {
  try {
    const nextNode = await query.getNextNode();
    res.status(200).json({ lists });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(error);
  }
};
module.exports = {
  stocks,
};