
var wall,bullet;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  

  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  wall = createSprite(1200, 200,thickness, height/2);
  wall.shapeColor=(80,80,80);


  bullet = createSprite(50,200,10,5);
  bullet.shapeColor = "blue";
  bullet.velocityX = speed;


}

function draw() {
  background(0,0,0);  

if(hasCollided(bullet,wall)) {

  bullet.velocityX = 0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if (damage>10){
    bullet.shapeColor = "red";
    text("wall is not strong",800,200);
  }
  
  if (damage<10){
    bullet.shapeColor = "green";
    text("wall is strong",800,200);
  }
}




  drawSprites();
}


function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else {
    return false;
  }
}