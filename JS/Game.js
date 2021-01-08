class Game{
     constructor(){

     }
    getState(){
        var GSref=database.ref('gameState');
        GSref.on("value",function(data){
            GS=data.val();
        })

    }
    updateGS(state){
        database.ref('/').update({
          'gameState':state  
        })
    }
   async start(){
        if(GS===0){
            player=new Player();
            var pcref=await database.ref('playerCount').once("value");
            if(pcref.exists()){
                pc=pcref.val();
                player.getCount();
            }
            form=new Form();
            form.display();
        }
        car1=createSprite(100,200);
        car2=createSprite(300,200);
        car3=createSprite(500,200);
        car4=createSprite(700,200);
        cars=[car1,car2,car3,car4]
    }
    play(){
        form.formHide();
                Player.getPlayerinfo();
        if(allPlayers!==undefined){
            var index=0;
            var x=0;
            var y;
            for( var plr in allPlayers){
                index=index+1
                 y=displayHeight-allPlayers[plr].distance;
                 x=x+200
                 cars[index-1].x=x
                 cars[index-1].y=y
              if(index===player.index){
                  cars[index-1].shapeColor="red";
                  camera.position.x=displayWidth/2;
                  camera.position.y=cars[index-1].y
              }
            }
        }
      if(keyIsDown(UP_ARROW)&&player.index!==null){
          player.distance+=50;
          player.update();
      }  
    
    }
}