var fs = require('fs');
var input = fs.readFileSync(__dirname+'/02-01-input.txt').toString();
var presents = input.split('\n');
var presents = presents.map(function(present, index) {
    present = present.split('x');
    present = present.map(function(p, index) {
        p = Number(p);
        return p;
    });
    return present;
});

var totalWrapping = 0;
presents.forEach(function(present, index) {
    var sides = [present[0]*present[1], present[1]*present[2], present[2]*present[0]];
    var smallest = Math.min.apply(null, sides);
    totalWrapping += sides[0]*2+sides[1]*2+sides[2]*2 + smallest;
});

console.log(totalWrapping);
