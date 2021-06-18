
var mouse1,mouse2,mouse1Img,mouse2Img;
var bg,bgImg,cat1,cat2,cat1Img,cat2Img;



function preload() {
    //load the images here
    bgImg=loadImage("gareden.png")
    cat1Img=loadAnimation("cat1.png")
    cat2Img=loadAnimation("cat2.png,cat3.png")
    mouse1Img=loadAnimation("mouse1.png")
    mouse2Img=loadAnimation("mouse2.png,mouse3.png")
    

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat1=createSprite(500,700,20,40)
    cat1.loadAnimation("walking",cat1Img)

}

function draw() {
    background("bgImg");
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
