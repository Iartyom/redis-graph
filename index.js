var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require("body-parser");


var routes = require("./api/routes/route"); //importing route
routes(app); //register the route

app.listen(port);

console.log("server running:" + port);