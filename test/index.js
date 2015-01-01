var should = require('chai').should();
var BackPack = require('../index');
var boxes = [
    {'id': 1, 'width': 20, 'height': 40},
    {'id': 2, 'width': 30, 'height': 30}
];

describe('#pack', function() {
    it('Should output the same number of boxes as input.', function () {
        var backpack = new BackPack(50, 10000);
        var boxPacked = backpack.pack(boxes);
        boxPacked.length.should.equal(boxes.length);
    });
    
    it('Box should not overlap', function(){
        var backpack = new BackPack(50, 10000);
        var boxPacked = backpack.pack(generateRandomBoxes(20));
        doesSetOfBoxesOverlap(boxPacked).should.equal(false);
    });

    it('Should throw error if box does not fit', function(){
        var backpack = new BackPack(10, 10000);
        try {
            var boxPacked = backpack.pack(boxes);
        }catch(e) {
            canPack = false;
        }
        canPack.should.equal(false);
    });
});

doesSetOfBoxesOverlap = function (boxes){
    for(var i = 0; i<boxes.length;i++){
        for(var j = i+1; j<boxes.length;j++){
            if(!areBoxesOverlapping(boxes[i], boxes[j])){
                return true
            }
        }
    }
    return false;
};

areBoxesOverlapping = function(A, B){
    xOverlap = valueInRange(A.x, B.x, B.x + B.box.width) ||
        valueInRange(B.x, A.x, A.x + A.box.width);

    yOverlap = valueInRange(A.y, B.y, B.y + B.box.height) ||
        valueInRange(B.y, A.y, A.y + A.box.height);

    return !(xOverlap && yOverlap);
};

valueInRange = function(value, min, max){ 
    return (value > min) && (value < max); 
};


generateRandomBoxes = function(expectedNumberOfBox){
    var boxes = [];
    for(var i = 0; i<expectedNumberOfBox; i++){
        var width = Math.ceil(Math.random() * (10 - 1 + 1) + 1);
        var height = Math.ceil(Math.random() * (10 - 1 + 1) + 1);
        boxes.push({'id': i, 'width': width, 'height': height});
    }
    return boxes;
};