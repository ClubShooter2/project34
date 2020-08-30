//Create variables here
var food; 
var dogImg, happydog;
var happydogImg, dog;
var food;
var database;
var canvas;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happydogImg = loadImage("images/happydog(1).png");
}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  food.getfood();
  dog.addImage("dog1", dogImg);
}

function draw() {  
  background(46, 139, 87);
  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW)){
    food = food - 1;
    happydog.addImage("happydog1",happydogImg);
  }
  text("Feed your pet and make him feel happy", 250, 50);
  fill("red");
  stroke(20);
}



