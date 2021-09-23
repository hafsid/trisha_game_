var edges;
var back,backImg;

function preload(){

  backImg = loadImage("images/back.jpg")


}

function setup(){
  createCanvas(600,550)
  
  back = createSprite(100,200);
  back.addImage("back",backImg)
  back.scale = 3
 

  edges = createEdgeSprites();
 
}

function draw(){
  background("lightgray")

  back.velocityX = -2;
  if(back.x <0){
    back.x = back.width/2
  }
 
  
  drawSprites();
}
