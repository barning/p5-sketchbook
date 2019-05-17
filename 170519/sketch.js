function setup() {
	createCanvas(500, 500);
	var part = width / 20;
	colors(part);
}

function colors(part) {
	for (var i = 0; i < width; i++) {
		fill(random(100, 255), random(100, 255), random(100, 255));
		noStroke();
		translate(i,0);
		rect(0, 0, part, height);	
	}
}