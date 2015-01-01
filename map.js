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