var ball,ball_move;
var paddle,paddleimage;


function preload() {
  ball_move = loadImage("ball.png");
  paddleimage = loadImage("paddle.png");
  
}


function setup() {
  createCanvas(400, 400);
  ball = createSprite(200,200,20,20);
  ball.addImage("ball",ball_move);
  paddle = createSprite(370,200,15,90);
  paddle.addImage("paddle",paddleimage);
  
  
  ball.velocityY = -3;
  ball.velocityX = -3;
  

}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites();
  
  
  paddle.setCollider("rectangle",0,0,20,95);
  
  ball.bounceOff(edges[2]);
  
  ball.bounceOff(edges[3]);
  
  ball.bounceOff(edges[0]);
  
  ball.bounceOff(paddle);
  
  paddle.collide(edges[2]);
  
  paddle.collide(edges[3]);
     
     

  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  if(ball.isTouching(paddle)){
      ball.velocityY = 3;
      ball.velocityX = 3;    
     }
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.velocityY = -5;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY = 5;
  }
  drawSprites();
  
}

function randomVelocity()
{
}
