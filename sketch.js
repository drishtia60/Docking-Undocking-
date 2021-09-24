
function preload(){
  bg1 = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym1 = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  move = loadAnimation("images/move1.png","images/move1.png","images/move.png","images/move.png");
  eat = loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat2.png","images/eat2.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  bath = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png","images/bath2.png");
}


function setup() {
  createCanvas(800,400);
  
 bg = createSprite(400,200,20,20);
 bg.addImage(bg1);
 bg.scale = 0.14

 ast = createSprite(400,200);
 ast.addAnimation("sleeping",sleep);
 ast.scale = 0.1


}

function draw() {
  background("black"); 
  edges = createEdgeSprites();
  ast.bounceOff(edges);
    if(keyDown("UP_ARROW")){
      ast.addAnimation("brushing",brush);
      ast.changeAnimation("brushing");
      ast.y = 250;
      ast.x = 450
      ast.velocityX = 0;
      ast.velocityY = 0;}
  
      if(keyDown("DOWN_ARROW")){
        ast.addAnimation("gymming",gym1);
        ast.changeAnimation("gymming")
        ast.y = 250;
        ast.x = 450
        ast.velocityX = 0;
        ast.velocityY = 0;
      }

      if(keyDown("a")){
        ast.addAnimation("gymming",gym2);
        ast.changeAnimation("gymming")
        ast.y = 250;
        ast.x = 450
        ast.velocityX = 0;
        ast.velocityY = 0;
      }

      if(keyDown("d")){
        ast.addAnimation("drinking",drink);
        ast.changeAnimation("drinking")
        ast.y = 250;
        ast.x = 450
        ast.velocityX = 0;
        ast.velocityY = 0;
      }
      
      if(keyDown("LEFT_ARROW")){
        ast.addAnimation("eating",eat);
        ast.changeAnimation("eating")
        ast.y = 250;
        ast.x = 450
        ast.velocityX = 0;
        ast.velocityY = 0;
      }
  
      if(keyDown("RIGHT_ARROW")){
        ast.addAnimation("bathing",bath);
        ast.changeAnimation("bathing")
        ast.y = 250;
        ast.x = 450
        ast.velocityX = 0;
        ast.velocityY = 0;
      }

      if(keyDown("m")){
        ast.addAnimation("moving",move);
        ast.changeAnimation("moving")
        ast.y = 250;
        ast.x = 450
        ast.velocityX = 0;
        ast.velocityY = 0;  
     }


      drawSprites();


  fill("white")
  text("Up Arrow = Brushing",100,310)
  text("Down Arrow = Gymming",100,330)
  text("Left Arrow = Eating",100,350)
  text("Right Arrow = Bathing",100,370)
  text("m key = Moving",100,390)
  }
