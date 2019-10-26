var width = 800, // canvas の横幅
    height = 800, // canvas の縦幅
    canvas,
    context;

var agentCnt = 1, // Agent の数
    agents = []; // Agent インスタンスを格納する配列

function set() {

  // canvas を生成
  canvas = document.createElement('canvas');
  // body に canvas を追加
  document.body.appendChild(canvas);

  // コンテキストを所得
  context = canvas.getContext('2d');
  // 縦横のサイズを指定
  context.canvas.width = width;
  context.canvas.height = height;

  // Agent インスタンスを生成
  for (var i = 0; i < agentCnt; i++) {
    agents[i] = new Agent();
  }

  init();  
  draw();

}

// 初期化関数
function init() {

  // #fff で canvasを初期化
  context.fillStyle = '#fff';
  context.globalAlpha = 1;
  context.fillRect(0, 0, width, height);

}

// 描画関数
function draw() {

  // マイフレーム draw 関数を呼ぶ
  requestAnimationFrame(function() { draw(); });

  // 線の色を指定
  context.strokeStyle = '#060';
  // 線の Alpha を指定
  context.globalAlpha = .7;
  // 線の描画処理
  for(var i = 0; i < agentCnt; i++) {
    agents[i].draw();
  }

}

window.addEventListener('load', set);
