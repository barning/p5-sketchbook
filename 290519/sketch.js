var pointArray = [];
function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(255);

	textStyle(BOLD);
	text('Click on canvas to create a shape', 10, 20);

	stroke('#3700B3');

	beginShape();
	 for (var i = 0; i < pointArray.length; i++) {
		 var pointX = pointArray[i].x;
		 var pointY = pointArray[i].y;
		 vertex(pointX, pointY)
	 }
	endShape(CLOSE);
}

function mousePressed() {
	var newpoint = createVector(mouseX, mouseY);
	append(pointArray, newpoint);
}
