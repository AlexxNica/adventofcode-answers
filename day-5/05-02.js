var fs = require('fs');
var input = fs.readFileSync(__dirname+'/05-01-input.txt').toString();
var strings = input.split('\n');

var nice = 0;

for (var i = 0, l = strings.length; i < l; i++) {
    if (isNice(strings[i])) nice++;
}

console.log(nice);

function isNice(string) {
    return (hasPairs(string) && hasRepeats(string));
}

function hasPairs(string) {
    var pairs = [];
    for (var i = 0, l = string.length; i < l; i++) {
        if (string.charAt(i+1)) {
            var combo = string.charAt(i)+string.charAt(i+1);
            for (var j = 0, l2 = pairs.length; j < l2; j++) {
                if (combo === pairs[j] && i != j+1) return true;
            }
            pairs.push(combo);
        }
    }
    return false;
}

function hasRepeats(string) {
    for (var i = 0, l = string.length; i < l; i++) {
        if (string.charAt(i+2)) {
            if (string.charAt(i) === string.charAt(i+2)) return true;
        }
    }
    return false;
}
