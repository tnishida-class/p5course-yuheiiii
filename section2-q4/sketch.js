// ギリシャ国旗
function setup() {
  createCanvas(270, 180);
}
  // noStroke();
function draw(){
  const blue = color(0, 51, 160);
  background(255);

  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
    if(i % 2 == 0){
      fill(blue);
    }else{
      fill(255);
    }// BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
    rect(0, i * d, width, (i + 1) * d);
  }

  fill(blue);
  let size = d * 5;
  rect(0, 0, size, size);

  noStroke();
  fill(255);
  rect(40, 0, size / 5, size)// BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
  rect(0, 40, size, size / 5)
 }
