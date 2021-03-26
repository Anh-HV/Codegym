var minGap = 100;
var maxGap=200;
var gap = randGap();
let frame = 0 ;
var myObstacle=[];
var down1 = false;

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const imgdog = document.getElementById("dog");
const img = document.getElementById("catch");


const obs = new Obstacle(img);
let dog = new Dog(imgdog,32,0,32,32,50,500,60,60);

function jump(evt) {
    if(down1) return;
    down1 = true;
    if(evt.keyCode == 38 || evt.keyCode == 32|| evt.keyCode == 87 ){
        dog.speed=-4;
        dog.change();
    }
}
function down() {
    dog.change();
    down1 = false;
}

function everyinterval(n) {
    if(frame%n ==0) return true;
    return false;
}

function randGap() {
    return Math.floor(minGap+Math.random()*(maxGap-minGap+1));
}

function clear() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function checkLose() {
    for(let i=0;i<myObstacle.length;i++){
        if(dog.crashWith(myObstacle[i])){
            stop();
            return;
        }
    }
}
for(let i=0;i<myObstacle.length;i++){
console.log(dog.crashWith(myObstacle[i]));}


function stop() {
    alert("You lose!!");
    document.cancelAnimationFrame(startGame);
    return;
}
ctx.font="30px Arial";
ctx.fillStyle = "black";
ctx.textAlign = "center";
let score=0;
function startGame(){

    window.addEventListener("keydown",jump);
    window.addEventListener("keyup",down);
  
    for(let i=0;i<myObstacle.length;i++){
        console.log(myObstacle[i]);
    }
    checkLose();
    clear();
    let sc = score++;
    
    ctx.fillText("Score:" + Math.floor(sc),800, 100);
    obs.update();
    dog.draw();
    dog.newPos();
    requestAnimationFrame(startGame);  
}

startGame();
