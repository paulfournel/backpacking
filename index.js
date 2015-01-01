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