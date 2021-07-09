var bg;
var launcher1,launcher2,launcher3,launcher4;
var sprite;
var loncho;
var launcha;
var hasDocked=false;
function setup() {
  createCanvas(800,400);
  sprite = createSprite(330,315,100,100);
  sprite.addImage(launcher1);
  sprite.scale = 0.25;
  launcha = createSprite(400,200,100,100);
  launcha.addImage(loncho)
}
function preload(){
bg = loadImage("Docking-undocking/spacebg.jpg")
launcher1 = loadImage("Docking-undocking/spacecraft1.png")
launcher2 = loadImage("Docking-undocking/spacecraft2.png")
launcher3 = loadImage("Docking-undocking/spacecraft3.png")
launcher4 = loadImage("Docking-undocking/spacecraft4.png")
loncho=loadImage("Docking-undocking/iss.png")
}
function draw() {
  background(bg);  
  if(!hasDocked){
    sprite.x=sprite.x+random(-1,1)
  }
  if(sprite.y <= (launcha.y+90) && sprite.x <= (launcha.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }
  drawSprites();



if(keyDown(RIGHT_ARROW)){
	sprite.x=sprite.x+10
  sprite.addImage(launcher4);
	
}
if(keyDown(LEFT_ARROW)){
	sprite.x=sprite.x-10
  sprite.addImage(launcher3);
	
}
if(keyDown(DOWN_ARROW)){
  sprite.addImage(launcher2);
	sprite.y=sprite.y+10
}
if(keyDown(UP_ARROW)){
  sprite.y=sprite.y-10
}
}
