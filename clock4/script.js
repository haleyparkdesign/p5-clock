function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(20);
}

function draw() {
    var radius = int(min(width, height) / 2);
    background(0);
    translate(width / 2, height / 2);
    noFill();
    stroke(40);
    strokeWeight(1);

    // draw orbits
    for (var i = 0; i < windowWidth * 1.5; i += 100) {
        ellipse(0, 0, i);
    }

    // Draw the sun
    fill("rgb(240, 101, 39)");
    noStroke();
    ellipse(0, 0, 110, 110);

    // subtract HALF_PI to make them start at the top
    var s = map(millis()/1000, 0, 60, 0, TWO_PI) - HALF_PI;
    var m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
    var h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

    //draw hour blob
    fill("rgb(236, 224, 255)");
    ellipse(cos(h) * radius/1.15, sin(h) * radius/1.15, 60);

    //draw minute blob
    fill("rgb(80, 255, 208)");
    ellipse(cos(m) * radius/1.6, sin(m) * radius/1.6, 30);

    //draw second blob
    fill("rgb(80, 168, 255)");
    ellipse(cos(s) * radius/2.68, sin(s) * radius/2.68, 15);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
