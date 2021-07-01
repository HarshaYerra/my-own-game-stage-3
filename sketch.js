var bird, bird_flying;
var bgSprite;

//game state values start, play, end
var gameState = "start"

function preload(){
 bird_flying=loadAnimation("images/tile000.png","images/tile001.png","images/tile002.png","images/tile003.png","images/tile004.png", "images/tile006.png", "images/tile007.png", "images/tile008.png", "images/tile009.png", "images/tile010.png","images/tile012.png", "images/tile013.png", "images/tile014.png","images/tile015.png" )
 
  bgImg=loadImage("images/bgimg2.jpg")

  //3) lod images of cars, vehicles
}

function setup() {
  
  //create a canvas
  createCanvas(windowWidth, windowHeight)

  bgSprite = createSprite(width/2, height/2)
  bgSprite.addImage("background", bgImg)
  bgSprite.scale=0.6
  bgSprite.velocityX=-3
  
  bgSprite.x = width/2

  bird = createSprite(100, 200, 50, 50)
  bird.addAnimation("fly", bird_flying)
  bird.scale=0.7

  vehicleGroup = createGroup();
}

function draw() {
  //set background color
  background("blue");
  drawSprites();

  //reset condition
  if(bgSprite.x<0){
    bgSprite.x = width/2
  }
  //add gravity
  //bird.velocityY = bird.velocityY + 0.3
  
  spawnVehicles();
}
function keyPressed(){
  if(keyCode===32){
    bird.velocityY=-5
  }
}
//1) spawn drones../

function spawnVehicles(){
  if  (frameCount % Math.round(random(100, 300)) === 0){
  vehicleSprite = createSprite(width +100, height - 30, 30, 30)
  vehicleSprite.velocityX = -2;
  var rand = Math.round(random(1,4));
 /*2) switch(rand){
    case 1: vehicleSprite.addImage(car)
            break;
    case 2: vehicleSprite.addImage(scooter)
            break;
    case 3: vehicleSprite.addImage(truck)
            break;
    case 4: vehicleSprite.addImage(cycle)
            break;
    default: break;
  }*/

  vehicleSprite.lifetime = 1000;

  vehicleGroup.add(vehicleSprite);
  }
}

// spawn transformers

  
  

    
  
