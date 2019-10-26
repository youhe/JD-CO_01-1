var width = 800, // canvas の横幅
    height = 800, // canvas の縦幅
    canvas,
    context;

var agentCnt = 20, // Agent の数
    agents = []; // Agent インスタンスを格納する配列

var guiVal;

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

  // GUI生成
  var gui = new dat.GUI();
  guiVal = {
    bgColor: '#fff',
    color: '#060',
    alpha: 0.7,
    reset: function() {init()},
    range_vf: 0.14,
    range_rvf: 0.002,
  };

  var f0 = gui.addFolder('canvas');
  f0.open();
  f0.addColor(guiVal, 'bgColor');
  f0.add(guiVal, 'reset', 0, 1);

  var f1 = gui.addFolder('agent');
  f1.open();
  f1.addColor(guiVal, 'color');
  f1.add(guiVal, 'alpha', 0, 1);
  f1.add(guiVal, 'range_vf', 0.01, 1);
  f1.add(guiVal, 'range_rvf', 0.001, 0.01);

  init();  
  draw();

}

// 初期化関数
function init() {

  // #fff で canvasを初期化
  context.fillStyle = guiVal.bgColor;
  context.globalAlpha = 1;
  context.fillRect(0, 0, width, height);

  for(var i = 0; i < agentCnt; i++) {
    agents[i].init();
  }

}

// 描画関数
function draw() {

  // マイフレーム draw 関数を呼ぶ
  requestAnimationFrame(function() { draw(); });

  // 線の色を指定
  context.strokeStyle = guiVal.color;
  // 線の Alpha を指定
  context.globalAlpha = guiVal.alpha;
  // 線の描画処理
  for(var i = 0; i < agentCnt; i++) {
    agents[i].draw();
  }

}

window.addEventListener('load', set);
