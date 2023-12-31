let x, y, radius, angle, angularSpeed, amplitude;

function setup() {
    createCanvas(windowWidth, windowHeight);

    x = 0;
    y = 0;
    radius = 200;
    angle = 0;
    angularSpeed = 0.5;
    amplitude = 250;
}

function draw() {
    background(220);

    translate(width / 2, height / 2);

    // 1
    angle += angularSpeed;

    x = cos(radians(angle)) * radius;
    y = sin(radians(angle)) * amplitude;

    // 2
    for (let i = -300; i <= 300; i += 20) {
        let x = i;
        let cosx = cos(map(x, -250, 250, radians(0 + angle), radians(360 + angle)));
        let y = map(cosx, -1, 1, -amplitude, amplitude);
        fill(255);
        ellipse(x, y, 20);
    }

    // 점점 느려지게 
    angularSpeed *= 0.99;

    // 점점 진폭을 줄이기 
    amplitude *= 0.9995; 
}
