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

var totalRibbon = 0;
presents.forEach(function(present, index) {
    totalRibbon += present[0]*present[1]*present[2];

    present.sort(function(a, b) {
        return a-b;
    });
    //present.pop();
    totalRibbon += present[0]*2 + present[1]*2;
});

console.log(totalRibbon);
