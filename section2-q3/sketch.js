function setup() {
  createCanvas(400, 400);
}

function draw(){

  const green = color(0, 255, 0);
  const red = color(255, 0, 0);
  const black = color(0);
  const cream = color(242, 212, 147);

  background(255);
  stroke(255);
  strokeWeight(3);

  const cx = width / 2; // 中心は (cx, cy)
  const cy = height / 2;
  const maxR = min(width, height); // 大きさは幅と高さのうち小さい方

  fill(black);
  ellipse(cx, cy, maxR);

  for (let i = 0; i < 20; i++) {
    let start = TWO_PI / 20 * i;
    let stop = TWO_PI / 20 * (i + 1);
    fill(i % 2 == 0 ? green : red);
    arc(cx, cy, 300, 300, start, stop, PIE);
  }

   for (let i = 0; i < 20; i++) {
      let start = TWO_PI / 20 * i;
      let stop = TWO_PI / 20 * (i + 1);
      fill(i % 2 == 0 ? cream : black);
      arc(cx, cy, 280, 280, start, stop, PIE);
 }

  for (let i = 0; i < 20; i++) {
      let start = TWO_PI / 20 * i;
      let stop = TWO_PI / 20 * (i + 1);
      fill(i % 2 == 0 ? green : red);
      arc(cx, cy, 200, 200, start, stop, PIE);
 }

 for (let i = 0; i < 20; i++) {
   let start = TWO_PI / 20 * i;
   let stop = TWO_PI / 20 * (i + 1);
   fill(i % 2 == 0 ? cream : black);
   arc(cx, cy, 180, 180, start, stop, PIE);
}

  fill(green);
  ellipse(cx, cy, 45);

  fill(red);
  ellipse(cx, cy, 25);

}
