let x = 0;
let y = 0;
let spacing = 10;

function setup() {
  createCanvas(400, 400);
  background(0);

  stroke(255);

  do {
    if (random(1) < 0.5) {
      line(x, y, x + spacing, y + spacing);
    } else {
      line(x, y + spacing, x + spacing, y + 0);
    }
    x = x + 10;

    if (x > width) {
      x = 0;
      y = y + spacing;
    }
  } while (y < height);
}

function draw() {}
