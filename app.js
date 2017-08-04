var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongosee = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function (req,res) {
    res.send("HOLAAAA!!!");
});

app.use(router);

app.listen(3500, function () {
   console.log("Servidor corriendo en localhost:3500");
});

