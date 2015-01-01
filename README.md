Backpacking
===========

A node module to pack boxes into a 2D space.

Here is the [live demo](http://htmlpreview.github.io/?https://github.com/paulfournel/backpacking/blob/master/examples/visualisation/index.html)


## Installation

```shell
  npm install backpacking --save
```

## Usage

```js
  var BackPack = require("backpacking");
  
  var boxes = [];
  for(var i = 0; i<20; i++){
      var width = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
      var height = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
      boxes.push({'id': i, 'width': width, 'height': height});
  }
  
  backPack = new BackPack(40, 10000);
```

## Tests

```shell
   npm test
```
