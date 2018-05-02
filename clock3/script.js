function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(1);
}

function draw() {
    noStroke();
    var h = hour();
    var m = minute();
    var s = second();
    colorMode(RGB);
    background(Math.round(255 / 24 * h), Math.round(255 / 60 * m), Math.round(255 / 60 * s));
    document.querySelector(".rgb").innerHTML = ("rgb(" + Math.round(255 / 24 * h) + ", " + Math.round(255 / 60 * m) + ", " + Math.round(255 / 60 * s) + ")");

    h = formatNumString(h);
    m = formatNumString(m);
    s = formatNumString(s);

    hexString = '#' + h + m + s;
    document.querySelector(".hex").innerHTML = (hexString);
    var hex = color(hexString);
    fill(hex)
    rect(windowWidth / 3, 0, windowWidth / 3, windowHeight);

    hexString = '#' + h + m + s;
    document.querySelector(".hsb").innerHTML = (hexString);

    colorMode(HSB);
    fill(Math.round(360 / 24 * h), Math.round(100 / 60 * m), Math.round(100 / 60 * s));
    rect(windowWidth / 3 * 2, 0, windowWidth / 3 * 2, windowHeight);
    document.querySelector(".hsb").innerHTML = ("hsb(" + Math.round(360 / 24 * h) + ", " + Math.round(100 / 60 * m) + ", " + Math.round(100 / 60 * s) + ")");

}

function formatNumString(n) {
    if ((n + "").length == 1) {
        n = "0" + n
    }
    return n;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
