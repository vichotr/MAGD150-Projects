var flipFlopper =false; // default value is false



var deltaMouseX; // default value is 0.0
var deltaMouseY;
var r=0;
var g=0;
var b= 0;
var w = 30;
var h = 30;

function setup() {
  createCanvas(420, 420);
  background(32);
}


function draw() {
  // If we don't include this in draw, then nothing will be erased.
  // comment it out/in to see what happens.
  // background(32);

  // This increases the integers which represent a color channel
  // each frame. However, values over 255 are meaningless, so the
  // modulo % operator resets them to 0 if they get too big.

  fill(r, g, b);

  // Width and height of the ellipse increase in size until they
  // reach a third the height of the window, then reset to 0
  w = (w + 1) % (height / 3.5);
  h = (h + 1) % (height / 3.5);

  // mouseX and mouseY are special variables which track
  // the mouse position.
  ellipse(mouseX, mouseY, w, h);
  print("(" + mouseX + ", " + mouseY + ")");

  // Fill colors can get updated after the ellipse is drawn

  r = (r + 1) % 256;
  g = (g + 5) % 256;
  b = (b + 2) % 256;


  // pmouseX and pmouseY are the previous mouse position.
  // By subtracting pmouse from mouse you can get the change
  // in mouse position between frames.
  deltaMouseX = mouseX - pmouseX;
  deltaMouseY = mouseY - pmouseY;

  print("delta: (" + deltaMouseX + ", " + deltaMouseY + ")");

  flipFlopper = !flipFlopper;
  print("flippFlopper = " + flipFlopper);

}
