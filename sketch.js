let myXPos = 100;
let myYPos = 100;
let mySize;

let enemyXPos = 300;
let enemyYPos = 300;
let enemySize;
let score = 0

function preload(){
  // imageMode(CENTER)
  jig = loadImage("images/jigjig.webp")
  poli = loadImage("images/poli.webp")
}

function setup() {
  createCanvas(500, 500);
  noStroke();

  mySize = random(50, 100);
  enemySize = random(50, 100);
}

function draw() {
  background(0);
  imageMode(CENTER)
  image(jig, myXPos, myYPos, mySize, mySize)
  image(poli, enemyXPos, enemyYPos, enemySize, enemySize)
  

  fill(255, 0, 0);
  // ellipse(enemyXPos, enemyYPos, enemySize, enemySize);

  fill(0, 0, 255);
  // ellipse(myXPos, myYPos, mySize, mySize);

  if (keyIsDown(LEFT_ARROW)) {
    myXPos -= 3;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    myXPos += 3;
  }

  if (keyIsDown(UP_ARROW)) {
    myYPos -= 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    myYPos += 3;
  }

  let distance = dist(myXPos, myYPos, enemyXPos, enemyYPos);

  if (distance <= (mySize / 2) + (enemySize / 2)) {
    fill(random(255), random(255), random(255));
    // textSize(22);
    // text("I'm colliding with my enemy. Ouch!", 20, 20);
    enemyXPos = random(0,500)
    enemyYPos = random(0,500)
    score++
  }
  textSize(20);
  text("Score: " + score, 20, 20);
}