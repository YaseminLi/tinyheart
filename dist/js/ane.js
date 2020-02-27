var colorArry = ["#3b154e", "#660099", "#330033", "red"]

var aneObj = function () {
    //start point,control point,end point
    this.startx = [];
    this.endx = [];
    this.endy = [];
    this.amp = [];//海葵头部摆动的振幅
    this.alpha = 0;
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function () {
    var h = canHeight
    for (i = 0; i < this.num; i++) {
        this.startx[i] = i * 16 + Math.random() * 20;//[0,1)*20 [0,20)
        this.endx[i] = this.startx[i]
        this.endy[i] = h - 270 + Math.random() * 50;
        this.amp[i] = Math.random() * 50 + 50;
    }
}
aneObj.prototype.draw = function () {
    this.alpha += deltaTime * 0.0008
    var l = Math.sin(this.alpha)//[-1,1]
    ctx2.save()
    ctx2.lineCap = "round";//海葵头部圆的
    ctx2.lineWidth = 15;
    ctx2.strokeStyle = "#3b154e";
    ctx2.globalAlpha = 0.5;//设置透明度
    for (var i = 0; i < this.num; i++) {
        ctx2.beginPath();
        ctx2.moveTo(this.startx[i], canHeight);
        this.endx[i] = this.startx[i] + l * this.amp[i]
        //this.endx[i],this.endy[i]要告诉出生在上面的果实
        ctx2.quadraticCurveTo(this.startx[i], canHeight - 100, this.endx[i], this.endy[i]);
        ctx2.stroke();
    }

}