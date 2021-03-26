class Temperature {
    constructor(_doC) {
        this.doC = _doC;
    }

    convertCtoF() {
        let F = (this.doC * 1.8) + 32;
        return F;
    }

    convertCtoKelvin() {
        let K = this.doC + 273;
        return K;
    }
}