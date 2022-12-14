let minYchange = 0; //these two ranges determine line overlap and width
let maxYchange = 50;
let alph = 255; //out of 255
let rotStripe = 0; //rotation of each stripe; try 10 or 90;
let r, g, b;
let layers = 1;

let h_all = 1800;
let w_all = 1800;
let high_p = 400;
let widge_p = 400;

function setup() {
  createCanvas(h_all, w_all);
  background(10);
  stroke(255);
  angleMode(DEGREES);
  let end = high_p / 2 + 500; //where lines stop

  //starting height for each layer
  let y1 = 0;
  for (let i = 0; i < layers; i++) {
    if (i == 0) {
      y1 = -high_p / 2 - 300;
    } else {
      y1 = -high_p / 2 + (high_p / layers) * i;
    }

    let y2 = y1,
      y3 = y1,
      y4 = y1,
      y5 = y1,
      y6 = y1;
    let rotLayer = random(359); //layer rotation
    let rotThisStripe = 0;

    while (
      (y1 < end) &
      (y2 < end) &
      (y3 < end) &
      (y4 < end) &
      (y5 < end) &
      (y6 < end) &
      (-maxYchange < minYchange)
    ) {
      y1 += random(minYchange, maxYchange);
      y2 += random(minYchange, maxYchange);
      y3 += random(minYchange, maxYchange);
      y4 += random(minYchange, maxYchange);
      y5 += random(minYchange, maxYchange);
      y6 += random(minYchange, maxYchange);
      r = random(256);
      g = random(256);
      b = random(256);
      noFill();
      // fill(r, g, b, alph);
      push();
      translate(w_all / 2, h_all / 2);
      // rotThisStripe += rotStripe; //rotating after each stripe
      rotThisStripe += 0.1;
      rotate(rotThisStripe + rotLayer);

      // rotate(90);
      let xStart = -widge_p / 2;
      beginShape();
      curveVertex(xStart - 300, high_p / 2 + 500);
      curveVertex(xStart - 300, y1);
      curveVertex(xStart + (widge_p / 5) * 1, y2);
      curveVertex(xStart + (widge_p / 5) * 2, y3);
      curveVertex(xStart + (widge_p / 5) * 3, y4);
      curveVertex(xStart + (widge_p / 5) * 4, y5);
      curveVertex(widge_p / 2 + 300, y6);
      curveVertex(widge_p / 2 + 300, high_p / 2 + 500);
      endShape(CLOSE);

      rect(xStart - 310, y1, 10, 10);
      rect(xStart + (widge_p / 5) * 1, y2, 10, 10);
      rect(xStart + (widge_p / 5) * 2, y3, 10, 10);
      rect(xStart + (widge_p / 5) * 3, y4, 10, 10);
      rect(xStart + (widge_p / 5) * 4, y5, 10, 10);
      rect(xStart + (widge_p / 5) * 5, y6, 10, 10);

      rect(widge_p / 2 - 200, high_p / 2 - 200, 400, 400);
      pop();
    }
  }
}

function draw() {}
