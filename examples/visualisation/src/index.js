var BackPack = require("backpacking");
var utils = require("./utils");

backPack = new BackPack(800, 10000);
packedBoxes = backPack.pack(utils.generateBoxes(100));

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

utils.drawBoxes(packedBoxes, ctx);

