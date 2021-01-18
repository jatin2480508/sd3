var flag=0;
var frogselector=1;
function preload(){
  pondimage=loadImage("pondImage.jpg");
  frogImage=loadImage("frog.png");
  frogImage2=loadImage("frog Image.png");
  
}

function setup() {
  createCanvas(2000,800);
  pond1 = createSprite(1200, 500, 50, 50);
  pond1.addImage(pondimage);
  pond2 = createSprite(400,500,50,50);
  pond2.addImage(pondimage);

  frog1 = createSprite(1300,550,20,20);
  frog1.addImage(frogImage);
  frog1.scale=0.1;

  frog2 = createSprite(1100,550,20,20);
  frog2.addImage(frogImage);
  frog2.scale=0.1;
  
  

}

function draw() {
  background(255,255,255);
  
  if(flag===0){
    frog1.velocityY=-15;
    frog2.velocityY=-15;   

  }
  if(frog1.y<250){
    flag=1;
  }
  if(frog2.y<250){
    flag=2;
  }
if(flag===1){
  frog1.velocityY=15;
}
if(flag===2){
  frog2.velocityY=15;
}
if(frog1.y>550){
  flag=0;
}
if(frog2.y>550){
  flag=0;
}
if(frog1.y>500){
  frog1.visible=false;
}
else{
frog1.visible=true;
}
if(frog2.y>500){
  frog2.visible=false;
}
else{
frog2.visible=true;
}
  drawSprites();
}
function mouseDragged(){
  if(World.mouseX<frog1.x+50&&World.mouseX>frog1.x-50){
frogselector=1;
  }
  if(frogselector===1){
    frog1.x=World.mouseX;
    frog1.y=World.mouseY; 
  }
  

  if(World.mouseX<frog2.x+50&&World.mouseX>frog2.x-50){
    frogselector=2; 
  }
  if(frogselector===2){
    frog2.x=World.mouseX;
    frog2.y=World.mouseY; 
  }


}
