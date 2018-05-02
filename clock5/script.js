function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    frameRate(20);
}

function draw() {
    background(0);
    pieChart();
}

function pieChart() {
    var h = hour();
    var m = minute();
    var s = millis()/1000;

    var colorString = Math.round(255 / 24 * h) + ", " + Math.round(255 / 60 * m) + ", " + Math.round(255 / 60 * s);

    if (hour() > 12) {
        h = h - 12;
    }

    hourAngle = 360 / 12 * h;
    minuteAngle = 360 / 60 * m;
    secondAngle = 360 / 60 * s;

    //draw seconds
    fill("rgba(" + colorString + ", 0.3)");
    arc(width / 2, height / 2, 450, 450, PI + HALF_PI, radians(secondAngle), PIE);

    //draw minutes
    fill("rgba(" + colorString + ", 0.6)");
    arc(width / 2, height / 2, 300, 300, PI + HALF_PI, radians(minuteAngle) - HALF_PI, PIE);

    //draw hours
    fill("rgb(" + colorString + ")");
    arc(width / 2, height / 2, 150, 150, PI + HALF_PI, radians(hourAngle) - HALF_PI, PIE);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
