
var game, gameState;
var BG, level1BG, level1bac,level2bac;
var BGMusic, JumpSound, DragonRoar, DragonFire,EndLV1,levelTwoMusic;
var Ground1, Ground2, Ground3, Ground4, MainGroundLV2;
var Ground, fakeGround, Hill, Cave1, Cave2; // images for terrain
var MonskeyIdle, Monskey, MonskeyWalkR,MonskeyWalkL,MonskeyJump,MonskeyDies,DeadMonskey;
var DemonFly;
var MonskeyGroup, edges;
var GoblinWalking, GoblinIdle, Enemy1, Enemy2, demonMonskey;
var DragonFlyingL, fireGroup,Explosion,expGroup,GroupOpen;
var obstacleGroup;
var lives = 3;
var life1, life2, life3;
var level1bac2;
var openGround1,openDaGround1;
var openGround2,openDaGround2;
var monskeyRage = 0;
var demonChat1, demonChat2, demonChat3,monskeyChat1,monskeyChat2,monskeyChat3;
var chatGroup,chatGroup2;
var Wolfwalk,Wolfrun,Wolfgroup;
var MonskeyWife,Jail; 
var monskeyWife,theJail;






function preload() {
  BGMusic = loadSound("Sounds/MenuMusic.mp3");
  BG = loadImage("Images/MenuPG.jpg");
  level1BG = loadImage("Images/Level 1 Bg.jpg");
  level2BG = loadImage("Images/Level 2 Bg.jpg");

  Ground1 = loadImage("Images/Ground 1.png");
  Ground2 = loadAnimation("Images/Ground 2.png");
  Ground3 = loadImage("Images/Ground 3.png");
  Ground4 = loadImage("Images/Ground 4.png");

  // level 2 grounds
  MainGroundLV2 = loadAnimation("Images/MainGround LV.png");
  Ground1LV2 = loadImage("Images/Ground 1 LV2.png");
  Ground2LV2 = loadImage("Images/Ground 2 LV2.png");
  Ground3LV2 = loadImage("Images/Ground 3 LV2.png");
  Ground4LV2 = loadImage("Images/Ground 4 LV2.png");
  Ground5LV2 = loadImage("Images/Ground 5 LV 2.png");
  // cave
  Cave1 = loadImage("Images/Cave.png");
  Cave2 = loadImage("Images/Cavehalf.png");

  // chats load
  demonChat1 = loadImage("Images/Demon Chat1.png");
  demonChat2 = loadImage("Images/Demon Chat 2.png");
  demonChat3 = loadImage("Images/Demon Chat 3.png");

  monskeyChat1 = loadImage("Images/Monskey Chat 1.png");
  monskeyChat2 = loadImage("Images/Monskey Chat 2.png");
  
  MonskeyIdle = loadAnimation("Images/Idle 1.png","Images/Idle 2.png","Images/Idle 3.png");
  MonskeyWalkR = loadAnimation("Images/Walking 1.png","Images/Walking 2.png","Images/Walking 3.png","Images/Walking 4.png","Images/Walking 5.png","Images/Walking 6.png","Images/Walking 7.png","Images/Walking 8.png","Images/Walking 9.png","Images/Walking 10.png","Images/Walking 11.png")
  MonskeyWalkL = loadAnimation("Images/Walking 1 L.png","Images/Walking 2 L.png","Images/Walking 3 L.png","Images/Walking 4 L.png","Images/Walking 5 L.png","Images/Walking 6 L.png","Images/Walking 7 L.png","Images/Walking 8 L.png","Images/Walking 9 L.png","Images/Walking 10 L.png","Images/Walking 11 L.png")
  MonskeyJump = loadAnimation("Images/Jump 1.png","Images/Jump 2.png","Images/Jump 3.png","Images/Jump 4.png","Images/Jump 3.png","Images/Jump 2.png","Images/Jump 1.png");
  MonskeyJumpL = loadAnimation("Images/Jump 1 L.png","Images/Jump 2 L.png","Images/Jump 3 L.png","Images/Jump 4 L.png","Images/Jump 3 L.png","Images/Jump 2 L.png","Images/Jump 1 L.png");
  GoblinWalkingR = loadAnimation("Images 2/Goblin 1.png","Images 2/Goblin 2.png","Images 2/Goblin 3.png","Images 2/Goblin 4.png","Images 2/Goblin 5.png","Images 2/Goblin 6.png","Images 2/Goblin 7.png");
  GoblinWalkingL = loadAnimation("Images 2/Goblin 1L.png","Images 2/Goblin 2L.png","Images 2/Goblin 3L.png","Images 2/Goblin 4L.png","Images 2/Goblin 5L.png","Images 2/Goblin 6L.png","Images 2/Goblin 7L.png");
  DragonFlyingL = loadAnimation("Images 2/Dragon L1.png","Images 2/Dragon L2.png","Images 2/Dragon L3.png");
  Fireball = loadAnimation("Images/Small Fireball.png","Images/Medium Fireball.png","Images/Big Fireball.png");
  GoblinAttack = loadAnimation("Images 2/GobHit 1L.png","Images 2/GobHit 2L.png","Images 2/GobHit 3L.png","Images 2/Goblin 1L.png","Images 2/Goblin 2L.png","Images 2/Goblin 3L.png","Images 2/Goblin 4L.png","Images 2/Goblin 5L.png","Images 2/Goblin 6L.png","Images 2/Goblin 7L.png");
  DeadMonskey = loadImage("Images/Hit 9.png");                                                                                    //
 // noLoop();
  MonskeyDies = loadAnimation("Images/Hit 9.png");
  MonskeySmash = loadAnimation("Images/Smash 1.png","Images/Smash 2.png","Images/Samsh 3.png","Images/Smash 4.png","Images/Samsh 5.png","Images/Smash 6.png","Images/Smash 7.png","Images/Smash 8.png","Images/Smash 9.png");
  DemonFly = loadAnimation("Images 2/Demon 1.png","Images 2/Demon 2.png","Images 2/Demon 3.png");

  //Wolf animation
  Wolfwalk = loadAnimation("Images 2/Wolf 1.png","Images 2/Wolf 2.png","Images 2/Wolf 3.png","Images 2/Wolf 4.png","Images 2/Wolf 5.png","Images 2/Wolf 6.png");
  Wolfrun = loadAnimation("Images 2/WolfRun1.png","Images 2/WolfRun 2.png","Images 2/WolfRun 3.png","Images 2/WolfRun 4.png","Images 2/WolfRun 5.png");
 
  MonskeyWife = loadImage("Images 2/Monskey wife.png");
  Jail = loadImage("Images 2/Jail.png");
 
  // Animation for effects
 
  

  // Sound effects
  JumpSound = loadSound("Sounds/Gorilla Jump SE.mp3");
  DragonRoar = loadSound("Sounds/Dragon Sound.mp3");
  DragonFire = loadSound("Sounds/Dragon Fire (2).mp3");
  levelOneMusic = loadSound("Sounds/LevelOne Music.mp3");
  groundSmash = loadSound("Sounds/Ground Smash.mp3");
  EndLV1 = loadSound("Sounds/End LV1.mp3");
  levelTwoMusic = loadSound("Sounds/Level2Music.mp3");
  
}

