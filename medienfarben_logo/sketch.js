var bubbles = [];
var images = [];
var ctx;
var url = 'colors.json';

function preload() {
  colors = loadJSON(url);
}

function setup() {
  ctx = createCanvas(3000 , 3000);
  noLoop();
}

function draw(){
  background(250);
  bubbles = [];
  for (var i=0; i<10; i++) {
    bubbles.push(new Bubble());
  }
  for (var i=0; i<bubbles.length; i++) {
    bubbles[i].display();
  }
  drawText();
}

function mousePressed() {
  redraw();
  save('myCanvas.jpg');
}

function drawText() {
	textAlign(LEFT);
	textStyle(BOLD);
	fill(250);
	textSize(width/4);
	textLeading(width/4 * 0.9);
	text('medien\nfarben', (width/2)/8, height/2 - 20);
}

function manageColor() {
  var masterLength = int(random(0, Object.keys(colors).length));
  var masterName = Object.keys(colors)[masterLength];
  var randomColor = int(random(0, Object.keys(colors)[masterLength].length))
  var colorNames = Object.values(colors[masterName]);
  var mainCol = colorNames[int(random(0,colorNames.length))];

  return(mainCol);
}

function Bubble() {
  this.diameter = random(width-300,width+300);
	this.x = random(this.diameter / 4,width - this.diameter / 4);
  this.y = random(this.diameter / 4,height - this.diameter / 4);
  this.speed = 10;
  this.mainCol = manageColor();

  this.display = function() {
		fill(this.mainCol);
		noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
};
