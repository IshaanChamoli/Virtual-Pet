//Create variables here
var dog, happyDog, Mydatabase, foodS, foodStock;


function preload()
{
dog=loadImage ("./images/dogImg.png")
doghappy=loadImage ("./images/dogImg1.png")

}

function setup() {
	createCanvas(500, 500);
Mydatabase=firebase.database();
foodStock=Mydatabase.ref('Food');
foodStock.on("value",readStock);
dogsprite=createSprite (250,250);
dogsprite.addImage (dog);
dogsprite.scale = .3 ;
}

function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){

  writeStock(foodS);
  dogsprite.addImage(doghappy);
}


fill ("white");
text ("Number of Treats Left:" + foodS, 150, 100)



  drawSprites();
  //add styles here

}

function readStock (data){

  foodS= data.val();
  console.log(foodS);
  }

  function writeStock(x){

    if (x<=0){
  x=0;
    } else {
  x=x-1 ; 
    }
  
  
    Mydatabase.ref("/").update({
  
      Food: x
    })
  }
  