function setup() {
  createCanvas(1600,400);
 

  game = new Game();
  //game.start();
 // gameState = "start";
  
  gameState = "start";


  
  level1bac = createSprite(4800,195,4000,20);
  level1bac.addImage(level1BG);
  level1bac.scale = 1.1;

  level2bac = createSprite(4800,195,4000,20);
  level2bac.addImage(level2BG);
  level2bac.scale = 1.1;
  level2bac.visible = false;

 
/// The Ground for level 1
  Ground = createSprite(4800,370,5000,20);
  Ground.addAnimation("Ground3",Ground2);
  Ground.setCollider("rectangle",0,0,400,50);

  // cave images
  cave1 = createSprite(18000,250,0,0);
  cave1.addImage(Cave1);
  cave1.scale = 1.2;
  cave1.visible = false; 
  cave1.setCollider("rectangle",100,0,10,300);
  
  
  

  // all groups
  obstacleGroup = createGroup();
  enemyGroup = createGroup();
  dragonGroup = createGroup();
  fireGroup = createGroup();
  GoblinGroup = createGroup();
  chatGroup = createGroup();
  chatGroup2 = createGroup();
  Wolfgroup = createGroup();




  
 
  Monskey = createSprite(150,360,40,40);      //// orginal 150 is x
  Monskey.addAnimation("Idle",MonskeyIdle);
  Monskey.addAnimation("Death",MonskeyDies)
  Monskey.addAnimation("WalksLeft",MonskeyWalkL);
  Monskey.addAnimation("Walks",MonskeyWalkR);
  Monskey.addAnimation("Jump",MonskeyJump);
  Monskey.addAnimation("JumpL",MonskeyJumpL);
  Monskey.addAnimation("SmashR",MonskeySmash);

  cave2 = createSprite(18000,250,0,0);
  cave2.addImage(Cave2);
  cave2.scale = 1.2;
  
  monskeyWife = createSprite(17600,215,40,40);
  monskeyWife.addImage(MonskeyWife);
  monskeyWife.scale = 0.15;
  monskeyWife.visible = false;

  theJail = createSprite(17600,10,40,40);
  theJail.addImage(Jail);
  theJail.scale = 0.25;
  theJail.visible = false;
  



  // End Demon Sprite
  Demon = createSprite(17600, 100, 40, 80);
  Demon.scale = 1.5;
  Demon.addAnimation("Flying",DemonFly);
 

  
  
 // all other animations setup 

 // start barrier sprite
 startBarrier = createSprite(115,200,1,400);
 startBarrier.visible = false;

  

  
  //Monskey.debug = true;
  Monskey.setCollider("rectangle",0,0,40,40);

  fakeGround = createSprite(150,365,40,10);
  fakeGround.visible = false;
  
 

  //if(gameState === "level1" || gameState === "level2") {
    life1 = createSprite(100,20,20,20);
    life1.addAnimation("Life1",MonskeyIdle);
    life1.scale = 0.6;
    life2 = createSprite(1500,20,20,20);
    life2.addAnimation("Life2",MonskeyIdle);
    life2.scale = 0.6;
    life3 = createSprite(1550,20,20,20);
    life3.addAnimation("Life3",MonskeyIdle);
    life3.scale = 0.6;
  
  //  }

  


    
}

