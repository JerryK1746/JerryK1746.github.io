const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
tx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);


c

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
}

class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }
}

const testBall = new Ball(50, 100, 4, 4, "blue", 10);

testBall.x;
testBall.size;
testBall.color;
testBall.draw();

