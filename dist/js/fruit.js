var fruitObj = function () {
    this.alive = [];//boolean
    this.x = [];
    this.y = [];
    this.l = [];//果实的长
    this.spd = [];
    this.orange = new Image();
    this.blue = new Image();
    this.fruitType = [];//加入多种颜色的果实

}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.alive[i] = false; 
        this.x[i] = 0;
        this.y[i] = 0;
        this.l[i] = 0;
        this.spd[i] = Math.random() * 0.005 + 0.005;//成熟和上浮的速度
        this.born(i);//所有的果实都出生
        this.fruitType[i] = "";
    }
    this.orange.src = "./src/fruit.png";
    this.blue.src = "./src/blue.png";
}
fruitObj.prototype.draw = function () {


    for (var i = 0; i < this.num; i++) {
        if (this.alive[i]) {
            if(this.fruitType[i]=="blue"){var pic=this.blue;}
            else{pic=this.orange;}
            if (this.l[i] <= 10) { this.l[i] += this.spd[i] * deltaTime; }
            else { this.y[i] -= this.spd[i] * 7 * deltaTime; }//果实上浮
            ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
            if (this.y[i] < 10) {
                this.alive[i] = false;
            }
        }
    }

}

fruitObj.prototype.born = function (i) {
    var aneID = Math.floor(Math.random() * ane.num);
    this.x[i] = ane.x[aneID];
    this.y[i] = canHeight - ane.len[aneID];
    this.l[i] = 0;
    this.alive[i] = true;
    var a = Math.random();
    if (a < 0.4) { this.fruitType[i] = "blue" }
    else { this.fruitType[i] = "orange" }
}
function fruitMonitor() {
    var num = 0;
    for (var i = 0; i < fruit.num; i++) {
        if (fruit.alive[i]) {
            num++;
        }
    }

    if (num < 15) {
        // console.log('num < 15');
        sendFruit();//send friut
        return;
    }
}

fruitObj.prototype.dead=function(i){
    this.alive[i]=false;
}

function sendFruit() {
    for (var i = 0; i < fruit.num; i++) {
        if (!fruit.alive[i]) {

            fruit.born(i)
            return;
        }

    }

}