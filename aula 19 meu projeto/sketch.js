
var ground, faixa;
var jogador;
var botGroup;
var PLAY = 1;
   var END = 0;
   var gameState = PLAY;
function preload(){
  
}

function setup() {
   
  createCanvas(400, 400);
 
  ground = createSprite(width/2,height,width,2);
  faixa = createSprite(200, 200, 20, 100);
  jogador = createSprite(200, 350, 10,10);
 botGroup = new Group ();
}
function draw() {
 
  background('black');
  
  if (gameState===PLAY){
 
  jogador.shapeColor = "red";
 
faixa.velocityY = 5;
if(faixa.y > 400){
faixa.y = 0;
}


ground.velocityY = 5;
  if (ground.y < 0){
    ground.y = ground.width/2;
  }
  jogador.x = World.mouseX;

 
  
 spawnBot ();

 if(botGroup.isTouching(jogador)) {
  gameState = END;
}
}
  else if (gameState === END){
  ground.velocityY = 0;
  botGroup.setVelocityYEach (0);
  faixa.velocityY = 0;
  jogador.destroy;
}

  drawSprites();
}



function spawnBot(){

  if (frameCount % 60 === 0) {
    var bot = createSprite(200,0,10,10);
    bot.x = Math.round(random(10,390));
    botGroup.add (bot);
    if(bot.y > 400){
     bot.y = 0;}
      bot.velocityY = 3;
      bot.shapeColor = "green";
    }
  if(botGroup.isTouching (jogador)) {
    ground.velocityY = 0;
    botGroup.setVelocityYEach (0);
    faixa.velocityY = 0;
    jogador.destroy;
  }
}
