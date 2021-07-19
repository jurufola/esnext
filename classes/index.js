class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;

    }

    toString() {
        return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this._price}]`;
    }

    set price(price) {
        this._price = price;
    }

    get price() {
        return this._price;
    }

    static getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg")
    }

}
exports.Trip = Trip;

class FreeTrip extends Trip{
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this._price = 0;
    }
    toString(){
        return `Free${super.toString()}`;
    }
}

exports.FreeTrip = FreeTrip;