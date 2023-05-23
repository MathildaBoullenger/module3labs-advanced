let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};

car.description(); // works
setTimeout(car.description, 200);
// fails

/*the second try fails because car is defined in the global scope.
Context to its method 'description' isn't lost when called directly 
but it is lost when passed into another function such as setTimeout.*/

// a.
setTimeout(() => {
    car.description();
}, 200)

// b.
const car1 = {... car,year: 2000};
console.log(car1)
// OR
console.log(car1.year)
// to see the year only

// c.
/*It uses the original value. 
b. because it uses setTimeout and therefore references to car before it is overwriten*/

// d.
const boundCarDescription = car.description.bind(car)
setTimeout(boundCarDescription, 200);

// e.
const car2 = {... car,make: 'Ferrari'};
console.log(car2)