function draw() {



   Monskey.collide(startBarrier);

   if(gameState === "start") {
    game.start();
   }
 


  // for transition
  if(keyDown("space") && gameState === "start") {
   game.level1();
   gameState = "level1"
  
  }

 //

  if(gameState === "level1"){
    BGMusic.stop(); 
    fakeGround.x = Monskey.x;
   
 

    if(Monskey.isTouching(enemyGroup) && lives === 3) {
        lives = 2;
        life3.visible = false;
       
      } else if(Monskey.isTouching(enemyGroup)) {
        lives = 1 ;
        life2.visible = false;
       // console.log("Works1");
      } else if(Monskey.isTouching(enemyGroup) && lives === 0) {
        lives = 0;
        life1.visible = false;
        //console.log("Works2");
      }
     
      //console.log(lives);


 
  
  // For jumping
  if(keyDown(UP_ARROW) || keyIsDown(UP_ARROW) && keyIsDown(RIGHT_ARROW)) { 
    Monskey.velocityY = -15;
    Monskey.changeAnimation("Jump");    
    JumpSound.play();
    JumpSound.playMode("untilDone");
   } else if (!keyWentDown(UP_ARROW) && Monskey.y > 330 && Monskey.velocityX === 0)  { 
    Monskey.changeAnimation("Idle");    
    //Monskey.velocityY = 0;
   
   } 

   if(keyWentDown(UP_ARROW) && keyIsDown(LEFT_ARROW)) { 
    Monskey.velocityY = -15;
    Monskey.changeAnimation("JumpL");    
    JumpSound.play();
   } else if (!keyWentDown(UP_ARROW) && Monskey.y > 330 && Monskey.velocityX === 0)  { 
    Monskey.changeAnimation("Idle");    
    //Monskey.velocityY = 0;
   
   } 
   
// for moving right
   if(keyWentDown(RIGHT_ARROW)) {
    Monskey.velocityX = 8;
    Monskey.changeAnimation("Walks");
    //console.log("Right arrow key is pressed"); 
  } else if(keyWentUp(RIGHT_ARROW)) {
    Monskey.velocityX = 0;
    Monskey.changeAnimation("Idle");
  }
  camera.x = Monskey.x;
 
  
// For moving left
  if(keyWentDown(LEFT_ARROW)) {
    Monskey.velocityX = -10;
    
    Monskey.changeAnimation("WalksLeft"); ;
  } else if(keyWentUp(LEFT_ARROW)) {
    Monskey.velocityX = 0;
    Monskey.changeAnimation("Idle");
  }

  
  if(keyDown(DOWN_ARROW)) {
    Monskey.changeAnimation("SmashR");
    monskeyRage = 2;
    groundSmash.play();
    groundSmash.playMode('untilDone');
  } else { 
    monskeyRage = 0;
  }
  //console.log(monskeyRage);

  if(monskeyRage === 2 && GoblinGroup.collide(Monskey)) {
    GoblinGroup.destroyEach();
  }




   
// The gravity of Monskey
   Monskey.velocityY = Monskey.velocityY + 1;

  if(Monskey.collide(fakeGround)) {
    Monskey.velocityY = 0;
  }
  
 //for resetting ground
if(Monskey.x > 9525) {
  level1bac.x = 12726;
  //startBarrier.x = 127;

}

if(Monskey.x > 9525) {
 Ground.x = 12726;
}



// for spawing fireballs from dragons  
  if(Monskey.isTouching(dragonGroup)) {
      var randomHeight = random(200,100);
      fireball = createSprite(Monskey.x + 300,randomHeight,20,20);
      fireGroup.add(fireball);
      fireball.x = Monskey.x;
      fireball.velocityX = Monskey.velocityX;
      fireball.velocityY = 10;
      fireball.addAnimation("shoot",Fireball);
      DragonFire.play();
      DragonFire.playMode('untilDone');
      //enemyGroup.setVelocityXEach(-5);
    }

// So Monskey collides with the obstacles
  Monskey.collide(obstacleGroup)

  spawnEnemy();
  spawnObstacles();

  if(Monskey.isTouching(GoblinGroup) && monskeyRage === 0) {
    Monskey.changeAnimation("Death");
    Monskey.velocityX = 0;
    Monskey.velocityY = 0;
    GoblinGroup.setVelocityXEach(0);
  }


  } /// end level 1 gamestate

  // Monskey dies when tocuhing fireballs. 

  
  
  if(Monskey.collide(fireGroup)) {
    fireGroup.destroyEach();
    gameState = "End";
   
  }
   
  /// END STATE
 if(gameState === "End") {
   Monskey.changeAnimation("Death"); // fix this looping problem.
   Monskey.velocityY = Monskey.velocityY + 1;
   Monskey.velocityX = 0;
   Ground.velocityX = 0;
   Monskey.collide(fakeGround);
 }


 if(Monskey.x > 17000 && gameState === "level1") {
   gameState = "level1Over"
 }

 if(gameState === "level1Over") {
  Monskey.velocityX = 0;
  // Monskey.velocityY = 0;
   Monskey.changeAnimation("Idle");
   levelOneMusic.stop();
   obstacleGroup.destroyEach();
   EndLV1.play();
   EndLV1.playMode("untilDone");
   enemyGroup.destroyEach();
   Monskey.velocityY = Monskey.velocityY + 1;
   Monskey.collide(fakeGround);
   fakeGround.velocityX = 0;
   if(Monskey.isTouching(cave1)) {
    gameState = "level2";
    Ground.velocityX = 0;
    Ground.x = 150;
    level1bac.destroy();
    cave1.destroy();
    cave2.destroy();
    Monskey.x = 150;
    fakeGround.x = 150;
  }
 }

 fakeGround.debug = true;
 
 if(gameState === "level2") { //////////////////// work on level 2///////////////////////////////
  level1bac.visible = false;

  levelTwoMusic.play();
  levelTwoMusic.playMode("untilDone");

  // to spawn enemys
  spawnEnemyLV2();

  if(Monskey.isTouching(Wolfgroup)) {
    Monskey.changeAnimation("Death");
    Monskey.velocityX = 0;
    Monskey.velocityY = 0;
    Wolfgroup.setVelocityXEach(0);
  } else if(Monskey.isTouching(GoblinGroup)) {
    Monskey.changeAnimation("Death");
    Monskey.velocityX = 0;
    Monskey.velocityY = 0;
    GoblinGroup.setVelocityXEach(0);
  }
 
  

  Ground.addAnimation("Level2Ground",MainGroundLV2);
  Ground.changeAnimation("Level2Ground");
  Ground.scale = 1.2;

// to spawn obstacles
spawnObstaclesLV2();

// to collide with obstacles
Monskey.collide(obstacleGroup);


// to reset background and ground
if(Monskey.x > 5980) {
  Ground.x = 8500;
}

if(Monskey.x > 9525) {
    level2bac.x = 12726;
    //startBarrier.x = 127;
  
  }
  if(Monskey.x > 9525) {
    Ground.x = 12726;
   }
  
  
// to stop/destroy level one things
   EndLV1.stop();
   cave1.destroy();
   cave2.destroy();

// stops monskey from falling off ground.
  fakeGround.velocityX = Monskey.velocityX;
  fakeGround.x = Monskey.x;
  Monskey.collide(fakeGround);
   
// turn on the level 2 background visibility                  
  level2bac.visible = true;
  
// to move right
   if(keyWentDown(RIGHT_ARROW)) { 
    Monskey.velocityX = 8;
    Monskey.changeAnimation("Walks");
  } else if(keyWentUp(RIGHT_ARROW)) {
    Monskey.velocityX = 0;
    Monskey.changeAnimation("Idle");
  }
////////////////////////////


// to jump
  if(keyDown(UP_ARROW) || keyIsDown(UP_ARROW) && keyIsDown(RIGHT_ARROW)) { 
    Monskey.velocityY = -15;
    Monskey.changeAnimation("Jump");    
    JumpSound.play();
    JumpSound.playMode("untilDone");
   } else if (!keyWentDown(UP_ARROW) && Monskey.y > 330 && Monskey.velocityX === 0)  { 
    Monskey.changeAnimation("Idle");    
   } 

// to move left
if(keyWentDown(LEFT_ARROW)) {
  Monskey.velocityX = -10;
  
  Monskey.changeAnimation("WalksLeft"); ;
} else if(keyWentUp(LEFT_ARROW)) {
  Monskey.velocityX = 0;
  Monskey.changeAnimation("Idle");
}

// to smash ground 
if(keyDown(DOWN_ARROW)) {
  Monskey.changeAnimation("SmashR");
  monskeyRage = 2;
  groundSmash.play();
  groundSmash.playMode('untilDone');
} else { 
  monskeyRage = 0;
}

// for killing goblin
if(monskeyRage === 2 && GoblinGroup.collide(Monskey)) {
  GoblinGroup.destroyEach();
} else if(monskeyRage === 2 && Wolfgroup.collide(Monskey)) {
  Wolfgroup.destroyEach();
}



   Monskey.velocityY = Monskey.velocityY + 1;
  camera.x = Monskey.x;

  if(Monskey.x > 17000 && gameState === "level2") {
    gameState = "BossFight"
    Demon.x = 17400;
    Demon.velocityX = 0;
    Demon.visible = true;
    monskeyWife.visible = true;
    theJail.visible = true;
  }

 }

 if(gameState === "BossFight") {
  Monskey.velocityX = 0;

 

   Monskey.velocityY = 0;
   Monskey.changeAnimation("Idle");
   levelOneMusic.stop();
   obstacleGroup.destroyEach();
   EndLV1.play();
   EndLV1.playMode("untilDone");
   enemyGroup.destroyEach();
   //Monskey.velocityY = Monskey.velocityY + 1;
   Monskey.collide(fakeGround);
 }
 

  drawSprites();


  
 
  
  // to display menu page
  if(gameState === "start") {
    background(BG);
 
}
} /// end of draw bracket


 function keyPressed() {
 if(keyCode === 32 && gameState === "level1Over") {
  setTimeout(textOne,1000);
  setTimeout(textTwo,3000);
  setTimeout(textThree,5000);
  setTimeout(demonDisappears,6500);
  setTimeout(textFour,10000); 
  setTimeout(function destroyChat4() {chatGroup2.destroyEach();},11000);
  setTimeout(goToCave,12000);

  
 
 }

 }
   


