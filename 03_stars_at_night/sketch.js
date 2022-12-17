const size_x = 400;
const size_y = 400;
const alpha = 10;
const stars_count = 1000;
const noise_scale = 0.01;

let stars = [];

function setup() {
  createCanvas(size_x, size_y);

  for (let i = 0; i < stars_count; ++i) {
    stars.push(createVector(random(size_x), random(size_y)));
  }
}

function draw() {
  background(0, alpha);
  stroke(255);
  for (let i = 0; i < stars_count; ++i) {
    point(stars[i]);

    let n = noise(stars[i].x * noise_scale, stars[i].y * noise_scale);

    stars[i].x += sin(TAU * n);
    stars[i].y += cos(TAU * n);

    if (
      stars[i].y > size_y ||
      stars[i].y < 0 ||
      stars[i].x > size_x ||
      stars[i].x < 0
    ) {
      stars[i] = createVector(random(size_x), random(size_y));
    }
  }
}
