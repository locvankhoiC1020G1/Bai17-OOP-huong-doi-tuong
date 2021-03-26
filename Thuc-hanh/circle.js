class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    tinhS(){
        let S = this.radius * 2 * Math.PI;
        return S;
    }
}