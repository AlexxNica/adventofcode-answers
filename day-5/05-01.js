var fs = require('fs');
var input = fs.readFileSync(__dirname+'/05-01-input.txt').toString();
var strings = input.split('\n');

var nice = 0;

for (var i = 0, l = strings.length; i < l; i++) {
    if (isNice(strings[i])) nice++;
}

console.log(nice);

function isNice(string) {
    return (hasVowels(string) && doubleLetters(string) && clean(string))
}

function hasVowels(string) {
    var vowels = ['a','e','i','o','u'];
    var vowelCount = 0;

    for (var i = 0, l = string.length; i < l; i++) {
        for (var j = 0, l2 = vowels.length; j < l2; j++) {
            if (string.charAt(i) === vowels[j]) {
                vowelCount++;
                if (vowelCount === 3) return true;
            }
        }
    }

    return false;
}

function doubleLetters(string) {
    var character = string.charAt(0);
    for (var i = 1, l = string.length; i < l; i++) {
        if (string.charAt(i) === character) return true;
        else character = string.charAt(i);
    }
    return false;
}

function clean(string) {
    var badStrings = ['ab', 'cd', 'pq', 'xy'];
    var length = badStrings.length;
    while(length--) {
        if (string.indexOf(badStrings[length])!=-1) {
            return false;
        }
    }
    return true;
}