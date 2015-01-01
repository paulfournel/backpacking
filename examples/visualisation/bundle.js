(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var BackPack = require("backpacking");
var utils = require("./utils");

backPack = new BackPack(800, 10000);
packedBoxes = backPack.pack(utils.generateBoxes(100));

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

utils.drawBoxes(packedBoxes, ctx);


},{"./utils":2,"backpacking":3}],2:[function(require,module,exports){
var utils = this;

utils.generateBoxes = function(expectedNumberOfBoxes){
    var boxes = [];
    for(var i = 0; i<expectedNumberOfBoxes; i++){
        var width = Math.random() * (90 - 15 + 1) + 15;
        var height = Math.random() * (90 - 15 + 1) + 15;
        boxes.push({'id': i, 'width': width, 'height': height});
    }
    return boxes;
};

utils.drawBoxes = function(packedBoxes, ctx){
    $.each( packedBoxes, function( key, val ) {
        ctx.strokeStyle = 'black';
        ctx.strokeRect(val.x,val.y,val.box.width,val.box.height);
        ctx.fillStyle = 'rgb('+Math.floor(Math.random() * 250)+','+Math.floor(Math.random() * 250)+','+Math.floor(Math.random() * 250)+')';
        ctx.fillRect(val.x,val.y,val.box.width,val.box.height);
        ctx.fillStyle = 'black';
        ctx.font = '12px Calibri';
        ctx.fillText(val.box.id,val.x+2,val.y+10);
    });
};

module.exports = utils;
},{}],3:[function(require,module,exports){
/**
 * BackPacking
 * https://github.com/paulfournel/backpacking/
 *
 * Copyright (c) 2015 Paul Fournel
 * Licensed under the MIT license.
 */

var Map = require('./map.js');

function BackPack(width, height) {
    this.width = width;
    this.height = height;
}

/**
 * Pack a list of boxes into the backpack.
 * @param boxList: object with height and with attribute
 * @returns Array of boxes with coordinates. 
 */
BackPack.prototype.pack = function(boxList) {

    boxList.sort(function(a,b){
        return b.height - a.height;
    });

    var map = new Map(this.width, this.height);
    for(var i=0;i<boxList.length;i++){
        map.add(boxList[i]);
    }
    return map.boxes;
};

module.exports = BackPack;
},{"./map.js":4}],4:[function(require,module,exports){
/**
 * BackPacking
 * https://github.com/paulfournel/backpacking/
 *
 * Copyright (c) 2015 Paul Fournel
 * Licensed under the MIT license.
 */

var SubMap = require('./subMap.js');

function Map(width, height) {
    this.boxes  = [];
    this.freeSpaces = [new SubMap(0,0, width, height)];
}

Map.prototype.add = function(box) {

    this.freeSpaces.sort(function(a,b){
        return a.width* a.height - b.width* b.height;
    });

    for(var i=0; i<this.freeSpaces.length; i++){
        var currentFreeSpace = this.freeSpaces[i];
        if(currentFreeSpace.fits(box)){
            var subMaps = currentFreeSpace.createSubMaps(box);

            this.boxes.push({
                x: currentFreeSpace.x,
                y: currentFreeSpace.y,
                box: box
            });

            this.freeSpaces.splice(i, 1);
            this.freeSpaces.push(subMaps[0]);
            this.freeSpaces.push(subMaps[1]);

            
            return true;
            
        }
    }
    throw "No free space for box " + box.id;
};

module.exports = Map;
},{"./subMap.js":5}],5:[function(require,module,exports){
/**
 * BackPacking
 * https://github.com/paulfournel/backpacking/
 *
 * Copyright (c) 2015 Paul Fournel
 * Licensed under the MIT license.
 */

function SubMap(x, y, width, height) {
    this.x  = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

SubMap.prototype.fits = function(box) {
    return (box.width <= this.width && box.height <= this.height);
};

SubMap.prototype.createSubMaps = function(box) {
    var HorizontalSubMap = new SubMap(this.x+box.width, this.y, this.width-box.width, box.height);
    var VerticalSubMap = new SubMap(this.x, this.y+box.height, this.width, this.height-box.height);
    return [HorizontalSubMap, VerticalSubMap];
};

module.exports = SubMap;
},{}]},{},[1]);
