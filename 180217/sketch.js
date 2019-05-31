var diameter;
var angle = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	smooth();
	diameter =width;
	rectMode(CENTER);
	noFill();
}

function draw() {
	var d1 = 10 + (sin(angle) * diameter/2) + diameter/2;
	translate(width/2,height/2);
	rotate(radians(frameCount));
	stroke(random(150,255));
	rect(0, 0, d1, d1);

	angle += random(0.05);
}
