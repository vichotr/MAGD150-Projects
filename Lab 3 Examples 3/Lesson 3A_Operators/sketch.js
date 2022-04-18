function setup() {
  createCanvas(400, 400);
  // You can think of Processing like a graphing calculator.
// As such, it can perform mathematical calculations.

// You can use the console (the black screen on the bottom of
// the window) to view the results of such calculations.

print(2 + 2); // 4
print(5 - 3); // 2
print(3 * 3); // 9
print(5 / 4); // 1.25

// What if you want the remainder that was dropped? Use the
// modulo operator.
print(8 / 3); // 2
print(8 % 3); // 2, so 8 / 3 = 2 + 2 / 3

// This is useful if you want to determine whether a number
// is even or odd.
print(4 % 2); // 0, therefore even.
print(5 % 2); // 1, therefore odd.

// You can also print Strings of characters to the console.
print("Hello world.");

// This is helpful when labeling the results of your
// calculations, but be careful: the plus sign here
// is used for concatenating Strings of characters
// ogether, not for adding numbers together.
print("The result is " + 4 % 2 + ", so 4 is even.");
print("The result of " + 4 + 4 + " is 8.");

// So you should use parentheses to group operations
print("The result of " + 4 + " + " + 4 + " is " + (4 + 4) + ".");

// PI is also fair game.
print("PI == " + PI); // 3.1415927
print("2 + TWO_PI == " + (2 + TWO_PI)); // 8.283186
print("10 - QUARTER_PI == " + (10 - QUARTER_PI)); // 9.2146015
print("3 * HALF_PI == " + (3 * HALF_PI)); // 4.712389
print("TAU == " + TAU);

// Keep Order of Operations (PEMDAS) in mind:
// Parentheses,
// Exponents,
// Multiplication,
// Division,
// Addition
// Subtraction.
print(6 + 2 * 5);
print((6 + 2) * 5);
}

function draw() {
  background(220);
}