function textOne() {
Chat1 = createSprite(Monskey.x + 400,50,20,20);
Chat1.addImage("demonChat1",demonChat1);
Chat1.scale = 0.5;
chatGroup.add(Chat1);
}


function textTwo() {
Chat2 = createSprite(Monskey.x + 200,300,20,20);
Chat2.addImage("monskeyChat",monskeyChat1);
Chat2.scale = 0.5;
chatGroup2.add(Chat2);
}

function textThree() {
Chat3 = createSprite(Monskey.x + 400,50,20,20);
Chat3.addImage("demonChat2",demonChat2);
Chat3.scale = 0.5;
chatGroup.add(Chat3);
}
function textFour() {
Chat4 = createSprite(Monskey.x + 200,300,20,20);
Chat4.addImage("monskeyChat2",monskeyChat2);
Chat4.scale = 0.5;
chatGroup2.add(Chat4);
}
function demonDisappears() {
  Demon.velocityX = 5;
  setTimeout(function disappear() {Demon.visible = false;},10000);
  chatGroup.destroyEach();
}
function goToCave() { 
  Ground.velocityX = -5;
  cave1.velocityX = -5;
  cave1.visible = true;
  cave2.velocityX = -5;
 
}


function spawnObstacles() {
  if(World.frameCount % 80 === 0 && Monskey.velocityX === 8) {
  
    Obstacle = Math.round(random(1,3));
    switch(Obstacle) {
  case 1:
  Obstacle1 = createSprite(Monskey.x + 1000,303,300,200);
  AngleHill = createSprite(Monskey.x + 1000,340,100,100);
  //AngleHill.debug = true;
  Obstacle1.lifetime = 800;
  AngleHill.lifetime = 800;
  AngleHill.visible = false;
  AngleHill.rotation = 45;
  Obstacle1.addImage("Obstacle1",Ground4);
  Obstacle1.setCollider("rectangle",-85,15,180,100);
  obstacleGroup.add(Obstacle1);
  obstacleGroup.add(AngleHill);
  //Hill.debug = true;
    break;
  case 2:
    var y = random(100,200);
    Obstacle2 = createSprite(Monskey.x + 1000,y,100,10);
    Obstacle2.addImage("Obstacle2",Ground1);
    Obstacle2.lifetime = 800;
    obstacleGroup.add(Obstacle2);
    //Obstacle2.debug = true;
    break;
  case 3: 
    var y2 = random(100,200);
    Obstacle3 = createSprite(Monskey.x + 1000,y2,200,10);
    Obstacle3.scale = 0.3;
    Obstacle3.lifetime = 800;
    Obstacle3.addImage("Obstacle3",Ground3);
    obstacleGroup.add(Obstacle3);
    //Obstacle3.debug = true;
    break;
  default: break;
    }
      

} if(Monskey.velocityX === 5) {
  obstacleGroup.setVelocityXEach(-5);
} else if(Monskey.velocityX === -5) {
  obstacleGroup.setVelocityXEach(-10);
} else {
  obstacleGroup.setVelocityXEach(0);
}
}


