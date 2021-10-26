// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;
let minus;
let x;
let y;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
  size = 40;
  x = width / 2;
  y = height / 2;
}

function draw(){
  background(160, 192, 255);
  // count = (count + 1) % cycle;
  // BLANK[1]

  ellipse(x, y, size);

  if(mouseIsPressed){
   minus = 3;
 } else {
  minus = 1;
 }

  if(size <= 50){
    size += 30;
  } else if(size > 50) {
    size -= minus;
  }

  if(keyIsDown(LEFT_ARROW)){ x -= 2; }
  if(keyIsDown(RIGHT_ARROW)){ x += 2; }

}
