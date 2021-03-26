class Battery {
    constructor() {
        this.energy = 100;
    }

    isEmpty(){

        return (this.energy <= 0 ?  true : false);
    }

    getEnergy(){
        return this.energy;
    }
    setEnergy(value){
        this.energy = value;
    }

    decrease(){
        this.energy -= 10;
    }
}
