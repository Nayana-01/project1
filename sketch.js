var bg, bgimg, play, playimg,   recipeBg,   recipeBgimg, cupcakeTask
var cupcakeTaskNumber = 0

var VanillaCupcake, VanillaCupcakeImg, RecipeBook, RecipeBookImg

var flour, flourImg, flour1, flour1img
var milk, milkImg, milk1, milk1img
var sugar, sugarimg, sugar1, sugar1img
var egg, eggimg, egg1, egg1img
var BakingPowder, BakingPowderimg, BakingPowder1, BakingPowder1img
var Vanilla, vanillaimg, vanilla1, vanilla1img
var butter, butterimg, butter1img, butter1
var salt, saltimg, salt1, salt1img

var whippingCream, whippingCreamimg, whippingCream1, whippingCream1img
var PowderedSugar
var start, bowl, starimg, bowlimg

var CupcakeTask1img, CupcakeTask1, CupcakeTask2img, CupcakeTask2


var gameState = "serve"

function preload(){
  bgimg = loadImage("images/bakery.jpg");
  playimg = loadImage("images/play.png");
  recipeBgimg = loadImage("images/table.jpg")
  VanillaCupcakeImg = loadImage("images/VanillaCupcake.png")
  RecipeBookImg = loadImage("images/RecipeBook.png")
  flourimg = loadImage("images/flour.png")
  flour1img = loadImage("images/egg1.png")
  sugarimg = loadImage("images/sugar.png")
  eggimg = loadImage("images/eggs.png")
  milkimg = loadImage("images/milk.png")
  vanillaimg = loadImage("images/vanilla.png")
  BakingPowderimg = loadImage("images/bakingPowder.png")
  butterimg = loadImage("images/butter.png")
  saltimg = loadImage("images/salt.png")
  bowlimg = loadImage("images/Bowl.png")
  startimg = loadImage("images/Start.png")
  
  Sugar1img = loadImage("images/sugar1.png")
  egg1img = loadImage("images/egg1.png")
  milkimg = loadImage("images/milk.png")
  vanilla1img = loadImage("images/vanilla1.png")
  BakingPowder1img = loadImage("images/bakingPowder1.png")
  butterimg = loadImage("images/butter.png")
  salt1img = loadImage("images/salt1.png")
  whippingCreamimg = loadImage("images/WhippedCream.png")

  CupcakeTask1img = loadImage("images/Task1.png")
  CupcakeTask2img = loadImage("images/Task2.png")
  CupcakeTask3img = loadImage("images/Task3.png")
  CupcakeTask4img = loadImage("images/Task4.png")
  CupcakeTask5img = loadImage("images/Task5.png")
  CupcakeTask6img = loadImage("images/Task6.png")
  CupcakeTask7img = loadImage("images/Task7.png")
  CupcakeTask8img = loadImage("images/Task8.png")
  CupcakeTask9img = loadImage("images/Task9.png")
  CupcakeTask10img = loadImage("images/Task10.png")
  CupcakeTask11img = loadImage("images/task11.png")
  CupcakeTask12img = loadImage("images/task12.png")
  CupcakeTask13img = loadImage("images/Task13.png")

  CupcakeHint1img = loadImage("images/Hint1.png")
  CupcakeHint2img = loadImage("images/Hint2.png")

  Cup1img = loadImage("images/1cup.png")
  Cup12img = loadImage("images/1-2cup.png")
  Cup13img = loadImage("images/1-3cup.png")
  cup14img = loadImage("images/1-4cup.png")
}


