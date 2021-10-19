// 練習問題：神戸市のマーク
function setup(){
  createCanvas(400, 200);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  stroke(46,139,87);
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(72, 100, 100, 100, QUARTER_PI * 5, QUARTER_PI * 5 + PI);
  // BLANK[1]

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);

  noStroke();
  fill(blue);
  ellipse(300, 100, 150);
  fill(255);
  ellipse(290, 90, 140);
  fill(green);
  ellipse(290, 90, 130);
  fill(255);
  ellipse(288, 98, 122);
  fill(gray);
  textSize(35);
  textFont("serif");
  text("KOBE", 238, 95);
  fill(gray);
  textSize(13);
  textFont("serif");
  text("UNIVERSITY", 262, 113);
}
