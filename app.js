let favoriteCityId = "Rome";
console.log(favoriteCityId);
favoriteCityId = "Paris";
console.log(favoriteCityId);
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);      
//citiesId = [];
citiesId.push("Bamako");
console.log(citiesId);

function getWeather(cityId) {
    let city = cityId;
    let temperature = 20;
    return {
        city: city,
        temperature : temperature
    }
}

const weather = getWeather(favoriteCityId);
console.log(weather);

let {city, temperature} = weather;
console.log(city);
console.log(temperature);

let [parisId, nycId, ...othersCities] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCities.length);
const classes = require('./classes');

parisTrip = new classes.Trip("paris", "Paris", "img/paris.jpg");
console.log(parisTrip.toString());
console.log(parisTrip.name);
parisTrip.price = 100;
console.log(parisTrip.toString())

const defaultTrip = classes.Trip.getDefaultTrip();
console.log(defaultTrip.toString());

const freeTrip = new classes.FreeTrip("nantes", "Nantes", "img/nantes.jpg");
console.log(freeTrip.toString())
