function setup() {
  createCanvas(400, 400);

}

function draw() {
  noLoop();
background(32);
// Two keywords help us with the dimensions of our window.
print("width: " + width); // 400
print("height: " + height); // 400

// We can find the center of our window by dividing by 2.
print("center: (" + width / 2.0 + ", " + height / 2.0 + ")");

// If you know about the Rule of Thirds, you can quickly
// find those regions of the window.
stroke(204, 204, 204);
line(0, height/ 3.0, width, height/ 3.0);
line(0, height * 2 / 3.0, width, height * 2 / 3.0);
line(width / 3.0, 0, width / 3.0, height);
line(width * 2 / 3.0, 0, width * 2 / 3.0, height);

// Several functions also assist us with math calculations
// (notice that you can call functions inside of functions).
print("abs: " + abs(-10)); // The absolute value of -10 is 10.

// The square of 2 is 4.
print("sq: " + sq(2));
// The square-root of 9 is 3.
print("sqrt: " + sqrt(9));
// 3 ^ 4 = 3 * 3 * 3 * 3 = 81.
print("pow: " + pow(3, 4));

// Rounds 3.0154 down to 3.
print("round: " + round(3.0154));
// Rounds 3.9999 up to 4.
print("round: " + round(3.9999));
// No matter how small the decimal, the ceiling is 4.
print("ceil: " + ceil(3.0154));
// No matter how large the decimal, the floor is 3.
print("floor: " + floor(3.9999));

print("max: " + max(33, 10)); // 33
print("min: " + min(-30, 30)); // -30

// constrain(value, lowerBound, upperBound);
// This is useful to keep shapes within the bounds of the window.
print("constrain -40: " + constrain(-40, 0, width)); // 0
print("constrain 560: " + constrain(560, 0, height)); // 500

// norm(value, rangeLowerBound, rangeUpperBound);
// Short for normalize.
// Turns a value in a range into a value between 0 and 1.
print("norm: " + norm(50, 0, 100)); // 0.5

// map(value, originLowerBound, originUpperBound,
//            targetLowerBound, targetUpperBound);
// Converts a value from one range to the parallel value
// in another range. An application: I want to represent
// video game character's health, 650/999 HP, with a health
// bar that is 100 pixels long.
print("map: " + map(650, 0, 999, 0, 100)); // 65.06507

// dist(x1, y1, x2, y2);
// Calculates the distance between two points.
strokeWeight(2);
stroke(255, 0, 0);
line(0, 0, width, height);
print("red line distance: " + dist(0, 0, width, height));
stroke(0, 255, 0);
line(0, 0, width * 2 / 3.0, height);
print("green line distance: " + dist(0, 0, width * 2 / 3.0, height));
stroke(0, 0, 255);
line(0, 0, width / 3.0, height);
print("blue line distance: " + dist(0, 0, width / 3.0, height));
}

function mouseDragged(){
  resizeCanvas(mouseX, mouseY);
}