// function to spawn Enemy
function spawnEnemy() {
   
    var randomHeight = random(200,100);
    
    Enemy = Math.round(random(1,2));
    switch(Enemy) {
      case 1: 
              var rand = random(-3,-8);
              if(World.frameCount % 300 === 0 && Monskey.velocityX === 8) {
              Enemy1 = createSprite(Monskey.x + 1000,340,40,40);
              Enemy1.addAnimation("WalingL",GoblinWalkingL);  
              Enemy1.velocityX = rand; 
              Enemy1.lifetime = 600;
              Enemy1.depth = 3;
              //Enemy1.debug = true;
              Enemy1.scale = 1.4;
              Enemy1.setCollider("rectangle",0,0,20,30);
              enemyGroup.add(Enemy1);
              GoblinGroup.add(Enemy1);
              } 
                
              
        break;
      case 2: 
              if(World.frameCount % 300 === 0 && Monskey.velocityX === 8) {
              Enemy2 = createSprite(Monskey.x + 1650,randomHeight,40,40);
              Enemy2.addAnimation("FlyingL",DragonFlyingL);
              Enemy2.lifetime = 600;
              DragonRoar.play();
             // Enemy2.debug = true;
              Enemy2.velocityX = -5;
              Enemy2.setCollider("Circle",0,0,300);
              dragonGroup.add(Enemy2);
              enemyGroup.add(Enemy2);
              }
        break;
      default: break;


    }

 // }
    
  

}

