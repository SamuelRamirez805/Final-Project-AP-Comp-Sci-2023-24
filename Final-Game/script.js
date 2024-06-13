let speed = 5;
let jumpSpeed = -7;
let acceleration= 25;
let hero, obstacle, score;
let level = 1;
let isStartScreen = true;
let button;
let nextLevelButton;


function setup() {
createCanvas(windowWidth, windowHeight);

  startScreen()
}

function startScreen() {
background('black');
  fill('white');
  textSize(30)
  
   text("Welcome to Space Ball",windowWidth / 2, windowHeight/8)
  textSize(30)
   text("To compelete this game you must finish all levels without having your Space Ball touch the bomb towers", windowWidth / 4 , windowHeight/5);
  textSize(15);
  button = new Sprite(windowWidth / 2, windowHeight / 3, 250, 100, 'k')
   isStartScreen = true;
  button.text = "Click to play"
  button.visible = true; 

}
function startGame() {
  isStartScreen = false;
  button.visible = false;
  world.autoStep= false;
  world.gravity.y = acceleration;
  score = 0;
  speed = 2;
  hero = new Sprite(windowWidth / 4    , height / 2, 20, 'd'   );
  hero.color = 'yellow'
  obstacle = new Group()
  obstacle.collider = 'k';
  obstacle.h = 300
  obstacle.w = 50
  obstacle.color = 'green';

  
  setInterval(spawn, 2000)     
  setInterval(difficulty, 5000)
  setInterval(setScore, 500)

  hero.overlaps(obstacle, lose)

}

function draw() {
 
 if (isStartScreen) {
   if (button.mouse.pressing()) startGame();
 } else {
   runGame();
   checkWinCondition(); 
 }
}
function checkWinCondition() {
  if (score >= 100) {
    displayWinScreen();
  }
}
function displayWinScreen() {
  clear();
  background('white');
  textSize(50);
  fill(0);
  textSize(30)
  text("High score: " + score,50,50);
  text("Current Level: " + level, 50,100);
  text("You Win!", windowWidth / 2, 200);
  setScore();
  setLevel();
 nextLevelButton = createButton("Next Level");
  nextLevelButton.position(windowWidth / 2, 300);
  nextLevelButton.size(150, 50);
  nextLevelButton.mousePressed(goToNextLevel);
if (level === 5){
   obstacle.removeAll();
   allSprites.removeAll();
    background('white');
    textSize(50);
    fill(0);
    textSize(30)
    text("High score: " + score,50,50);
    text("Current Level: " + level, 50,100);
    text("Congratualtions, You have beaten the game !", windowWidth / 4, 200);
   nextLevelButton = createButton("Restart the Game");
    nextLevelButton.position(windowWidth / 2, 300);
    nextLevelButton.size(150, 50);
    nextLevelButton.mousePressed(refreshPage);
}
  noLoop(); 
}
function goToNextLevel() {
  if (nextLevelButton) {
      nextLevelButton.remove();
  }

  changeColors(level)
 speed = 10;
  obstacle.removeAll();
  score = 0;
  hero.x = windowWidth / 4;
  hero.y = height / 2;
  loop();

  
}
function runGame() {
   background(0);
  if (level === 1) {
    background('black'); 
    obstacle.color = 'green'; 
  } 
  else if (level === 2) {
  background('black'); 
    obstacle.color = 'white'; 
  } 
  else if (level ===3) {
   background('black');
    obstacle.color = 'red'; 
  }
  else if (level==4){
    background('black');
    obstacle.color = 'purple';
  }
  else if (level==5) {
    background('black');
    obstacle.color = '';
  }
  else {
    background('black');
    obstacle.color = 'green';
  }  
   controls()
 
   world.step();   
    obstacle.vel.x = -speed;   
  fill(255)
  textSize(30)
  text("high score: " + score,50,50);
  text("Current Level: " + level, 50,100);
  
}


function difficulty(){
  speed += 2;
}
function lose(){     

   obstacle.removeAll();
  
  
  allSprites.removeAll();
   text("high score: " + score,50,50)
  text("You lose", windowWidth/2, 200)
   let refreshButton = createButton("Refresh Page");
   refreshButton.position(windowWidth / 2, 250);
   refreshButton.size(150, 50);
   refreshButton.mousePressed(refreshPage);
    noLoop();
 
}
function changeColors(level) {
  clear()
  if (level === 1) {
    background('black'); 
    obstacle.color = 'green'; 
  } 
  else if (level === 2) {
background('white'); 
    obstacle.color = 'blue'; 
  } 
  else if (level ===3) {
   background('black'); 
    obstacle.color = 'red'; 
  }
  else if (level==4){
    background('grey');
    obstacle.color = 'purple';
  }
  else if (level==5) {
    background('black');
    obstacle.color = 'green';
  }
  else {
    background('black');
    obstacle.color = 'green';
  }
}
function lastStage(){

}

function refreshPage() {
  location.reload();
}
function controls(){

  if (kb.presses('space')){
    hero.vel.y= jumpSpeed;     
  }

  if(hero.y > height - 50){
 
    lose()
  }
  else if(hero.y < 50){
    
    lose( )
 }
}

function spawn(){
  if (isStartScreen) return;

  let gapSize = random(150, 200);
  let distanceBetweenObstacles = 100; 

  let top = new obstacle.Sprite();
  top.h = random(100,windowHeight-500);
  top.x = hero.x + width + distanceBetweenObstacles; 
  top.y = top.h / 2;
  let bottom = new obstacle.Sprite();
  bottom.h = height - gapSize - top.h;
  bottom.y = gapSize + top.h + bottom.h / 2;
  bottom.x = hero.x + width + distanceBetweenObstacles;



}
function setScore (){
score += 1;
 }

function setLevel(){
  level += 1;
}   