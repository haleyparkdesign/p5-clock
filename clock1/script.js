var yoff = 0.0; // 2nd dimension of perlin noise
var t = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    noStroke();
    blendMode(BLEND);
    background(0);

    var h = hour();
    blendMode(NORMAL);
    drawHour(h);

    blendMode(EXCLUSION);
    var m = minute();
    drawMinute(m);

    blendMode(DIFFERENCE);
    var s = millis() / 1000;
    drawSecond(s);
}

function drawHour(currentHour) {
    var r = 255 * noise(t / 2 + 10);
    var g = 255 * noise(t / 2) / 5;
    var b = 255 * noise(t / 2);
    fill(r, g, b);
    beginShape();
    var xoff = 0;
    var hourHeight = windowHeight - (windowHeight / 24 * currentHour);
    var heightDiff = 10;

    // Iterate over horizontal pixels
    for (var x = 0; x <= (width + 50); x += 10) {
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
    t += 0.001;
}

function drawMinute(currentMinute) {
    var r = 255 * noise(t - 10);
    var g = 255 * noise(t) / 3;
    var b = 255 * noise(t - 15);
    fill(r, g, b);
    beginShape();
    var xoff = 0;
    var minuteHeight = windowHeight - (windowHeight / 60 * currentMinute);
    var heightDiff = 20;
    // Iterate over horizontal pixels
    for (var x = 0; x <= (width + 50); x += 10) {
        var y = map(noise(xoff, yoff), 0, 0.5, (minuteHeight - heightDiff), (minuteHeight + heightDiff));
        // Set the vertex
        vertex(x, y);
        // Increment x dimension for noise
        xoff += 0.03;
    }
    // increment y dimension for noise
    yoff += 0.01;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    t = t + 0.002;
}

function drawSecond(currentSecond) {
    var r = 255 * noise(t - 20);
    var g = 255 * noise(t - 10) / 4;
    var b = 255 * noise(t - 35);
    fill(r, g, b);
    beginShape();
    var xoff = 0;
    var secondHeight = windowHeight - (windowHeight / 60 * currentSecond);
    var heightDiff = 30;
    // Iterate over horizontal pixels
    for (var x = 0; x <= (width + 50); x += 10) {
        var y = map(noise(xoff, yoff), 0, 0.5, (secondHeight - heightDiff), (secondHeight + heightDiff));
        // Set the vertex
        vertex(x, y);
        // Increment x dimension for noise
        xoff += 0.05;
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
