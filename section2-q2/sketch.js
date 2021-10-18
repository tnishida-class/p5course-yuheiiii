// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      let sum = i + j;
      fill(sum % 2 == 0? 255 : 100)// BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      rect(i * size, j * size, size, size)
      if(j < 3 && sum % 2 != 0){
        fill(196, 0, 0);
      }else if (j < 5) {
        noFill();
      }else if(j < 8 && sum % 2 != 0){
        fill(0);
      }
      ellipse(i * size + 12, j * size + 12, size - 5);
    }
  }
}
