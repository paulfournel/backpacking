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