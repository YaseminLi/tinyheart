var dustObj = function () {
    this.x = []
    this.y = []
    this.amp = [];//振幅
    this.num = [];//共7个dust,存储对应的图片序号
    this.alpha=0
}
dustObj.prototype.count = 30
dustObj.prototype.init = function () {
    for (var i = 0; i < this.count; i++) {
        this.x[i] = Math.random() * canWidth
        this.y[i] = Math.random() * canHeight
        this.amp[i] = 20 + Math.random() * 15
        this.num[i] = Math.floor(Math.random() * 7)
    }
}
dustObj.prototype.draw = function () {
    this.alpha+=deltaTime*0.0008
    var l=Math.sin(this.alpha)
    for (var i = 0; i < this.count; i++) {
        ctx1.drawImage(dustPic[this.num[i]],this.x[i]+l*this.amp[i],this.y[i])
    }
}