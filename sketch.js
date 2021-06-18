const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;
var arrow;

//Declare an array for arrows playerArrows = [ ]


var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(
    340,
    playerBase.body.position.y - 180,
    120,
    120
  );

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
 


}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()

 // Use for loop to display arrow using showArrow() function
for (var i = o; i < arrow.lenght; i++) {
  showArrows(arrows[i], i);
}

function keyPressed() {

  if(keyCode === 32){
    // create an arrow object and add into an array ; set its angle same as angle of playerArcher
var posX = playerArcher.body.position.x;
var posY = playerArcher.body.position.y;
var angle = playerArcher.body.angle+PI/2;

var arrow = new PlayerArrow(posX, posY, 100, 10);

arrow.trajactory=[];
Matter.Body.setAngle(arrow.body, angle);
playerArrow.push(arrow);

  }
}

function keyReleased () {

  if(keyCode === 32){
    //call shoot() function for each arrow in an array playerArrows
  if(this.body.velocity.x > 0 &&this.body.position.x > 300) {
var position = [this.body.position.x, this.body.position.y];
}
class arrow {
 constructor(x, y) {
  var options = {
   restitution: 0.8,
    friction 1.0,
    density: 1.0,
    isStatic: true
};
this.r= 30;
this.body = body.circle(x, y, this.r,options);
this.image = loadImage("./assets/arrow.png");
this.trajectory = [];
world.add(world, this.body);
}

//Display arrow and Tranjectory
function showArrows(index, arrows) {
arrow.display();
}
