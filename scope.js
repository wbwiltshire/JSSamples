var cars = {
    description: "Cars I like",
    carDetails: [{make:"Tesla", model:"Model S"}],
    tellMeAboutcars: function() {
        console.log(this.description);  //should point to cars
        this.carDetails.forEach(function(car) {
            console.log(this.process.platform);  //this now points to context of cars (js context)
			console.log(car.make + ":" + car.model); //should point to carDetails
            console.log(car.make + ":" + this.model); //this won't work 
        });
    }
}
      
cars.tellMeAboutcars();