var bg, bgimg;
var bg1;
var bgmusic, bgmus;
var play, playb,player1;
var vent, sabo, report, kill, use;
var ventb, sabob, reportb, killb, useb;
var logo;
var logoimg;
var gameState = 0, count = 0;
var score = 0;

function preload(){
   laugh = loadSound("sound/Laugh.mp3")
   playerimg = loadAnimation("2.png", "3.png", "5.png")
   playerimg1 = loadImage("walk.gif")
   logo = loadImage("logo.png");
   bg = loadImage("bg.jpg");
   play = loadImage("play.png");
   bgmus = loadSound("bgmusic.mp3");
   bg11 = loadImage("Skeld.png");
   emer = loadImage("buttons/Emergency.png");
   use = loadImage("buttons/Use.png");
   faketask = loadImage("buttons/faketask.jpg");
   kill = loadImage("buttons/kill.png");
   kills = loadSound("sound/blood splash.mp3");
   splash = loadImage("splash.png");
   random = loadSound("sound/Round Start.mp3")
   crew1img = loadImage("characters/black.png")
   crew2img = loadImage("characters/blue.png")
   crew3img = loadImage("characters/brown.png")
   crew4img = loadImage("characters/cyan.png")
   crew5img = loadImage("characters/gray.png")
   crew6img = loadImage("characters/green.png")
   crew7img = loadImage("characters/lime.png")
   crew8img = loadImage("characters/orange.png")
   crew9img = loadImage("characters/pink.png")
   crew10img = loadImage("characters/purple.png")
   crew11img = loadImage("characters/red.png")
   crew12img = loadImage("characters/white.png")
   crew13img = loadImage("characters/yellow.png")
   d1img = loadImage("dead/black.png")
   d2img = loadImage("dead/blue.png")
   d3img = loadImage("dead/brown.png")
   d4img = loadImage("dead/cyan.png")
   d5img = loadImage("dead/grey.png")
   d6img = loadImage("dead/green.png")
   d7img = loadImage("dead/lime.png")
   d8img = loadImage("dead/orange.png")
   d9img = loadImage("dead/pink.png")
   d10img = loadImage("dead/purple.png")
   d11img = loadImage("dead/red.png")
   d12img = loadImage("dead/white.png")
   d13img = loadImage("dead/yellow.png")
}

