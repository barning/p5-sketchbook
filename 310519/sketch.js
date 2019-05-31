var r = 0;
var grid = 10;
function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(255);
	for (let i = 0; i < 5; i++) {
		var theGrid = width / grid;
		translate(theGrid, 20);
		drawCircle(random(0.05));	
	}
}

function drawCircle(randomness) {
	r += random(randomness);
	var d1 = 10 + (sin(r) * width/2) + width/2;
	ellipse(0, 0, d1);

	console.log(d1);
	
}