function spawnEnemyLV2() {
   
  var randomHeight = random(200,100);
  
  Enemy = Math.round(random(1,3));
  switch(Enemy) {
    case 1: 
            var rand = random(-3,-8);
            if(World.frameCount % 100 === 0 && Monskey.velocityX === 8) {
            Enemy1 = createSprite(Monskey.x + 1000,340,40,40);
            Enemy1.addAnimation("WalingL",GoblinWalkingL);  
            Enemy1.velocityX = rand; 
            Enemy1.lifetime = 600;
            Enemy1.depth = 3;
            //Enemy1.debug = true;
            Enemy1.scale = 1.4;
            Enemy1.setCollider("rectangle",0,0,20,30);
            enemyGroup.add(Enemy1);
            GoblinGroup.add(Enemy1);
            } 
              
            
      break;
    case 2: 
            if(World.frameCount % 200 === 0 && Monskey.velocityX === 8) {
            Enemy2 = createSprite(Monskey.x + 1650,randomHeight,40,40);
            Enemy2.addAnimation("FlyingL",DragonFlyingL);
            Enemy2.lifetime = 600;
            DragonRoar.play();
            //Enemy2.debug = true;
            Enemy2.velocityX = -5;
            Enemy2.setCollider("Circle",0,0,300);
            dragonGroup.add(Enemy2);
            enemyGroup.add(Enemy2);
            }
      break;

      case 3: 
            if(World.frameCount % 150 === 0 && Monskey.velocityX === 8) {
            Enemy3 = createSprite(Monskey.x + 1650,340,40,40);
            Enemy3.addAnimation("Wolfrun",Wolfrun);
            Enemy3.lifetime = 600;
            Enemy3.setCollider("rectangle",0,0,100,50);  
            //Enemy3.debug = true;
            Enemy3.velocityX = -8;
            Wolfgroup.add(Enemy3);
            enemyGroup.add(Enemy3);
          }
    default: break;


  }

}

