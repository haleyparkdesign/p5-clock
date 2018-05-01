function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(1);
}

function draw() {
    noStroke();
    var h = hour();
    var m = minute();
    var s = second();
    background(Math.round(255 / 24 * h), Math.round(255 / 60 * m), Math.round(255 / 60 * s));
    document.querySelector(".rgb").innerHTML = ("rgb(" + Math.round(255 / 24 * h) + ", " + Math.round(255 / 60 * m) + ", " + Math.round(255 / 60 * s) + ")");

    h = formatNumString(h);
    m = formatNumString(m);
    s = formatNumString(s);

    hexString = '#' + h + m + s;
    document.querySelector(".hex").innerHTML = (hexString);
    var c = color(hexString);
    fill(c)
    rect(windowWidth / 2, 0, windowWidth / 2, windowHeight);
}

function formatNumString(n) {
    if ((n + "").length == 1) {
        n = "0" + n
    }
    return n;
}
