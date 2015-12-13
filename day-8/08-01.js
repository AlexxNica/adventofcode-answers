var fs = require('fs');
var input = fs.readFileSync(__dirname+'/08-01-input.txt').toString();
var lines = input.split('\n');

var totalCharacters = 0;
var stringCharacters = 0;

lines.forEach(function(line) {
    console.log(line);
    totalCharacters += line.length;
    line = line.substring(1, line.length-1);
    var regex = new RegExp('\\\\"', 'g');
    line = line.replace(regex, '1');
    var regex = new RegExp('\\\\\\\\', 'g');
    line = line.replace(regex, '1');
    var regex = new RegExp('\\\\x([a-f0-9]{2})', 'g');
    line = line.replace(regex, '1');
    console.log(line.length);
    stringCharacters += line.length;
});

console.log(totalCharacters);
console.log(stringCharacters);
console.log(totalCharacters - stringCharacters);