function spawnObstaclesLV2() {
  if(World.frameCount % 80 === 0 && Monskey.velocityX === 8) {
  
    Obstacle = Math.round(random(1,5));
    switch(Obstacle) {
  case 1:
  Obstacle1LV2 = createSprite(Monskey.x + 1000,325,300,200);
  Obstacle1LV2.scale = 0.3;
  Obstacle1LV2.lifetime = 800;
  
  Obstacle1LV2.addImage("Obstacle1LV2",Ground5LV2);
  Obstacle1LV2.setCollider("rectangle",100,0,400,735);
 // Obstacle1LV2.debug = true;
  obstacleGroup.add(Obstacle1LV2);
 
    break;
  case 2:
    var y = random(100,200);
    Obstacle2LV2 = createSprite(Monskey.x + 1000,y,100,10);
    Obstacle2LV2.addImage("Obstacle2",Ground1LV2);
    Obstacle2LV2.scale = 0.4;
    Obstacle2LV2.lifetime = 800;
    Obstacle2LV2.setCollider("rectangle",0,0,390,120);
    obstacleGroup.add(Obstacle2LV2);
   // Obstacle2LV2.debug = true;
    break;
  case 3: 
    var y2 = random(100,200);
    Obstacle3LV2 = createSprite(Monskey.x + 1000,y2,200,10);
    Obstacle3LV2.scale = 0.3;
    Obstacle3LV2.lifetime = 800;
    Obstacle3LV2.addImage("Obstacle3",Ground3LV2);
    Obstacle3LV2.setCollider("rectangle",0,0,365,120);
    obstacleGroup.add(Obstacle3LV2);
   // Obstacle3LV2.debug = true;
    break;
  case 4: 
  var y3 = random(100,200);
  Obstacle4LV2 = createSprite(Monskey.x + 1000,y3,200,10);
  Obstacle4LV2.scale = 0.3;
  Obstacle4LV2.lifetime = 800;
  Obstacle4LV2.addImage("Obstacle3",Ground2LV2);
  Obstacle4LV2.setCollider("rectangle",0,0,365,120);
  obstacleGroup.add(Obstacle4LV2);
  //Obstacle4LV2.debug = true;
      break;
    case 5:
    var y4 = random(100,200);
    Obstacle5LV2 = createSprite(Monskey.x + 1000,y4,200,10);
    Obstacle5LV2.scale = 0.3;
    Obstacle5LV2.lifetime = 800;
    Obstacle5LV2.addImage("Obstacle3",Ground4LV2);
    Obstacle5LV2.setCollider("rectangle",0,-25,1900,200);
    obstacleGroup.add(Obstacle5LV2);
   // Obstacle5LV2.debug = true;
  default: break;
    }
  
      

} if(Monskey.velocityX === 5) {
  obstacleGroup.setVelocityXEach(-5);
} else if(Monskey.velocityX === -5) {
  obstacleGroup.setVelocityXEach(-10);
} else {
  obstacleGroup.setVelocityXEach(0);
}
}