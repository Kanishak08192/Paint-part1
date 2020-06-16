var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

var drawing = [];

var dbDrawing = [];

function preload(){

}

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  
}


function draw(){
 readData();
 beginShape();
 stroke("green");
 strokeWeight(4);
 noFill();
for(var i = 0; i<dbDrawing.length; i++){
vertex(dbDrawing[i].x , dbDrawing[i].y);

 endShape();
}
}

function mouseDragged(){
  var point = {x:mouseX , y:mouseY}
  drawing.push(point);
  var drawingRef = database.ref('drawing');
  drawingRef.set({
    'd':drawing
  })

}

function readData(){
  database.ref('drawing').on("value",(data)=>{
    dbDrawing = data.val().d
  })

  
}
