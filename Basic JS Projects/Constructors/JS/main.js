class vehicle {
    constructor(owner, make, model, year, color) {
        this.vehicle_owner = owner;
        this.vehicle_make = make;
        this.vehicle_model = model;
        this.vehicle_year = year;
        this.vehicle_color = color;
    }
}

var user1 = new vehicle("Jack", "Dodge", "Viper", 2020, "Red");
var user2 = new vehicle("Emily", "Jeep", "Trail Hawk", 2019, "White and Black");
var user2 = new vehicle("Erik", "Ford", "Pinto", 1971, "Mustard");

function vehicleInfo() {
    user = user1
    info = `${user.vehicle_owner} owns a ${user.vehicle_year} ${user.vehicle_color} ${user.vehicle_make} ${user.vehicle_model}`;
    document.getElementById("vehicleInfo").innerHTML = info;
}