function setup(){
   createCanvas(1920, 937) 


   invis1 = createSprite(617, 295, 10, 10);
   invis1.scale = 0.4;
   invis2 = createSprite(42, 85, 10, 10);
   invis2.scale = 0.4;
   invis3 = createSprite(449, 625, 10, 10);
   invis3.scale = 0.4;
   invis4 = createSprite(-841, 625, 10, 10);
   invis4.scale = 0.4;
   invis5 = createSprite(2174, 1309, 10, 10);
   invis5.scale = 0.4;
   invis6 = createSprite(2310, -672, 10, 10);
   invis6.scale = 0.4;
   invis7 = createSprite(1934, 175, 10, 10);
   invis7.scale = 0.4;
   invis8 = createSprite(1873, 1525, 10, 10);
   invis8.scale = 0.4;
   invis9 = createSprite(-450, -461, 10, 10);
   invis9.scale = 0.4;
   invis10 = createSprite(1830, -581, 10, 10);
   invis10.scale = 0.4;
   invis11 = createSprite(1650, 813, 10, 10);
   invis11.scale = 0.4;
   invis12 = createSprite(1440, 1593, 10, 10);
   invis12.scale = 0.4;
   invis13 = createSprite(-600, 1173, 10, 10);
   invis13.scale = 0.4;

   bg1 = createSprite(width/2,height/2,width,height);
   bg1.shapeColor = "black";
   bg1.addImage(bg11);
   bg1.scale = 5;
   bg1.depth = -1;
   bg1.visible = false;


   logoimg = createSprite(900, 420, 500, 500);
   logoimg.addImage(logo); 


   playb = createSprite(900, 580, 500, 500);
   playb.addImage(play);
   playb.scale = 0.4;


   faketasks = createSprite(500, -350, 500, 500);
   faketasks.addImage(faketask);
   faketasks.scale = 1.6;


   bgmus.play();


   useb = createSprite(1917, 400, 30, 30);
   useb.addImage(use);
   useb.scale = 1.2;
   useb.visible = false;


   emerb = createSprite(1277, -340, 10, 10);
   emerb.addImage(emer);
   emerb.scale = 0.25;
   emerb.visible = false;


   killb = createSprite(1907, 400, 30, 30);
   killb.addImage(kill);
   killb.scale = 1.2;
   killb.visible = false;
   

   player1 = createSprite(1259, 0, 10, 10)
   player1.scale = 0.5;
   //player1.addAnimation("moving", playerimg);
   player1.addImage(playerimg1);
   player1.visible = false;


   crew1 = createSprite(617, 305, 10, 10)
   crew1.scale = 0.15;
   crew1.addImage(crew1img);

   
   crew2 = createSprite(42, 95, 10, 10)
   crew2.scale = 0.15;
   crew2.addImage(crew2img);


   crew3 = createSprite(449, 635, 10, 10)
   crew3.scale = 0.15;
   crew3.addImage(crew3img);


   crew4 = createSprite(-841, 635, 10, 10)
   crew4.scale = 0.15;
   crew4.addImage(crew4img);


   crew5 = createSprite(2174, 1319, 10, 10)
   crew5.scale = 0.15;
   crew5.addImage(crew5img);


   crew6 = createSprite(2310, -572, 10, 10)
   crew6.scale = 0.15;
   crew6.addImage(crew6img);


   crew7 = createSprite(1934, 185, 10, 10)
   crew7.scale = 0.15;
   crew7.addImage(crew7img);


   crew8 = createSprite(1873, 1535, 10, 10)
   crew8.scale = 0.15;
   crew8.addImage(crew8img);


   crew9 = createSprite(-450, -471, 10, 10)
   crew9.scale = 0.15;
   crew9.addImage(crew9img);


   crew10 = createSprite(1830, -591, 10, 10)
   crew10.scale = 0.15;
   crew10.addImage(crew10img);


   crew11 = createSprite(1650, 823, 10, 10)
   crew11.scale = 0.15;
   crew11.addImage(crew11img);


   crew12 = createSprite(1440, 1603, 10, 10)
   crew12.scale = 0.15;
   crew12.addImage(crew12img);


   crew13 = createSprite(-600, 1183, 10, 10)
   crew13.scale = 0.15;
   crew13.addImage(crew13img);


   crew14 = createSprite(854, -721, 10, 10)
   crew14.scale = 0.15;
   crew14.addImage(crew1img);

   
   crew2 = createSprite(1183, 779, 10, 10)
   crew2.scale = 0.15;
   crew2.addImage(crew2img);


   crew3 = createSprite(449, 635, 10, 10)
   crew3.scale = 0.15;
   crew3.addImage(crew3img);


   crew4 = createSprite(-841, 635, 10, 10)
   crew4.scale = 0.15;
   crew4.addImage(crew4img);


   crew5 = createSprite(2174, 1319, 10, 10)
   crew5.scale = 0.15;
   crew5.addImage(crew5img);


   crew6 = createSprite(2310, -572, 10, 10)
   crew6.scale = 0.15;
   crew6.addImage(crew6img);


   crew7 = createSprite(1934, 185, 10, 10)
   crew7.scale = 0.15;
   crew7.addImage(crew7img);


   crew8 = createSprite(1873, 1535, 10, 10)
   crew8.scale = 0.15;
   crew8.addImage(crew8img);


   crew9 = createSprite(-450, -471, 10, 10)
   crew9.scale = 0.15;
   crew9.addImage(crew9img);


   crew10 = createSprite(1830, -591, 10, 10)
   crew10.scale = 0.15;
   crew10.addImage(crew10img);


   crew11 = createSprite(1650, 823, 10, 10)
   crew11.scale = 0.15;
   crew11.addImage(crew11img);


   crew12 = createSprite(1440, 1603, 10, 10)
   crew12.scale = 0.15;
   crew12.addImage(crew12img);


   crew13 = createSprite(-600, 1183, 10, 10)
   crew13.scale = 0.15;
   crew13.addImage(crew13img);


   wall1 = createSprite(1138, 448, 10, 300);
   wall1.visible = false;
   wall2 = createSprite(1472, 358, 10, 150);
   wall2.visible = false;
   wall3 = createSprite(1864, 484, 600, 10);
   wall3.visible = false;
   wall4 = createSprite(1472, 358, 10, 150);
   wall4.visible = false;
   wall5 = createSprite(1845, 699, 10, 100);
   wall5.visible = false;
   wall6 = createSprite(1845, 699, 10, 100);
   wall6.visible = false;
   wall7 = createSprite(1845, 699, 10, 100);
   wall7.visible = false;
   wall8 = createSprite(1845, 699, 10, 100);
   wall8.visible = false;
}

