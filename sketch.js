var monkey , monkey_running;
var ground;
var banana ,bananaImage;
var obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;

var survivaltime = 0;


function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}


function setup() {
  
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.shapeColor = "green";
  ground.velocityX = -4;

  obstacleGroup = createGroup();
  FoodGroup = createGroup();
  
}


function draw() {
  
  background(255);
  
  ground.x = ground.width /2;  
 
  monkey.velocityY = monkey.velocityY + 0.8; 
  monkey.collide(ground);

  if(keyDown("space")&& monkey.y >= 100){
    monkey.velocityY = -12;
  }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:" + score,500,50);
  
  stroke("white");
  textSize(20);
  fill("black");
  survivaltime = Math.ceil( frameCount/frameRate());
  text("survival Time: "+ survivaltime, 100,50);
  
  food();
  obstacles();
  drawSprites();
  
}


function food (){
  
  if (frameCount % 80 === 0){
    banana = createSprite(200,200);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -6;
    banana.lifetime = 40;
    FoodGroup.add(banana);
  }
  
}


function obstacles(){
  
  if (frameCount % 300 === 0) {
    obstacle = createSprite(350,300);
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.3;
    obstacle.velocityX = -6;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  } 
  
}