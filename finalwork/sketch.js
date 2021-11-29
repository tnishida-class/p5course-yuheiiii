// t: 実際に表示される文字、tt: 元に戻す用の文字、ct: "せいかい", wt: "ざんねん"
// cx: カードのx座標、stroke: 枠線の太さ、tx: 文字のx座標、rx:　結果の文字のx座標
let cards = [{t: "E", tt: "E", ct: "せ", wt: "ざ", cx: -300, stroke: 0, tx: -300, rx: -315, red:255, green: 255, blue: 255},
             {t: "7", tt: "7", ct: "い", wt: "ん", cx: -150, stroke: 0, tx: -150, rx: -165, red:255, green: 255, blue: 255},
             {t: "K", tt: "K", ct: "か", wt: "ね", cx: 0,    stroke: 0, tx: 0,    rx: -15,  red:255, green: 255, blue: 255},
             {t: "4", tt: "4", ct: "い", wt: "ん", cx: 150,  stroke: 0, tx: 150,  rx: 135,  red:255, green: 255, blue: 255}]

let cover;

function setup(){
  createCanvas(windowWidth, windowHeight);
  cover = windowHeight - 550;
}



function draw(){
  push();
  background(160, 192, 255);
  textAlign(CENTER);
  textSize(55);
  text("ウェイソンの4枚カード問題", width / 2, 80);
  fill(255);
  stroke(0, 0, 255);
  strokeWeight(3);
  rect((width / 2) -530, 120, 1050, 160);
  rect((width / 2) -530, 560, 1050, 220);
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(23);
  textWrap(CHAR)
  text("＜ 問題 ＞", (width / 2) -500, 155);
  text("テーブルの上にE, 7, K, 4と書かれた4枚のカードがある。カードの片面にはアルファベットが、もう片面には数字が書かれている。この時、「母音の裏面には、偶数が書かれている」という仮説が正しいか確かめたい。最低、どのカードをめくって調べればよいか選びなさい。", (width / 2) -500, 168, 1000);
  text("＜ 解説 ＞", (width / 2) -500, 595);
  text("正解は「E」と「7」であるが、多くの人が「7」ではなく、「4」を選んでしまう。今回の問題では、母音の裏面が偶数であればいいため、偶数の裏面が何であるかは関係ない。一方、奇数である「7」の裏面が母音の場合、「母音の裏面は偶数」という仮説が誤りとなるため、確認する必要がある。このように、人間には「自分の先入観や考えを肯定するために、都合の良い情報のみを集めて、反証を無視しようとする」傾向があり、これを確証バイアスという。",(width / 2) -500, 610, 1000);
  for(let i = 0; i < cards.length; i ++){
    card(cards[i].t, cards[i].cx, cards[i].stroke, cards[i].tx, cards[i].red, cards[i].green, cards[i].blue,);
  }
  fill(160, 192, 255);
  rect(0, 550, width, cover);
  pop();
}

// キーボードのタイプに反応する関数、選択したカードが赤くなる

function keyTyped(){
  if(key == "e"){cards[0].stroke = 5 - cards[0].stroke;}
  else if (key == "7") { cards[1].stroke = 5 - cards[1].stroke;}
  else if (key == "k") { cards[2].stroke = 5 - cards[2].stroke;}
  else if (key == "4") { cards[3].stroke = 5 - cards[3].stroke;}
  else if (key == " ") { cover = 0;}
}

// 正誤を確認し、結果を表示する関数

function answerCheck(){
   if(cards[0].stroke == 5 && cards[1].stroke == 5 && cards[2].stroke == 0 && cards[3].stroke == 0){
    for(let i = 0; i < cards.length; i++){
      let result = cards[i];
      cards[i].t = result.ct;
      cards[i].tx = result.rx;
      cards[i].stroke = 0;
      cards[i].red = 255;
      cards[i].green = 0;
      cards[i].blue = 0;
    }
  }else{
    for(let i = 0; i < cards.length; i++){
      let result = cards[i];
      cards[i].t = result.wt;
      cards[i].tx = result.rx;
      cards[i].stroke = 0;
      cards[i].red = 0;
      cards[i].green = 100;
      cards[i].blue = 150;
  }
 }
}

// 結果を表示したあとに元に戻す関数

function answerReset(){
  for(let i = 0; i < cards.length; i ++){
    let c = cards[i];
    cards[i].t = c.tt;
    cards[i].tx = c.cx;
    cards[i].stroke = 0
    cards[i].red = 255;
    cards[i].green = 255;
    cards[i].blue = 255;
  }
}

// エンターキーで正誤確認を実行・バックスペースキーでカードを元に戻す関数

function keyPressed(){
  if(keyCode == ENTER){answerCheck();}
  else if (keyCode == BACKSPACE) {answerReset();}
}

// カードを表示する関数

function card(t, x, r, tx, red, green, blue){
  fill(red, green, blue);
  stroke(255, 0, 0);
  strokeWeight(r);
  rect( (width / 2) + x, 320, 120, 200);
  fill(0);
  textSize(70);
  noStroke();
  text(t, (width / 2) + tx + 40, 450);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
