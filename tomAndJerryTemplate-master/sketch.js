
var bg,bgImg
var cat, catImg




function preload() {
    //load the images here

    bgImg=loadImage("garden.png")
    catImg=loadAnimation("cat1.png","cat2.png")}

function setup(){
    createCanvas(1000,800);
    
    //create tom and jerry sprites here
   cat=createSprite(300,300,40,50)
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
