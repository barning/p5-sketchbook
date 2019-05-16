function setup() {
	createCanvas(500, 500);
	drawLines();
}

function mousePressed() {
	drawLines();
}

function drawLines() {
	background(255);
	var lpX = width / 2;
	var lpY = height / 2;

	for (let i = 0; i < 50; i++) {
		npX = random(lpX - 50, lpX + 50);
		npY = random(lpY - 50, lpY + 50);

		if (npX >= width) npX = npX * -1;
		if (npY >= height) npY = npY * -1;

		line(lpX, lpY, npX, npY);

		lpX = npX;
		lpY = npY;
	}
}