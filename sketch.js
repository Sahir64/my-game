var pc;
var enemy , enemyGroup;
var score;
var bullet , BulletGroup;


function setup() {
  createCanvas(800,400);

  pc = createSprite(400, 200, 50, 50); 

  EnemyGroup = new Group();

  BulletGroup = new Group();

}

function draw() {
  background(255,255,255);  
  
  if (keyDown("Up_Arrow")){

    pc.y = pc.y - 10;

  
  
  }; 

  if (KeyDown("Down_Arrow")){

    pc.y = pc.y + 10

  };


  if (keyDown("space")){


    bullet.velocityX = 100;

    };

    if
  
  
  
  drawSprites();

}

function SpawnEnemy(){

  if(frameCount % 60 === 0) {
  enemy = createSprite(400,365,50,50);
    enemy.velocityX = - (6 + 3*count/100);
    
        
    enemy.scale = 3;

    EnemyGroup.add(enemy);


  
   
  }
} 
  

function Bullet(){

  bullet = createSprite(400, 200, 10, 10);

  bullet.velocityX = 

  bullet.depth = pc.depth;

  pc.depth = +3; 


BulletGroup.add(bullet);


};
    
    
  
  


