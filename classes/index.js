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

class TripService {
    constructor() {
        // TODO Set of 3 trips
        //
        let trip1 = new Trip('paris', 'Paris', 'img/paris.jpg');
        let trip2 = new Trip('nantes', 'Nantes', 'img/nantes.jpg');
        let trip3 = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
        let trips = new Set();
        trips.add(trip1);
        trips.add(trip2);
        trips.add(trip3);
        this.services = trips;
    }
    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout( (trip, err) => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de la recherche
                // this.services.values().next().value;//this.tripPresent(tripName)
                 trip = this.tripPresent(tripName)
                 //console.log("c est le trip touvé " + trip);
                if(trip!=undefined) {
                    //console.log('je suis dans le if trip not null ' + trip)
                    resolve(trip); // en cas de succès

                } else {
                   // console.log('je suis dans le if trip null ' + trip);
                    reject(err); // en cas d'erreur `No trip with name xxx ${tripName}`
                    }
            }, 2000)
        });
    }

    tripPresent(name) {
        //console.log("coucou je suis dans tripPresent")
        /*this.services.forEach(element => {
            if(element.name ===name) {
        console.log("coucou je suis dans le if element.name === tripName")
        console.log(element.name);
        console.log(element)

                return element;
            } 
                return null;
            
        });*/
        //console.log(this.services.values());
        //let tripCherche = this.services.entries().find(element => element.name === name);
        let tripCherche;
        //console.log(tripCherche);
        this.services.forEach(element => {
            //console.log(element);
            if (element.name === name) {
                tripCherche = element;
            }
        });
        return tripCherche;
    }
}
exports.TripService = TripService;
    
class PriceService {
    constructor() {
        // TODO Map of 2 trips
        // 'paris' --> price == 100
        // 'rio-de-janeiro' --> price == 800)
        // no price for 'nantes'
        //let trip1 = new Trip('paris', 'Paris', 'img/paris.jpg');
        //let trip2 = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
        let ThePrices = new Map();
        prices.set('paris', 100);
        prices.set('rio-de-janeiro', 150);
        this.prices = ThePrices;

    }
    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat dela recherche
            }, 2000)
        });
    }
}
exports.PriceService = PriceService;