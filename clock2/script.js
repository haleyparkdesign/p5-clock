class Blob {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 80;
        this.r = 150 + Math.random() * 100;
        this.g = 150 + Math.random() * 100;
        this.b = 150 + Math.random() * 100;
    }
}

blobs = [];
var originX = 0;
var originY = 0;

for (var i = 20; i < window.innerWidth; i += 370 / 4) {
    for (var j = 20; j < window.innerHeight / 1.29; j += 600 / 6) {
        var b = new Blob(i, j);
        blobs.push(b);
    }
}

function setup() { //called once
    createCanvas(windowWidth, windowHeight);
    noStroke();
    ellipseMode(CENTER);
    background(10, 100, 20);
}

function draw() {
    background(0);
    var h = hour();
    var m = minute();
    var s = second();
    var count = 0;

    while (count < h) {
        fill(blobs[count].r + s, blobs[count].g + s, blobs[count].b + s);
        ellipse(blobs[count].x + originX + windowWidth*0.2, blobs[count].y + originY + 100, blobs[count].radius, blobs[count].radius);
        count++;
    }

    while (count < h + m) {
        fill(blobs[count].r, blobs[count].g, blobs[count].b);
        ellipse(blobs[count].x + originX + windowWidth*0.2, blobs[count].y + originY + 100, blobs[count].radius / 2, blobs[count].radius / 2);
        count++;
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        originY += 5;
    } else if (keyCode === DOWN_ARROW) {
        originY -= 5;
    } else if (keyCode === LEFT_ARROW) {
        originX += 5;
    } else if (keyCode === RIGHT_ARROW) {
        originX -= 5;
    }
    return false;
}
