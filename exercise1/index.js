function makeCounter(startsFrom, incrementBy) {
    let currentCount = startsFrom;

    return function () {
        console.log(currentCount)
        currentCount = currentCount + incrementBy;
        return currentCount;
    };
}
let counter1 = makeCounter(-5,5);
let counter2 = makeCounter(1,3);

counter1(); 
counter1(); 
counter1(); 
counter1(); 
counter1(); 
counter1(); 
counter1(); 
counter1(); 

counter2(); 
counter2(); 

//a. Yes, counter1 and counter2 are independent

//b. 
//c.