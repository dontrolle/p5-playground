const ballWidth = 25;
const ballBounce = ballWidth / 2;
const paddleWidth = 60;
const paddleHeight = 20;
const paddleCornerRadius = 60;
const paddleSpeed = 5;

let ballPosition;
let ballVector;
let paddlePosition;
let paddleVector;

function setup() {
  createCanvas(800, 800);

  ballVector = createVector(-3,-5);
  ballPosition = createVector(width / 4, 50);

  paddlePosition = createVector(width / 2, height - 50);
  paddleVector = createVector(0,0);
}

function draw() {
  background(0);
 
  // ball

  ellipse(ballPosition.x, ballPosition.y, ballWidth);
  ballPosition.add(ballVector);

  if(ballPosition.x > width - ballBounce || ballPosition.x < ballBounce) {
    ballVector.x = -ballVector.x;
  }
  if(ballPosition.y > height - ballBounce || ballPosition.y < ballBounce){
    ballVector.y = -ballVector.y;
  }

  // paddle
  rect(paddlePosition.x, paddlePosition.y, paddleWidth, paddleHeight, paddleCornerRadius, paddleCornerRadius);
  paddlePosition.add(paddleVector);

  if(paddlePosition.x > width - paddleWidth){
    paddlePosition.x = width - paddleWidth
  }
  if(paddlePosition.x < 0){
    paddlePosition.x = 0
  }

  // input
  handleInput();
}

function handleInput(){
  if(keyIsDown(LEFT_ARROW)){
    paddleVector.x = -paddleSpeed;
  }
  else if(keyIsDown(RIGHT_ARROW)){
    paddleVector.x = paddleSpeed;
  }
  else {
    paddleVector.x = 0;
  }
}