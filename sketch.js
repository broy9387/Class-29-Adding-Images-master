
var player;
var edges;
var score=0;
var wormGroup;

function preload(){

wormImage = loadImage("images/worm.png");
bgImage = loadImage("images/swampImg.png");
playerImage = loadImage("images/frog.png");

}

function setup() {
createCanvas(1000,600);

bg = createSprite(500,300); 
bg.addImage(bgImage);
bg.scale=6;
player = createSprite(40,550,30,30); 
player.addImage(playerImage);
player.scale=0.5;
wormGroup= new Group();
}

function draw() {
//background("black");  
stroke("cyan")

player.x= mouseX;
player.y= mouseY;

generateWorms();

for(var i = 0 ; i< (wormGroup).length ;i++){
  var temp = (wormGroup).get(i) ;
  if (player.isTouching(temp)) {
    score++;
    temp.destroy();
    temp=null;
    }   
  }

  drawSprites();
  textSize(20);
  text("Worms destroyed: "+score,350,50);
}

function generateWorms(){
if(frameCount % 20===0){
  console.log(frameCount);
  var worm = createSprite(random(40,380),random(290,380),40,5);
 worm.addImage(wormImage);
  worm.scale = random(0.1,0.3);

  worm.velocityX=random(-6,6);
  worm.velocityY=random(-6,6);
  wormGroup.add(worm);
  }
}