function draw(){
   background(bg);
    drawSprites();
    console.log(player1.x + ", " + player1.y)
    push();
    fill("red");
    stroke("black");
    textSize(24);
    strokeWeight(4);
    text("Impostor", player1.x - 30, player1.y - 60);
   text("Score: " + score, player1.x - 200, player1.y + 500)
    pop();
    
    

    //textSize(24);
    //fill("white");
    //stroke("black");


    if (frameRate % 5 === 0){
       random.play();
    }

    if (player1.isTouching(crew1) && mousePressedOver(killb)){
      crew1.addImage(d1img);
      count++;
      kills.play();
      invis1.addImage(splash)
      invis1.lifetime = 10;
      score = score + 100;
   }
   
   if (player1.isTouching(crew2) && mousePressedOver(killb)){
      crew2.addImage(d2img);
      count++;
      kills.play();
      invis2.addImage(splash)
      invis2.lifetime = 10;
      score = score + 100;
   }
   
   if (player1.isTouching(crew3) && mousePressedOver(killb)){
      crew3.addImage(d3img);
      count++;
      kills.play();
      invis3.addImage(splash)
      invis3.lifetime = 10;
      score = score + 100;
   }
   
   if (player1.isTouching(crew4) && mousePressedOver(killb)){
      crew4.addImage(d4img);
      count++;
      kills.play();
      invis4.addImage(splash)
      invis4.lifetime = 10;
      score = score + 100;
   }

   if (player1.isTouching(crew5) && mousePressedOver(killb)){
      crew5.addImage(d5img);
      count++;
      kills.play();
      invis5.addImage(splash)
      invis5.lifetime = 10;
      score = score + 100;
   }
   
   if (player1.isTouching(crew6) && mousePressedOver(killb)){
      crew6.addImage(d6img);
      count++;
      kills.play();
      invis6.addImage(splash)
      invis6.lifetime = 10;
      score = score + 100;
   }
   
   if (player1.isTouching(crew7) && mousePressedOver(killb)){
      crew7.addImage(d7img);
      count++;
      kills.play();
      invis7.addImage(splash)
      invis7.lifetime = 10;
      score = score + 100;
   }
   
   if (player1.isTouching(crew8) && mousePressedOver(killb)){
      crew8.addImage(d8img);
      count++;
      kills.play();
      invis8.addImage(splash)
      invis8.lifetime = 10;
      score = score + 100;
   }

   if (player1.isTouching(crew9) && mousePressedOver(killb)){
      crew9.addImage(d9img);
      count++;
      kills.play();
      invis9.addImage(splash)
      invis9.lifetime = 10;
      score = score + 100;
   }
   
   if (player1.isTouching(crew10) && mousePressedOver(killb)){
      crew10.addImage(d10img);
      count++;
      kills.play();
      invis10.addImage(splash)
      invis10.lifetime = 10;
      score = score + 100;
   }
   
   if (player1.isTouching(crew11) && mousePressedOver(killb)){
      crew11.addImage(d11img);
      count++;
      kills.play();
      invis11.addImage(splash)
      invis11.lifetime = 10;
      score = score + 100;
   }
   
   if (player1.isTouching(crew12) && mousePressedOver(killb)){
      crew12.addImage(d12img);
      count++;
      kills.play();
      invis12.addImage(splash)
      invis12.lifetime = 10;
      score = score + 100;
   }

   if (player1.isTouching(crew13) && mousePressedOver(killb)){
      crew13.addImage(d13img);
      count++;
      kills.play();
      invis13.addImage(splash)
      invis13.lifetime = 10;
      score = score + 100;
   }

    if (mousePressedOver(playb)){
       gameState = 1;
    }
    if(gameState === 1){
       //background(255);
       text(mouseX + ","+ mouseY, mouseX, mouseY);
       camera.x = player1.x;
       camera.y = player1.y;
       useb.x = player1.x + 800;
       useb.y = player1.y + 400;
       killb.x = player1.x + 620;
       killb.y = player1.y + 400;
       faketasks.x = player1.x - 760;
       faketasks.y = player1.y - 370;
       bg1.visible = true;
       player1.visible = true;
       logoimg.depth = -2;
       playb.depth = -3;
       useb.visible = true;
       emerb.visible = true;
       killb.visible = true;
       textSize(24);
      fill("white");
      stroke("black");
      strokeWeight(4);
      text("VENTING SYSTEM UNAVAILABLE, FLY THROUGH ALL WALLS EXCEPT FOR ADMIN", emerb.x - 464, emerb.y - 90);
      //"c" stands for crewmate
      text("C-1", crew1.x + 24, crew1.y - 40);
      text("C-2", crew2.x - 24, crew2.y - 40);
      text("C-3", crew3.x - 24, crew3.y - 40);
      text("C-4", crew4.x - 24, crew4.y - 40);
      text("C-5", crew5.x - 24, crew5.y - 40);
      text("C-6", crew6.x - 24, crew6.y - 40);
      text("C-7", crew7.x - 24, crew7.y - 40);
      text("C-8", crew8.x - 24, crew8.y - 40);
      text("C-9", crew9.x - 24, crew9.y - 40);
      text("C-10", crew10.x - 24, crew10.y - 40);
      text("C-11", crew11.x - 24, crew11.y - 40);
      text("C-12", crew12.x - 24, crew12.y - 40);
      text("C-13", crew13.x - 24, crew13.y - 40);
    }

   if (keyDown(RIGHT_ARROW)){
      player1.x += 30;
   }

   if (keyDown(LEFT_ARROW)){
      player1.x -= 30;
   }

   if (keyDown(DOWN_ARROW)){
      player1.y += 30;
   }

   if (keyDown(UP_ARROW)){
      player1.y -= 30;
   }
   player1.bounceOff(emerb);
   player1.bounceOff(wall1);
   player1.bounceOff(wall2);
   player1.bounceOff(wall3);
   player1.bounceOff(wall4);
   player1.bounceOff(wall5);
   player1.bounceOff(wall6);
   player1.bounceOff(wall7);
   player1.bounceOff(wall8);


   if (gameState === 1 && mousePressedOver(useb)){
      laugh.play();
   }


   fill("red");
   stroke("black");
   textSize(24);
   strokeWeight(4);
   text("Score: " + score, player1.x + 200, player1.y - 300)
   if (player1.isTouching(crew1) && mousePressedOver(killb)){
      crew1.addImage(d1img);
      count++;
      kills.play();
      invis1.addImage(splash)
      invis1.lifetime = 10;
   }
   
   if (player1.isTouching(crew2) && mousePressedOver(killb)){
      crew2.addImage(d2img);
      count++;
      kills.play();
      invis2.addImage(splash)
      invis2.lifetime = 10;
   }
   
   if (player1.isTouching(crew3) && mousePressedOver(killb)){
      crew3.addImage(d3img);
      count++;
      kills.play();
      invis3.addImage(splash)
      invis3.lifetime = 10;
   }
   
   if (player1.isTouching(crew4) && mousePressedOver(killb)){
      crew4.addImage(d4img);
      count++;
      kills.play();
      invis4.addImage(splash)
      invis4.lifetime = 10;
   }

   if (player1.isTouching(crew5) && mousePressedOver(killb)){
      crew5.addImage(d5img);
      count++;
      kills.play();
      invis5.addImage(splash)
      invis5.lifetime = 10;
   }
   
   if (player1.isTouching(crew6) && mousePressedOver(killb)){
      crew6.addImage(d6img);
      count++;
      kills.play();
      invis6.addImage(splash)
      invis6.lifetime = 10;
   }
   
   if (player1.isTouching(crew7) && mousePressedOver(killb)){
      crew7.addImage(d7img);
      count++;
      kills.play();
      invis7.addImage(splash)
      invis7.lifetime = 10;
   }
   
   if (player1.isTouching(crew8) && mousePressedOver(killb)){
      crew8.addImage(d8img);
      count++;
      kills.play();
      invis8.addImage(splash)
      invis8.lifetime = 10;
   }

   if (player1.isTouching(crew9) && mousePressedOver(killb)){
      crew9.addImage(d9img);
      count++;
      kills.play();
      invis9.addImage(splash)
      invis9.lifetime = 10;
   }
   
   if (player1.isTouching(crew10) && mousePressedOver(killb)){
      crew10.addImage(d10img);
      count++;
      kills.play();
      invis10.addImage(splash)
      invis10.lifetime = 10;
   }
   
   if (player1.isTouching(crew11) && mousePressedOver(killb)){
      crew11.addImage(d11img);
      count++;
      kills.play();
      invis11.addImage(splash)
      invis11.lifetime = 10;
   }
   
   if (player1.isTouching(crew12) && mousePressedOver(killb)){
      crew12.addImage(d12img);
      count++;
      kills.play();
      invis12.addImage(splash)
      invis12.lifetime = 10;
   }

   if (player1.isTouching(crew13) && mousePressedOver(killb)){
      crew13.addImage(d13img);
      count++;
      kills.play();
      invis13.addImage(splash)
      invis13.lifetime = 10;
   }

if (count === 10){
   crew1.addImage(crew1img);
   crew2.addImage(crew2img);
   crew3.addImage(crew3img);
   crew4.addImage(crew4img);
   crew5.addImage(crew5img);
   crew6.addImage(crew6img);
   crew7.addImage(crew7img);
   crew8.addImage(crew8img);
   crew9.addImage(crew9img);
   crew10.addImage(crew10img);
   crew11.addImage(crew11img);
   crew12.addImage(crew12img);
   crew13.addImage(crew13img);
   count = 0;
   
}

}