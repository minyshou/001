let points = [[1,-3], [5,-4], [4,-3],[9,1],[7,2],[8,5],[5,4],[5,5],[3,4],[4,9],[2,7],[0, 10],[-2, 7], [-4, 8],[-3,3],[-5,6],[-5,4],[-8,5],[-7,2],[-9,1],[-4,-3],[-5,-4],[0,-3],[2,-7],[2,-6],[1,-3]]; //list資料，
let w = "TKUET"


function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
  //把points 內的值都*50
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
  }
}

function draw() {
  background(255);
  textSize(30)  //文字大小
  fill(0, 102, 153);  //設定顏色
  text(w,width /2 +120, height / 2);  //顯示文字
  translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
  scale(1, -1);  //上下翻轉
  //利用lerpColor()函數將線條的顏色設置為漸層色
  let color1 = color(255, 0, 0);
  let color2 = color(0, 0, 255);
  for (let i = 0; i < points.length-1; i++) {
    let lineColor = lerpColor(color1, color2, i/points.length);
    stroke(lineColor);
    line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
  }
  //最後一點與第一點的連線也使用漸層色
  let lineColor = lerpColor(color1, color2, (points.length-1)/points.length);
  stroke(lineColor);
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); 
}


