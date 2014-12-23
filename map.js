var SubMap = require('./subMap.js');

function Map(width, height) {
    this.boxes  = [];
    this.freeSpaces = [new SubMap(0,0, width, height)];
}

Map.prototype.add = function(box) {
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
            
            
            break;
        }
    }
};
// export the class
module.exports = Map;