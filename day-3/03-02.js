var fs = require('fs');
var input = fs.readFileSync(__dirname+'/03-01-input.txt').toString();

var santaX = 0, santaY = 0;
var roboSantaX = 0, roboSantaY = 0;
var visited = [];
visited.push({x: santaX, y: santaX});

for (var i = 0; i < input.length; i++) {
    switch (input.charAt(i)) {
        case '^': santaY-=1; break;
        case 'v': santaY+=1; break;
        case '<': santaX-=1; break;
        case '>': santaX+=1; break;
    }
    i++;
    if (!input[i]) continue;
    if (!houseVisited(santaX, santaY)) visited.push({x: santaX, y: santaY});
    switch (input.charAt(i)) {
        case '^': roboSantaY-=1; break;
        case 'v': roboSantaY+=1; break;
        case '<': roboSantaX-=1; break;
        case '>': roboSantaX+=1; break;
    }
    if (!houseVisited(roboSantaX, roboSantaY)) visited.push({x: roboSantaX, y: roboSantaY});
}

console.log(visited.length);

function houseVisited(x, y) {
    for (var i = 0; i < visited.length; i++) {
        if (visited[i].x == x && visited[i].y == y) return visited[i];
    }
    return false;
}


