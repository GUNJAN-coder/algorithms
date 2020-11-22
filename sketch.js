
var movingrect,fixedrect,gameobject2,gameobject1;
function setup() {
  createCanvas(800,400);
 movingrect = createSprite(400, 200, 80, 30);
 movingrect.shapeColor = "green";
 fixedrect = createSprite(200, 200, 50, 80);
 fixedrect.shapeColor = "green";
gameobject1 = createSprite(200, 100, 50, 50);
gameobject1.shapeColor = "green";
gameobject2= createSprite(300, 100, 50, 50);
gameobject2.shapeColor = "green";

fixedrect.velocityY =-5;
gameobject2.velocityY =5;


}

function draw() {
  background(255,255,255);  
movingrect.x = World.mouseX ; 
movingrect.y = World.mouseY ; 
 console.log( movingrect.x - fixedrect.x )
if ( isTouching(movingrect,gameobject1) ) {
movingrect.shapeColor = "red";
gameobject1.shapeColor = "red";

} else {
  movingrect.shapeColor = "green";
gameobject1.shapeColor = "green";
}

bounceoff( gameobject2,fixedrect);
  drawSprites();
}
