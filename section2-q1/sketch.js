// 小手調べ
function setup(){
  createCanvas(200, 200);
  for(let i = 0; i < 10; i++){
    if(i < 5){
      stroke(0, 0, 255);
    }else{
      stroke(255, 0, 0);
    }
    noFill();
    let x = 10 + i * 10;
    ellipse(60, 60, x);// BLANK[1]
  }
}