function setup(){
  createCanvas(1200, 800);
  bg = createSprite(600, 400);
  bg.addImage(bgimg)
  bg.scale = 2
  play = createSprite(600, 400)
  play.addImage( playimg)
  play.scale = 0.5

  recipeBg = createSprite(600, 400);
  recipeBg.addImage(recipeBgimg)
  recipeBg.scale = 2

  recipeBg.visible=false

  VanillaCupcake = createSprite(100, 550);
  VanillaCupcake.addImage(VanillaCupcakeImg)
  VanillaCupcake.scale = 0.2
  VanillaCupcake.visible = false

  RecipeBook = createSprite(200, 200);
  RecipeBook.addImage(RecipeBookImg)
  RecipeBook.scale = 0.5
  RecipeBook.visible = false

  //ingridents 
  flour = createSprite(100, 500)
  flour.addImage(flourimg)
  flour.scale = 0.5
  flour.visible = false

  BakingPowder = createSprite(200, 500)
  BakingPowder.addImage(BakingPowderimg)
  BakingPowder.scale = 0.3
  BakingPowder.visible = false

  sugar = createSprite(250, 500);
  sugar.addImage(sugarimg)
  sugar.scale = 0.09
  sugar.visible = false

  egg = createSprite(200, 560);
  egg.addImage(eggimg)
  egg.scale = 0.2
  egg.visible = false

  Vanilla = createSprite(360, 500)
  Vanilla.addImage(vanillaimg)
  Vanilla.scale = 0.3
  Vanilla.visible = false
  
  milk = createSprite(300, 560)
  milk.addImage(milkimg)
  milk.scale = 0.25
  milk.visible = false

  butter = createSprite(75, 590)
  butter.addImage(butterimg)
  butter.scale = 0.15
  butter.visible = false

  salt = createSprite(250, 570)
  salt.addImage(saltimg)
  salt.scale = 0.05
  salt.visible = false

  whippingCream = createSprite(900, 550)
  whippingCream.addImage(whippingCreamimg)
  whippingCream.scale =  0.5
  whippingCream.visible = false


  bowl = createSprite(600, 540)
  bowl.addImage(bowlimg)
  bowl.scale = 0.25
  bowl.visible = false

  
}




function draw(){
background(0)
drawSprites();


  if (mousePressedOver(play)){
      gameState = "play"
  }

  if(mousePressedOver(VanillaCupcake)){
      gameState = "VanillaCupcake"
  VanillaCupcake.visible = false 
  }

  
if(gameState==="VanillaCupcake"){
  textSize(60)
    fill("black")
    text("Vanilla Cupcake Recipe",350, 100)
    
    textSize (30)
    text("Cake Ingridents", 100, 400)
    RecipeBook.visible = true
    flour.visible = true
    sugar.visible = true
    egg.visible = true
    Vanilla.visible = true
    milk.visible = true
    BakingPowder.visible = true
    butter.visible = true
    salt.visible = true
    whippingCream.visible = true
    bowl.visible = true

    var cupcakeStartButton = createSprite(1000, 160)
    cupcakeStartButton.addImage("start", startimg)
    cupcakeStartButton.scale = 0.2
    cupcakeStartButton.visible =  true

    if(mousePressedOver(cupcakeStartButton)){
      cupcakeStartButton.visible =  false
      cupcakeTask = createSprite(600, 200, 300, 50)
      cupcakeTask.addImage( CupcakeTask1img)
      cupcakeTask.scale = 0.3
    }

  /* if(mousePressedOver(flour))
   {
     cupcakeTaskNumber = 1;
     flour.addImage(flour1img)
     flour.x = 970
     flour.y = 550
     cupcakeTask.addImage(CupcakeTask2img);
   }
   else if(mousePressedOver(salt)){
     cupcakeTaskNumber = 2
   }
   else if(mousePressedOver(BakingPowder)){
     cupcakeTaskNumber = 3
   }
   else if(mousePressedOver(butter)){
     cupcakeTaskNumber = 4
   }
   else if(mousePressedOver(sugar)){
     cupcakeTaskNumber = 5
   }
   else if(mousePressedOver(egg)){
     cupcakeTaskNumber = 6
   }
   else if(mousePressedOver(Vanilla)){
     cupcakeTaskNumber = 7
   }
   else if(mousePressedOver(milk)){
     cupcakeTaskNumber = 8
   }
   else if(mousePressedOver(whippingCream)){
    cupcakeTaskNumber = 9
   }
   else if(mousePressedOver(PowderedSugar)){
     cupcakeTaskNumber = 10
   }
   else {cupcakeTaskNumber = 11}
    
   /*switch(cupcakeTaskNumber){
     case 1: cupcakeTask.addImage("task1", CupcakeTask2img);
     break;
     case 2: cupcakeTask.addImage("task1", CupcakeTask3img)
     break;
     default: break;
  }*/

  
}

  if(gameState==="play"){
    recipeBg.visible=true
   bg.visible=false
   VanillaCupcake.visible = true
   textSize(60)
   fill("black")
   text("Choose A Recipe", 350, 100)
  }
 
}