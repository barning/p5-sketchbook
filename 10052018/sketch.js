var colors = [
	"#ef5350",
	"#ab47bc",
	"#42a5f5",
	"#26c6da",
	"#26a69a",
	"#66bb6a",
	"#9ccc65",
	"#ff7043"
];
var previousMillis = 0;
var interval = 100;

var circle;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#eceff1');
	circle = new Polygon(windowWidth/2, windowHeight/2, 200, 200);
	circle.display();
}

// function draw() {
// 	currentMillis = millis();
// 	if(currentMillis - previousMillis > interval) {
// 		previousMillis = currentMillis;
// 		background('#eceff1');
// 		polygon(windowWidth/2, windowHeight/2, sin(frameCount * 0.01) * 200, 200);
// 	}
// }


function Polygon(x, y, radius, npoints) {

	this.x = x;
	this.y = y;
	this.radius = radius;
	this.points = npoints;

  this.angle = TWO_PI / this.points;
	this.sx;
	this.sy;

	this.display = function() {
		noFill();
		strokeWeight(2);
		stroke(random(colors));
		beginShape();
			for (var i = 0; i < TWO_PI; i += this.angle) {
				this.sx = x + cos(i) * this.radius;
				this.sy = y + sin(i) * this.radius;
				curveVertex(this.sx + randomGaussian(2,3), this.sy + randomGaussian(2,3));
			}
		endShape(CLOSE);
	};
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
