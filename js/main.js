var can1;
var can2;

var ctx1;
var ctx2;
var ane;
var fruit;
var mom;
var baby;
var bgPic = new Image();
var data;
var wave;

var canHeight;
var canWidth;

var lastTime;
var deltaTime;

var mx;
var my;

var dust;
var dustPic=[];

var babyTail = [];
var bigTail = [];
var babyEye = [];
var babyFade = [];
var momEye = [];
var momBodyOra = [];
var momBodyBlue = [];

document.body.onload = game;//html中的body加载完执行game函数
function game() {
    init();
    lastTime = Date.now();
    gameloop();//初始后执行loop循环
    bgPic.src = "./src/background.jpg";
}
function init() {
    //获取canvas context
    can1 = document.getElementById("canvas1");//fishes,dust,UI,circle
    ctx1 = can1.getContext("2d");
    can2 = document.getElementById("canvas2");//background,ane,fruits
    ctx2 = can2.getContext("2d");

    can1.addEventListener("mousemove", onMousemove, false)

    canHeight = can1.height;
    canWidth = can1.width;
    ane = new aneObj();
    ane.init();
    fruit = new fruitObj();
    fruit.init();
    mom = new momObj();
    mom.init();
    baby = new babyObj();
    baby.init();
    mx = canWidth * 0.5;
    my = canHeight * 0.5;

    for (var i = 0; i < 8; i++) {
        babyTail[i] = new Image();
        bigTail[i] = new Image();
        babyTail[i].src = "./src/babyTail" + i + ".png";
        bigTail[i].src = "./src/bigTail" + i + ".png";
    }

    for (var i = 0; i < 2; i++) {
        babyEye[i] = new Image();
        momEye[i] = new Image();
        babyEye[i].src = "./src/babyEye" + i + ".png";
        momEye[i].src = "./src/bigEye" + i + ".png";
    }

    for (var i = 0; i < 20; i++) {
        babyFade[i] = new Image();
        babyFade[i].src = "./src/babyFade" + i + ".png";

    }
    data = new dataObj();
    for (var i = 0; i < 8; i++) {
        momBodyOra[i] = new Image();
        momBodyBlue[i] = new Image();
        momBodyOra[i].src = "./src/bigSwim" + i + ".png";
        momBodyBlue[i].src = "./src/bigSwimBlue" + i + ".png";
    }
    wave = new momObj();
    wave.init();

    for(var i=0;i<7;i++){
        dustPic[i]=new Image()
        dustPic[i].src='./src/dust'+i+'.png'
    }

    dust=new dustObj()
    dust.init()
    
}
function gameloop() {
    window.requestAnimFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    if (deltaTime > 50) { deltaTime = 50 };
    drawBackground();
    ane.draw();
    fruit.draw();
    fruitMonitor();

    ctx1.clearRect(0, 0, canWidth, canHeight)
    mom.draw();
    baby.draw();

    momFruitCollision();
    momBabyCollision();

    data.draw();

    dust.draw();
}

function onMousemove(e) {
    if(!data.gameOver){
        if (e.offSetX || e.layerX) {
            mx = e.offSetX == undefined ? e.layerX : e.offSetX;
            my = e.offSetY == undefined ? e.layerY : e.offSetY;
    
            // mx = e.offsetX || e.layerX
            // my = e.offsetY || e.layerY
    
        }
    }
   

}
