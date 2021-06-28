var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)//its the same algorithm we have written for c 20 for isTouching of two rectangles
    { tom.velocityX= 0
        tom.addAnimation("tom3",tomImg3)
    tom.changeAnimation("tom3",tomImg3)
    tom.x=250
    jerry.addAnimation("jerry3",jerryImg3)
    jerry.changeAnimation("jerry3",jerryImg3)
        //task2
       //1.make toms velocity to zero 2. add and change Animation for tom as tomImg3 
        //3. reset toms position 4.add and change animation for jerry
        
    
        
        
    }

    drawSprites();
}


function keyPressed(){
//Task1
//if keycode===Left_arrow add velocity to tom add and change Animation of tom to tomImg2 and jerry to jerryImg2
if (keyCode===LEFT_ARROW){
    jerry.addAnimation("jerry2",jerryImg2)
    jerry.changeAnimation("jerry2",jerryImg2)
    tom.addAnimation("tom2",tomImg2)
    tom.changeAnimation("tom2",tomImg2)
    tom.velocityX= -3
}
    
}