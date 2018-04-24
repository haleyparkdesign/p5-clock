var yoff = 0.0; // 2nd dimension of perlin noise
var t = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    blendMode(BLEND);
    background(0, 5);

    noStroke();
    var h = hour();
    blendMode(NORMAL);
    drawHour(h);

    blendMode(SOFT_LIGHT);
    var m = minute();
    drawMinute(m);

    blendMode(SOFT_LIGHT);
    var s = second();
    drawSecond(s);
}

function drawHour(currentHour) {
    var r = 255 * noise(t / 2 + 10);
    var g = 255 * noise(t / 2) / 2;
    var b = 255 * noise(t / 2);
    fill(r, g, b, [50]);
    beginShape();
    var xoff = 0;
    var hourHeight = windowHeight - (windowHeight / 24 * currentHour);
    var heightDiff = 20;

    // Iterate over horizontal pixels
    for (var x = 0; x <= width; x += 10) {
        var y = map(noise(xoff, yoff), 0, 0.5, (hourHeight - heightDiff), (hourHeight + heightDiff));
        // Set the vertex
        vertex(x, y);
        // Increment x dimension for noise
        xoff += 0.01;
    }
    // increment y dimension for noise
    yoff += 0.001;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    t = t + 0.001;
}

function drawMinute(currentMinute) {
    var r = 255 * noise(t - 10);
    var g = 255 * noise(t) / 3;
    var b = 255 * noise(t - 15);
    fill(r, g, b, [50]);
    beginShape();
    var xoff = 0;
    var minuteHeight = windowHeight - (windowHeight / 60 * currentMinute);
    var heightDiff = 20;
    // Iterate over horizontal pixels
    for (var x = 0; x <= width; x += 10) {
        var y = map(noise(xoff, yoff), 0, 0.5, (minuteHeight - heightDiff), (minuteHeight + heightDiff));
        // Set the vertex
        vertex(x, y);
        // Increment x dimension for noise
        xoff += 0.01;
    }
    // increment y dimension for noise
    yoff += 0.01;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    t = t + 0.001;
}

function drawSecond(currentSecond) {
    var r = 255 * noise(t - 20);
    var g = 255 * noise(t - 10) / 4;
    var b = 255 * noise(t - 35);
    fill(r, g, b, [50]);
    beginShape();
    var xoff = 0;
    var secondHeight = windowHeight - (windowHeight / 60 * currentSecond);
    var heightDiff = 20;
    // Iterate over horizontal pixels
    for (var x = 0; x <= width; x += 10) {
        var y = map(noise(xoff, yoff), 0, 0.5, (secondHeight - heightDiff), (secondHeight + heightDiff));
        // Set the vertex
        vertex(x, y);
        // Increment x dimension for noise
        xoff += 0.01;
    }
    // increment y dimension for noise
    yoff += 0.01;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    t = t + 0.001;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
