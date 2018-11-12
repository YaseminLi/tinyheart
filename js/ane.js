var colorArry=["#3b154e","#660099","#330033", "red"]

var aneObj = function () {
    this.x = [];
    this.len = [];
    this.color = [];
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function () {
    for (i = 0; i < this.num; i++) {
        this.x[i] = i * 16 + Math.random() * 20;//[0,1)
        this.len[i] = 200 + Math.random() * 50;
        /*this.color[i]=colorArry[Math.floor(Math.random()*colorArry.length)];*/
        /*if (a * 3 >= 0 && a * 3 < 1) {
            this.color[i] = "#3b154e";
        } else if (a * 3 >= 1 && a * 3 < 2) {
            this.color[i] = "#660099";
        } else{
            this.color[i] = "#330033";
        }*/
    }
}
aneObj.prototype.draw = function () {
    for (var i = 0; i < this.num; i++) {
        ctx2.beginPath();
        ctx2.moveTo(this.x[i], canHeight);
        ctx2.lineTo(this.x[i], canHeight - this.len[i]);
        ctx2.lineCap = "round";
        ctx2.lineWidth = 15;
        ctx2.strokeStyle ="#3b154e" ;
        ctx2.globalAlpha=0.5;//设置透明度
        ctx2.stroke();
    }

}