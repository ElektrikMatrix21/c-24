const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var ground;
var tanker;
var shootingBall, bubbleBall, ball;

function setup() {
    createCanvas(800,400);
    Engine = Engine.create();
    world = Engine.world;

    ground = new Ground
    tanker = new Tanker
    shootingBall = new ShootBall
    bubbleBall = new CanonBall
}

function draw() {
    background("white");
    
    Engine.update(engine);
    ground.display();
    tanker.display();
    shootingBall.display();
    bubbleBall.display();

    if(keyReleased=true) {
        ball.display();
    }
    
}

function keyReleased() {
    if(keyDown("space")) {
        ball = new Ball
        return true
    } 
}