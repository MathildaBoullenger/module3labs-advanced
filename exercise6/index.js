// a.

function multiply(a, b) {
    console.log(a * b);
}

Function.prototype.delay = function (ms) {
    return(a, b) => setTimeout(() => this(a, b), ms);
    // a and b are just placeholders, we could have used any name here as long as they are consistent in both places
}

multiply.delay(500)(5, 5);
// prints 25 after 500 milliseconds


// b.

function multiply1(a, b) {
    console.log(a * b);
}

Function.prototype.delay = function (ms) {
    return(...arguments) => setTimeout(() => this.apply(null, arguments), ms); // we want it to work with any context, therefore we use 'null' instead of context here
}

multiply1.delay(1000)(5, 5);
// prints 25 after 1 second

// c.

function multiply2(a, b, c, d) {
    console.log(a * b * c * d);
}

Function.prototype.delay = function (ms) {
    return(...arguments) => setTimeout(() => this.apply(null, arguments), ms); // we want it to work with any context, therefore we use 'null' instead of context here
}

multiply2.delay(2000)(5, 5, 5, 5); // prints 625 after 2 seconds
