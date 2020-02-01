var cat,dog,mouse;


function setup() {
  createCanvas(1200,600);

cat=createSprite(550,550,50,50);
cat.shapeColor="red";
}

function draw() {
  background(0,0,0);  
  createEdgeSprites();
  //cat.bounceOff(leftEdge);
cat.x=World.mouseX;
console.log(cat.x)
spawnDog();
spawnMouse();
  drawSprites();
}

