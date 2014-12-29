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