var Map = require('./map.js');

function BackPack(width, height) {
    this.width = width;
    this.height = height;
}

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