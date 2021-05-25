
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

var ground;

var PLAY = 1;
var END = 0;
var gameState = 1;

var SurvivalTime;

SurvivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(500,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  
  
  ground = createSprite(250,355,1000,20);
  ground.velocityX = -5;
  ground.x=ground.width/2;  
  
  Banana1Group = createGroup();
  obsacaleGroup = createGroup();
  
}


function draw() {
  background("lightgrey");
  
  fill("black");
  textSize(20);
  text("SurvivalTime: "+ SurvivalTime, 150,50);
  
  if(obsacaleGroup.isTouching(monkey)) {
      gameState = END;
      stroke("yellow");
      fill("red");
      textSize("50");
      text("GameOver",200,200);
      
    }

  
  
    if(gameState === PLAY) {
      
      
    SurvivalTime = SurvivalTime + Math.round(frameCount/80);
    
      
     if (ground.x < 0){
      ground.x = ground.width/2;
    }
 
  if(keyDown("space")&& monkey.y >= 310) {
        monkey.velocityY = -12; 
    
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
    
  monkey.collide(ground);
      
      if (frameCount % 150 === 0){
    var Banana = createSprite(400,215,10,40);    

    Banana.velocityX = -3;
    
    Banana.addImage("Banana",bananaImage);
 
    Banana.scale = 0.1;  
  
    Banana.lifetime = 100
        
    Banana1Group.add(Banana);  
        
    if (frameCount % 300 === 0){
    var Obstacle = createSprite(400,325,10,40);    

    Obstacle.velocityX = -3;
    
    Obstacle.addImage("Obstacle",obstacleImage);
 
    Obstacle.scale = 0.1;  
  
    Obstacle.lifetime = 150
    
    obsacaleGroup.add(Obstacle);      
      
}
      
    }
  
  else if (gameState === END) {
    
    
    
    
    
  }
  
  
  drawSprites();
}
}