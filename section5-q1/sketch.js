// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", round(random(0,200)), round(random(0,200)), 0, 255);
}

function balloon(t, x, y, backgroundColor, textColor){
  push();
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(backgroundColor);
  rect(x, y, w + p * 2, h + p * 2);
  triangle(x + 10, y + h, x + 40, y + h, x + 5, y + h + 20);
  fill(textColor);
  text(t, x, y + 15);
  pop();
}
