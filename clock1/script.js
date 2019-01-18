var yoff = 0,
    t = 0;

function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    noStroke(), blendMode(BLEND), background(0);
    var e = hour();
    blendMode(NORMAL), drawHour(e), blendMode(EXCLUSION);
    var i = minute();
    drawMinute(i), blendMode(DIFFERENCE);
    var t = new Date,
        n = (t.getSeconds() + t.getMilliseconds() / 1e3).toFixed(3);
    drawSecond(n), console.log(e + ", " + i + ", " + n)
}

function drawHour(e) {
    var i = 255 * noise(t / 2 + 10),
        n = 255 * noise(t / 2) / 5,
        o = 255 * noise(t / 2);
    fill(i, n, o), beginShape();
    for (var d = 0, r = windowHeight - windowHeight / 24 * e, a = 0; a <= width + 50; a += 10) {
        var w = map(noise(d, yoff), 0, .5, r - 10, r + 10);
        vertex(a, w), d += .01
    }
    yoff += .001, vertex(width, height), vertex(0, height), endShape(CLOSE), t += .001
}

function drawMinute(e) {
    var i = 255 * noise(t - 10),
        n = 255 * noise(t) / 3,
        o = 255 * noise(t - 15);
    fill(i, n, o), beginShape();
    for (var d = 0, r = windowHeight - windowHeight / 60 * e, a = 0; a <= width + 50; a += 10) {
        var w = map(noise(d, yoff), 0, .5, r - 20, r + 20);
        vertex(a, w), d += .03
    }
    yoff += .01, vertex(width, height), vertex(0, height), endShape(CLOSE), t += .002
}

function drawSecond(e) {
    var i = 255 * noise(t - 20),
        n = 255 * noise(t - 10) / 4,
        o = 255 * noise(t - 35);
    fill(i, n, o), beginShape();
    for (var d = 0, r = windowHeight - windowHeight / 60 * e, a = 0; a <= width + 50; a += 10) {
        var w = map(noise(d, yoff), 0, .5, r - 30, r + 30);
        vertex(a, w), d += .02
    }
    yoff += .01, vertex(width, height), vertex(0, height), endShape(CLOSE), t += .001
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
