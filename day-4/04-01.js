var input = 'bgvyzdsv';
var match = false;
var num = 1;

var md5 = require('md5');

while (!match) {
    var hex = md5(input+num);
    if (hex.indexOf('00000') == 0) {
        match = true;
    } else {
        num++;
    }
}

console.log(num);
