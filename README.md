backpack
========

A node module to pack boxes into a 2D space

Example:

```
var boxes = [];
for(var i = 0; i<20; i++){
    var width = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
    var height = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
    boxes.push({'id': i, 'width': width, 'height': height});
}

backPack = new BackPack(40, 10000);
```
