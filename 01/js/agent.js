
class Agent {
  constructor() {

    // 現在の座標を格納する変数
    this.x = Math.random() * width;
    this.y = Math.random() * height;

    // １つ前の座標を格納する変数
    this.oX = this.x;
    this.oY = this.y;

    this.v = 0;
  	this.vf = 0;
  	this.r = 0;
  	this.rv = 0;
  	this.rvf = 0;

  }

  draw() {

    // 現在の座標を１つ前の座標に格納
    this.oX = this.x;
    this.oY = this.y;

    // 進行方向の速度を求める
    this.vf += Math.random() * 0.14 - 0.07;
  	this.vf *= 0.99;

  	this.v += this.vf;
  	this.v *= 0.95;

    // 進行方向の角度を求める
    this.rvf += Math.random() * 0.002 - 0.001;
  	this.rvf *= 0.99;

  	this.rv += this.rvf;
  	this.rv*=0.95;

  	this.r += this.rv;

    // 現在の座標を求める
  	var vx = Math.cos(this.r) * this.v;
  	var vy = Math.sin(this.r) * this.v;
  	this.x += vx;
  	this.y += vy;

    // 壁の衝突判定
    this.constrain();

    // 線の太さを決める
    context.lineWidth = this.vf * 12 + 1;

    // 線の描画処置
    context.beginPath();
    context.moveTo(this.oX, this.oY);
    context.lineTo(this.x, this.y);
    context.stroke();

  }

  // 壁の衝突判定
  constrain() {

    if (this.x < 0) {
      this.x = 0;
      this.r += Math.PI;
    } else if (width < this.x) {
      this.x = width;
      this.r += Math.PI;
    }

    if (this.y < 0) {
      this.y = 0;
      this.r += Math.PI;
    } else if (height < this.y) {
      this.y = height;
      this.r += Math.PI;
    }

  }

}

