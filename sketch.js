var score = 0;
var ocean;
var oceanImg;
var radar;
var radarImg;
var crosshair;
var crosshairImg;
var dot1,dot2,dot3;
var dot1Img;
var bluedot;
var bluedotImg;
var destroyer1,destroyer2,destroyer3,destroyer4,destroyer5;
var destroyer1Img,destroyer2Img,destroyer3Img,destroyer4Img,destroyer5Img;
var torpedoGroup;


function preload(){

  destroyer1Img = loadImage("Destroyer1.png");
  destroyer2Img = loadImage("Destroyer2.png");
  destroyer3Img = loadImage("Destroyer3.png");
  destroyer4Img = loadImage("Destroyer4.png");
  destroyer5Img = loadImage("Destroyer5.png");
  oceanImg = loadImage("OceanBackground.png");
  radarImg = loadImage("Radar.jpg");
  crosshairImg = loadImage("Crosshair.jpg");
  dot1Img = loadImage("Dot1.jpg");
  bluedotImg = loadImage("Bluedot.jpg");
 
}

function setup() {
  createCanvas(1515,800);

  destroyer5 = createSprite(240,290);
  destroyer5.addImage("destroyer5",destroyer5Img);
  destroyer5.scale = 0.3;
  destroyer5.setCollider("rectangle",0,0,800,300);
  destroyer5.debug = false;

  destroyer2 = createSprite(1400,560);
  destroyer2.addImage("destroyer2",destroyer2Img);
  destroyer2.scale = 0.3; 
  destroyer2.setCollider("rectangle",0,0,700,150);  
  destroyer2.debug = false; 
  
  destroyer3 = createSprite(1420,100);
  destroyer3.addImage("destroyer3",destroyer3Img);
  destroyer3.scale = 0.2;
  destroyer3.setCollider("rectangle",0,0,600,300);
  destroyer3.debug = false; 

  destroyer4 = createSprite(1420,300);
  destroyer4.addImage("destroyer4",destroyer4Img);
  destroyer4.scale = 0.2;
  destroyer4.setCollider("rectangle",0,0,600,350);
  destroyer4.debug = false;

  radar = createSprite(210,710,390,160);
  radar.addImage("radar",radarImg);
  radar.scale = 0.4;
  
  crosshair = createSprite(460,710);
  crosshair.addImage("crosshair",crosshairImg);
  crosshair.scale = 0.082;
  
  dot1 = createSprite(265,665);
  dot1.addImage("dot1",dot1Img);
  dot1.scale = 0.027;

  dot2 = createSprite(275,710);
  dot2.addImage("dot1",dot1Img);
  dot2.scale = 0.027;

  dot3 = createSprite(275,750);
  dot3.addImage("dot1",dot1Img);
  dot3.scale = 0.027;

  bluedot = createSprite(210,710);
  bluedot.addImage("bluedot",bluedotImg);
  bluedot.scale = 0.036;

  torpedoGroup = new Group();

}

function draw() {

   background(oceanImg);

   crosshair.y = mouseY;
   crosshair.x = mouseX;

   if (keyDown("space")) {
    createTorpedo(destroyer5.x);
  }

  if (torpedoGroup.collide(destroyer2)) {
    destroyer2.destroy();
    torpedoGroup.destroyEach();
    score = score + 2;
  } else if (torpedoGroup.collide(destroyer3)) {
    destroyer3.destroy();
    torpedoGroup.destroyEach();
    score = score + 4;
  } else if (torpedoGroup.collide(destroyer4)) {
    destroyer4.destroy();
    torpedoGroup.destroyEach(); 
    score = score + 6;
  } 

   //adding velocities to destroyer5

  if(keyDown("up")){
    destroyer5.velocityX = 0;
    destroyer5.velocityY = -0.61;
  }

  if(keyDown("down")){
    destroyer5.velocityX = 0;
    destroyer5.velocityY = 0.61;
  }

  if(keyDown("left")){
    destroyer5.velocityX = -0.62;
    destroyer5.velocityY = 0;
  }

  if(keyDown("right")){
    destroyer5.velocityX = 0.62;
    destroyer5.velocityY = 0;
  }

  //adding velocities to destroyers2,3,4 
  destroyer2.velocityX = -0.62;
  
  destroyer3.velocityX = -0.62;
  
  destroyer4.velocityX = -0.52;

  //if destroyers collide they get destroyed
  if(destroyer5.collide(destroyer2)){
    destroyer5.destroy();
    destroyer2.destroy();
    dot1.destroy();
    dot2.destroy();
    dot3.destroy();
  }

  if(destroyer5.collide(destroyer3)){
    destroyer5.destroy();
    destroyer3.destroy();
    dot1.destroy();
    dot2.destroy();
    dot3.destroy();
  }

  if(destroyer5.collide(destroyer4)){
    destroyer5.destroy();
    destroyer4.destroy();
    dot1.destroy();
    dot2.destroy();
    dot3.destroy();
  }

  //adding velocities to the dots
  dot1.velocityX = -0.03;
  dot1.velocityY = 0;

  dot2.velocityX = -0.03;

  dot3.velocityX = -0.04;
  dot3.velocityY = -0;

  //syncing blue dot with the player ship 
  if(keyDown("up")){
    bluedot.velocityX = 0;
    bluedot.velocityY = -0.4;
  }
  if(keyDown("down")){
    bluedot.velocityX = 0;
    bluedot.velocityY = 0.04;
  }

  if(keyDown("left")){
    bluedot.velocityX = -0.04;
    bluedot.velocityY = 0;
  }

  if(keyDown("right")){
    bluedot.velocityX = 0.04;
    bluedot.velocityY = 0;
  }

  //when dots collide they get destroyed
  if(bluedot.collide(dot1)){
    bluedot.destroy();
    dot1.destroy();
  }

  if(bluedot.collide(dot2)){
    bluedot.destroy();
    dot2.destroy();
  }

  if(bluedot.collide(dot3)){
    bluedot.destroy();
    dot3.destroy();
  }
   
drawSprites();

}

function createTorpedo(x) {
  var torpedo = createSprite(240,300, 5, 10);
  torpedo.y = 360;
  torpedo.x = x;                                           
  torpedo.shapeColor = rgb(99, 31, 14);
  torpedo.velocityX = 4;
  torpedo.lifetime = 1000;
  torpedoGroup.add(torpedo);
}

