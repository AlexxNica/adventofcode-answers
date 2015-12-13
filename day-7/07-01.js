var fs = require('fs');
var input = fs.readFileSync(__dirname+'/07-01-input.txt').toString();
var instructions = input.split('\n');
var gateInstructions = {};
var gates = {};

for (var i = 0, l = instructions.length; i < l; i++) {
    var sides = instructions[i].split(' -> ');
    gateInstructions[sides[1]] = sides[0].split(' ');
}

//console.log(gateInstructions);

function getValue(v) {
    //console.log('getting '+v);
    if (gates[v]) return gates[v];
    if (!isNaN(v)) return parseInt(v);

    var inputs = gateInstructions[v];
    var value;
    if (inputs.length == 1) {
        if (!isNaN(inputs[0])) value = parseInt(inputs[0]);
        else value =  getValue(inputs[0]);
    } else if(inputs.length == 2) {
        value = ~ getValue(inputs[1]);
    } else {
        switch(inputs[1]) {
            case "RSHIFT":
                value = getValue(inputs[0]) >> getValue(inputs[2]);
                break;
            case "LSHIFT":
                value = getValue(inputs[0]) << getValue(inputs[2]);
                break;
            case "AND":
                value = getValue(inputs[0]) & getValue(inputs[2]);
                break;
            case "OR":
                value = getValue(inputs[0]) | getValue(inputs[2]);
                break;
        }
    }

    gates[v] = value;

    return value;
}

var val = getValue('a');
console.log(val);