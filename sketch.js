const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);
  ground1 = new Ground(1300, 650, 200,20);

  hero = new Hero(200,300,250);
  rope = new Rope(hero.body, { x: 200, y: 300 });
  monster = new Monster(1300,550,300);

  //line 1
  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);

  //line 2
  box5 = new Box(800, 100, 70, 70);
  box6 = new Box(800, 100, 70, 70);
  box7 = new Box(800, 100, 70, 70);
  box8 = new Box(800, 100, 70, 70);
  box17 = new Box(800,100,70,70);

  //line 3
  box9 = new Box(700, 100, 70, 70);
  box10 = new Box(700, 100, 70, 70);
  box11 = new Box(700, 100, 70, 70);
  box12 = new Box(700, 100, 70, 70);
  box18 = new Box(700,100,70,70);
  
  //line 4
  box13 = new Box(600, 100, 70, 70);
  box14 = new Box(600, 100, 70, 70);
  box15 = new Box(600, 100, 70, 70);
  box16 = new Box(600, 100, 70, 70);

  //line 5
  box19 = new Box(500,100,70,70);
  box21 = new Box(500,100,70,70);

  //line 6
  box20 = new Box(1000,100,70,70);
  box22 = new Box(1000,100,70,70);
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();

  box5.display();
  box6.display();
  box7.display();
  box8.display();

  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();

  hero.display();
  rope.display();
  monster.display();

  textSize(40);
  fill("black");
  text("Drag the Hero Stone and Release it, to launch it towards the blocks",50,60);

  textSize(30);
  fill("black");
  text("Press SPACE for a second chance!",750,650);
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
  rope.fly();
}

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(hero.body, {x:200, y:400})
		rope.attach(hero.body);
	}
}

async function getBgImg() {

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "gamingbackground2.png";
    }
    else{
        bg = "th (1).jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
