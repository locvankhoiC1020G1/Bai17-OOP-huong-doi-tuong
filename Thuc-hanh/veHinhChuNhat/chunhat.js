class ChuNhat{
    constructor(_x, _y, _rong,_cao, _color) {
        this.x= _x;
        this.y = _y;
        this.rong = _rong;
        this.cao = _cao;
        this.color = _color;
    }
    create(){
        pen.beginPath();
        pen.rect(this.x, this.y,this.rong,this.cao);
        pen.fillStyle = this.color;
        pen.fill();
        pen.closePath();
    }
}