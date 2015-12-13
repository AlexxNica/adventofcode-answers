var fs = require('fs');
var input = fs.readFileSync(__dirname+'/08-01-input.txt').toString();
var lines = input.split('\n');

var totalCharacters = 0;
var encodedCharacters = 0;

lines.forEach(function(line) {
    console.log(line);
    totalCharacters += line.length;
    line = line.replace( /\\/g, '\\\\' ).replace( /\"/g, '\\\"' );
    encodedCharacters += ('\"'+line+'\"').length;
});

console.log(totalCharacters);
console.log(encodedCharacters);
console.log(encodedCharacters - totalCharacters);
