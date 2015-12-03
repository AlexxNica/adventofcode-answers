var fs = require('fs');
var input = fs.readFileSync(__dirname+'/03-01-input.txt').toString();

var x = 0, y = 0;
var visited = [];
visited.push({x: x, y: y});

for (var i = 0; i < input.length; i++) {
    switch (input.charAt(i)) {
        case '^': y-=1; break;
        case 'v': y+=1; break;
        case '<': x-=1; break;
        case '>': x+=1; break;
    }

    if (!houseVisited(x, y)) visited.push({x: x, y: y});
}

console.log(visited.length);

function houseVisited(x, y) {
    for (var i = 0; i < visited.length; i++) {
        if (visited[i].x == x && visited[i].y == y) return visited[i];
    }
    return false;
}


