var cat, catWalk, catSitting, catLying;

var mouse, mouse1, mouse2, mouse3;

var bakground, bakgroundImage;

var num = 0;


function preload() {
    catWalk = loadAnimation("images/cat3.png","images/cat2.png");
    catSitting = loadAnimation("images/cat4.png");
    catLying = loadAnimation("images/cat1.png");
    bakgroundImage = loadImage("images/garden.png");
    mouse1 = loadAnimation("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouse3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(windowWidth + 1000, windowHeight);

    bakground = createSprite(width / 2, height / 2, 10, 10);
    bakground.addImage(bakgroundImage);
    bakground.width = width;
    bakground.height = height;
    bakground.scale = 1.5;

    cat = createSprite((width / 2) + 500, (height / 2) + 200);
    cat.addAnimation("lying", catLying);    
    cat.scale = 0.2;
    cat.setCollider("rectangle", 0, 0, 200, 200);

    mouse = createSprite((width / 2) - 500, (height / 2) + 200);
    mouse.addAnimation("mousea2", mouse1);
    mouse.setCollider("rectangle", 0, 0, 200,200);
    mouse.scale = 0.2;

    keyPressed();

}

function draw() {

    background(255, 255, 255);
    drawSprites();    

    if(cat.x - mouse.x < ((cat.width - mouse.width)/2)){

       cat.addAnimation("sit", catSitting);
       cat.changeAnimation("sit");
       mouse.addAnimation("mousea1", mouse3);
       mouse.changeAnimation("mousea1");
       cat.x = (width / 2) - 300, (height / 2) + 200;

    }
}


function keyPressed(){

if(keyCode === LEFT_ARROW){
 cat.x = cat.x - 20;
 cat.addAnimation("walk", catWalk);
 cat.changeAnimation("walk");
 mouse.addAnimation("mousea3", mouse2);
 mouse.changeAnimation("mousea3");
}
}
