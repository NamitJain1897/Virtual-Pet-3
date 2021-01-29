var database;
var dog,dogImage,dogImage1,food,foodImage,foodStock,foodRef;

function preload()
{
  //load images here
 // backgroundImg = loadImage("th (1).jpg");
  dogImage = loadImage("images/virtual pet images/Dog.png");
  dogImage1 = loadImage("images/virtual pet images/happy dog.png");
  foodImage = loadImage("images/virtual pet images/Food Stock.png");
  bathImage = loadImage("images/virtual pet images/Wash Room.png");
  sleepImage = loadImage("images/virtual pet images/Bed Room.png");
  playImage = loadImage("images/virtual pet images/Garden.png");
  walkImage = loadImage("images/virtual pet images/running.png");
  

}

function setup() {
  createCanvas(480, 480);
  database = firebase.database();

  //Sprites

  food = createSprite(250,400,50,50);
  food.addImage(foodImage);
  food.scale = 0.3;
  


  dog = createSprite(400,150);
  dog.addImage(dogImage);
  dog.scale = 0.2;

  //Firebase
  
  //Reference for food
  foodRef = database.ref("Food");
  foodRef.on("value",read,console.log("error"));

  foodRef.set(20);


}


function draw() {  
  background("blue");
  drawSprites();
  
  //add styles here
  textSize(32);
  fill("blue");
  text("Bones in the Stock: "+foodStock,50,300);
 // textSize(25);
  //text("Hi! Will you help me in doing some works ?",50,70)
  decreaseFood();
  if(foodStock===0){
    foodStock = 20;
  }

  if(keyWentUp(DOWN_ARROW)){
    
    dog.addImage(bathImage);
    
    
  }

  if(keyWentUp(LEFT_ARROW)){
   
    dog.addImage(sleepImage);
    dog.scale = 0.3
    
    
  }

  if(keyWentUp(RIGHT_ARROW)){
   
    dog.addImage(playImage);
    dog.scale = 0.3
    
    
  }

  if(keyCode === 32){
    
    dog.addImage(walkImage);
    dog.scale = 0.3
 }

}

function read(data){
  foodStock = data.val();
}

function decreaseFood(){
  if(keyWentDown(UP_ARROW)){
  foodRef = database.ref("Food");
  foodStock = foodStock - 1;
  foodRef.set(foodStock);
  dog.addImage(dogImage1);
  food.x = 350;
  food.y = 200;
  food.scale = 0.1;

  }
  
  if(keyWentUp(UP_ARROW)){
    
    foodStock = foodStock;
    dog.addImage(dogImage);
    fill("yellow");
    text('Thank you 🥳🥳',10,80);
    food.x = 250;
    food.y = 400;
    food.scale = 0.2;
    
  }
}

