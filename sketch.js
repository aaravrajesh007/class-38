var GS=0;
var pc=0;
var form,player,game;
var database;
var allPlayers;
var cars, car1,car2,car3,car4;
function setup(){
    database=firebase.database();
    createCanvas(displayWidth-100,displayHeight-220);
    game = new Game();
    game.getState();
    game.start();
   }

function draw(){
    background("white");
   if(pc===4){
       game.updateGS(1)
   }
   if(GS===1){
       clear();
       game.play();
   }
}

