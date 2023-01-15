const ballDiameter = 24;
const ballRadius = ballDiameter / 2;
const ballSpeed = 6;
const paddleWidth = 60;
const paddleLeftCornerZone = 60/4;
const paddleMiddleZone = paddleWidth - paddleLeftCornerZone - paddleLeftCornerZone;
const paddleRightCornerZone = paddleMiddleZone + paddleLeftCornerZone;
const paddleHeight = 20;
const paddleCornerRadius = 10;
const paddleSpeed = 6;

let ballPosition;
let prevBallPosition;
let ballVector;
let paddlePosition;
let paddleVector;

function setup() {
  createCanvas(800, 800);

  setupBallAndPaddle();
}

function setupBallAndPaddle(){
  ballVector = p5.Vector.random2D().setMag(ballSpeed);
  ballPosition = createVector(width / 4, 50);

  paddlePosition = createVector(width / 2, height - 50);
  paddleVector = createVector(0,0);
}

function draw() {
  background(0);
 
  // ball

  ellipse(ballPosition.x, ballPosition.y, ballDiameter);

  // ball move
  prevBallPosition = ballPosition.copy();  
  if(true || mouseIsPressed){
    ballPosition.add(ballVector);
  }

  if(mouseIsPressed){
    ballVector.rotate(0.05);
    console.log(ballVector.x);    
  }

  // border check
  if(ballPosition.x > width - ballRadius || ballPosition.x < ballRadius) {
    ballVector.x = -ballVector.x;
    //console.log("..................")
  }
  if(ballPosition.y < ballRadius){
    ballVector.y = -ballVector.y;
  }
  if(ballPosition.y > height){
    reset();
  }

  // paddle
  rect(paddlePosition.x, paddlePosition.y, paddleWidth, paddleHeight, paddleCornerRadius, paddleCornerRadius);

  // paddle move
  paddlePosition.add(paddleVector);

  // paddle border check
  paddlePosition.x = constrain(paddlePosition.x, 0, width - paddleWidth);

  // handle collisions
  collisionCheckBallAgainstPaddleY();
  collisionCheckBallAgainstPaddleX();

  // input
  handleInput();
}

function reset(){
  setupBallAndPaddle();
}

function collisionCheckBallAgainstPaddleX(){

  // early return if ball is above paddle
  if(ballPosition.y + ballRadius < paddlePosition.y){
    return;
  }
  
  // special case...
  if(ballVector.x === 0){
    return
  }

  // if the ball is moving right, check for collision against left side of paddle
  if(ballVector.x > 0){
    let prevRightOfBall = prevBallPosition.x + ballRadius;
    let currRightfOfBall = ballPosition.x + ballRadius;

    if(prevRightOfBall < paddlePosition.x && currRightfOfBall >= paddlePosition.x){
      console.log("hit left side");
      ballVector.x = -ballVector.x;
      ballVector.y-= 2;
      ballVector.setMag(ballSpeed);
    }
  }
  else { // check against collision against right side of paddle
    
    let prevLeftOfBall = prevBallPosition.x - ballRadius;
    let currLeftfOfBall = ballPosition.x - ballRadius;
    
    if(prevLeftOfBall > paddlePosition.x + paddleWidth && currLeftfOfBall <= paddlePosition.x + paddleWidth){
      console.log("hit right side");
      ballVector.x = -ballVector.x;      
      ballVector.y-= 2;
      ballVector.setMag(ballSpeed);
    }
  }
}

function collisionCheckBallAgainstPaddleY(){

  // v0 
  // basic
  
  // if(ballPosition.y + ballRadius > paddlePosition.y && 
  //   ballPosition.x + ballRadius >= paddlePosition.x && 
  //   ballPosition.x - ballRadius <= paddlePosition.x + paddleWidth) {
  //   ballVector.y = -ballVector.y;
  // }
  
  // v1
  // basic with previous checks

  // early return if ball is left or right of paddle
  if(ballPosition.x + ballRadius < paddlePosition.x ||
       ballPosition.x - ballRadius > paddlePosition.x + paddleWidth){
         return;
       }

  // if in this frame, the ball crossed between above paddle.y -> below paddle.y, reverse y
  let prevBottomOfBall = prevBallPosition.y + ballRadius;
  let currBottomOfBall = ballPosition.y + ballRadius;

  if(prevBottomOfBall < paddlePosition.y && currBottomOfBall >= paddlePosition.y){
     ballVector.y = -ballVector.y;
  }

  // v2
  // three zones 1/4 - 1/2 - 1/4
  /*
  if(ballPosition.y + ballRadius > paddlePosition.y && 
      paddlePosition.x <= ballPosition.x && 
      ballPosition.x <= paddlePosition.x + paddleWidth) {
    ballVector.y = -ballVector.y;
    let overlapX = ballPosition.x - paddlePosition.x;
    let side = "";
    // let curBallHeading = ballVector.heading();
    // console.log(curBallHeading);
    if(overlapX > paddleRightCornerZone) {
      side = "right";
      ballVector.x += 2;
      ballVector.setMag(ballSpeed);
    }
    else if(overlapX > paddleLeftCornerZone){
      side = "middle";
    }
    else {
      side = "left";
      ballVector.x -= 2;
      ballVector.setMag(ballSpeed);
    }
    console.log(`${side}`)
    console.log(ballVector)
  }
  */
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