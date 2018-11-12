var babyObj = function () {
    this.x;
    this.y;
    //this.babyEye = new Image();
    //this.babyFade = new Image();

    this.angle;

    this.babyTailTimer = 0;
    this.babyTailCount = 0;

    this.babyEyeTimer = 0;
    this.babyEyeCount = 0;
    this.babyEyeInterval = 1000;

    this.babyFadeTimer = 0;
    this.babyFadeCount = 0;
}

babyObj.prototype.init = function () {
    this.x = canWidth * 0.5 - 50;
    this.y = canHeight * 0.5 + 50;
    // this.babyEye.src = "./src/babyEye0.png";
    // this.babyFade.src = "./src/babyFade0.png";
    this.angle = Math.PI;

}

babyObj.prototype.draw = function () {

    this.x = lerpDistance(mom.x, this.x, 0.99);
    this.y = lerpDistance(mom.y, this.y, 0.99);

    var deltaY = mom.y - this.y;
    var deltaX = mom.x - this.x;
    var beta = Math.atan2(deltaY, deltaX) + Math.PI;//?
    this.angle = lerpAngle(beta, this.angle, 0.9);

    //babyTail count
    this.babyTailTimer += deltaTime;
    if (this.babyTailTimer > 50) {
        this.babyTailCount = (this.babyTailCount + 1) % 8;
        this.babyTailTimer %= 50;
    }

    //babyEye count
    this.babyEyeTimer += deltaTime;
    if (this.babyEyeTimer > this.babyEyeInterval) {
        this.babyEyeCount = (this.babyEyeCount + 1) % 2;
        this.babyEyeTimer = this.babyEyeTimer % this.babyEyeInterval;
        if (this.babyEyeCount == 0) {
            this.babyEyeInterval = Math.random() * 1500 + 2000;
        } else {
            this.babyEyeInterval = 200;
        }

        
    }
    //babyFade count
    this.babyFadeTimer += deltaTime;
 
    if (this.babyFadeTimer > 300) {
        this.babyFadeCount = this.babyFadeCount + 1;
        this.babyFadeTimer %= 300;
        if (this.babyFadeCount > 19) {
            this.babyFadeCount = 19;
            data.gameOver=true;
        }
    }

    ctx1.save();
    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle);
    var babyTailCount = this.babyTailCount;
    ctx1.drawImage(babyTail[babyTailCount], -babyTail[babyTailCount].width * 0.5 + 24, -babyTail[babyTailCount].height * 0.5);
    var babyFadeCount = this.babyFadeCount;

    ctx1.drawImage(babyFade[babyFadeCount], -babyFade[babyFadeCount].width * 0.5, -babyFade[babyFadeCount].height * 0.5);
    var babyEyeCount = this.babyEyeCount;
    ctx1.drawImage(babyEye[babyEyeCount], -babyEye[babyEyeCount].width * 0.5, -babyEye[babyEyeCount].height * 0.5);
    ctx1.restore();

}