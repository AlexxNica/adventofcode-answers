var fs = require('fs');
var input = fs.readFileSync(__dirname+'/06-01-input.txt').toString();
var instructions = input.split('\n');

var lights = [];

for (var x = 0; x < 1000; x++) {
    for (var y = 0; y < 1000; y++) {
        lights.push(false);
    }
}


for (var i = 0, l = instructions.length; i < l; i++) {
    if (instructions[i].indexOf('toggle') != '-1') {
        instructions[i] = instructions[i].replace('toggle ', '');
        var numbers = getNumbers(instructions[i]);
        for (var x = parseInt(numbers[0][0]); x <= parseInt(numbers[1][0]); x++) {
            for (var y = parseInt(numbers[0][1]); y <= parseInt(numbers[1][1]); y++) {
                lights[(x*999+y)] = !lights[(x*999+y)];
            }
        }
    } else if (instructions[i].indexOf('turn off') != '-1') {
        instructions[i] = instructions[i].replace('turn off ', '');
        var numbers = getNumbers(instructions[i]);
        for (var x = parseInt(numbers[0][0]); x <= parseInt(numbers[1][0]); x++) {
            for (var y = parseInt(numbers[0][1]); y <= parseInt(numbers[1][1]); y++) {
                lights[(x*999+y)] = false;
            }
        }
    } else if (instructions[i].indexOf('turn on') != '-1') {
        instructions[i] = instructions[i].replace('turn on ', '');
        var numbers = getNumbers(instructions[i]);
        for (var x = parseInt(numbers[0][0]); x <= parseInt(numbers[1][0]); x++) {
            for (var y = parseInt(numbers[0][1]); y <= parseInt(numbers[1][1]); y++) {
                lights[(x*999+y)] = true;
            }
        }
    }
}

function getNumbers(instruction) {
    var numbers = instruction.split(' through ');
    var start = numbers[0].split(',');
    var end = numbers[1].split(',');
    return [start, end];
}

var brightness = 0;
for (var i = 0; i < lights.length; i++) {
    brightness += lights[i];
}

console.log(brightness);