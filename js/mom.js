var momObj = function () {
    this.x;
    this.y;
    //this.bigEye=new Image();
    //this.bigSwim=new Image();

    this.angle;

    this.bigTailTimer = 0;
    this.bigTailCount = 0;

    this.momEyeTimer = 0;
    this.momEyeCount = 0;
    this.momEyeInterval = 1000;

    this.momBodyCount = 0;
}
momObj.prototype.init = function () {
    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;
    this.angle = 0;
    //this.bigEye.src="./src/bigEye0.png";
    //this.bigSwim.src="./src/bigSwim0.png";


}
momObj.prototype.draw = function () {
    this.x = lerpDistance(mx, this.x, 0.98);
    this.y = lerpDistance(my, this.y, 0.98);

    var deltaY = my - this.y;
    var deltaX = mx - this.x;
    var beta = Math.atan2(deltaY, deltaX) + Math.PI;//?

    // this.angle=lerpAngle(beta,this.angle,0.9);
    this.angle = lerpAngle(this.angle, beta, 0.9);

    //bigTail count
    this.bigTailTimer += deltaTime;
    if (this.bigTailTimer > 50) {
        this.bigTailCount = (this.bigTailCount + 1) % 8;
        this.bigTailTimer %= 50;

        this.momEyeTimer += deltaTime;
        if (this.momEyeTimer > this.momEyeInterval) {
            this.momEyeCount = (this.momEyeCount + 1) % 2;
            this.momEyeTimer %= this.momEyeInterval;
            if (this.momEyeCount == 0) {
                this.momEyeInterval = Math.random() * 500 + 1000;
            } else { this.momEyeInterval = 100; }
        }



    }
    ctx1.save();//只作用于和restore之间的东西
    //ctx1.translate(canWidth*0.5,canHeight*0.5);
    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle);
   
    var momBodyCount = this.momBodyCount;
    if (data.double == 1) {
         ctx1.drawImage(momBodyOra[momBodyCount], -momBodyOra[momBodyCount].width * 0.5, -momBodyOra[momBodyCount].height * 0.5); }
    if (data.double == 2) { 
        ctx1.drawImage(momBodyBlue[momBodyCount], -momBodyBlue[momBodyCount].width * 0.5, -momBodyBlue[momBodyCount].height * 0.5); }
    
    
    var bigTailCount = this.bigTailCount;
    ctx1.drawImage(bigTail[bigTailCount], -bigTail[bigTailCount].width * 0.5 + 30, -bigTail[bigTailCount].height * 0.5);
    var momEyeCount = this.momEyeCount;
    ctx1.drawImage(momEye[momEyeCount], -momEye[momEyeCount].width * 0.5, -momEye[momEyeCount].height * 0.5);
    ctx1.restore();

}
