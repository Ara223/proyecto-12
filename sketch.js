var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var bomba;
var bombaImg;
var rand;
var moneda;
var monedaImg;
var score = 0;
var vida = 0;
var heart, heart1, heart2, heart3;
var heartImg;
var ra1, ra2, ra3, ra4, ra5, ra6;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("jake1.png", "jake2.png", "jake3.png", "jake4.png", "jake5.png");
bombaImg = loadImage("bomb.png");
monedaImg = loadImage("coin.png");
heartImg = loadImage("sprite_0.png");

}

function setup(){
  
  createCanvas(400,700);
  path = createSprite(200,350,10,10);
  path.addImage("ap", pathImg)
path.velocityY = 4;
path.scale=1.4;

heart = createSprite(50,50,10,10);
heart.addImage("pu", heartImg);
heart.scale = 0.08;

heart1 = createSprite(100,50,10,10);
heart1.addImage("pu", heartImg);
heart1.scale = 0.08;

heart2 = createSprite(150,50,10,10);
heart2.addImage("pu", heartImg);
heart2.scale = 0.08;

heart3 = createSprite(200,50,10,10);
heart3.addImage("pu", heartImg);
heart3.scale = 0.08;


ra1 = createSprite(115, 550, 35, 20);
ra2 = createSprite(150, 550, 35, 20);
ra3 = createSprite(185, 550, 35, 20);
ra4 = createSprite(220, 550, 35, 20);
ra5 = createSprite(255, 550, 35, 20);
ra6 = createSprite(290, 550, 35, 20);

boy = createSprite(200,380,10,70);
boy.addAnimation("pa", boyImg)
boy.scale=0.8;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,50,800);
leftBoundary.visible = false;

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,50,800);
rightBoundary.visible = false;


bomba = createSprite(600, 0, 5, 5);
moneda = createSprite(600, 0, 5, 5);

}

function draw() {
  background(0);
  path.velocityY = 4;

  if(boy.isTouching(bomba)){
    boy.velocityY= 0;
    boy.velocityX= 0;
    bomba.destroy();
    vida = vida + 1  
  }

  if(vida == 1) {
    heart3.destroy();
} 

if(vida == 2) {
  heart2.destroy();
} 

if(vida == 3) {
  heart1.destroy();
} 

if(vida == 4) {
  heart.destroy();
} 


  if(boy.isTouching(moneda)){
    moneda.destroy();
    score=score + 1
  }

  if((score == 1) || (score == 2) || (score == 3) || (score == 4) || (score == 5) || (score == 6)) {
    switch(score){
      case 1:
        score == 1
        ra1. shapeColor = "red"
      break;
      case 2:
        score == 2
        ra2. shapeColor = "red"
        break;
      case 3:
        score == 3
        ra3. shapeColor = "red"
        break;
      case 4:
        score == 4
        ra4. shapeColor = "red"
        break;
      case 5:
        score == 4
        ra5. shapeColor = "red"
        break;
      case 6:
        score == 4
        ra6. shapeColor = "red"
        break;
      default: break;
    }
    
  }
 
 
  // boy moviéndose en el eje X con el mouse
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/3;
  }
 
  if(frameCount %500 === 0) {
    bomba = createSprite(200, 50, 10, 10);
    bomba.velocityY= 4
    bomba.addImage("pe", bombaImg);
    rand = Math.round(random(1,100));
    bomba.scale= 0.15;
    bomba.lifetime = 150;
  }

  if(frameCount %300 === 0) {
    moneda = createSprite(200, 50, 10, 10);
    moneda.velocityY= 5
    moneda.addImage("po", monedaImg);
    rand = Math.round(random(1,100));
    moneda.scale= 0.5;
    moneda.lifetime = 150;
  }

  if(frameCount %200 === 0) {
    bomba = createSprite(90, 50, 10, 10);
    bomba.velocityY= 4
    bomba.addImage("pe", bombaImg);
    rand = Math.round(random(1,100));
    bomba.scale= 0.15;
    bomba.lifetime = 150;
  }
  if(frameCount %350 === 0) {
    moneda = createSprite(90, 50, 10, 10);
    moneda.velocityY= 5
    moneda.addImage("po", monedaImg);
    rand = Math.round(random(1,100));
    moneda.scale= 0.5;
    moneda.lifetime = 150;
  }

  if(frameCount %400 === 0) {
    bomba = createSprite(330, 50, 10, 10);
    bomba.velocityY= 4
    bomba.addImage("pe", bombaImg);
    rand = Math.round(random(1,100));
    bomba.scale= 0.15;
    bomba.lifetime = 150;
  }

  if(frameCount %730 === 0) {
    moneda = createSprite(330, 50, 10, 10);
    moneda.velocityY= 5
    moneda.addImage("po", monedaImg);
    rand = Math.round(random(1,100));
    moneda.scale= 0.5;
    moneda.lifetime = 150;
  }

  
  drawSprites();
}

  

  

