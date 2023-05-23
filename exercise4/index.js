// a.

function printFibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return printFibonacci(n - 1) + printFibonacci(n - 2);
    }
}

let i = 1;
let interval = setInterval(() => {     // We define the intervall.
    console.log(printFibonacci(i)); 
    i++;                               // during which we will iterate over each output
    if (i > 10) {                      // until the tenth output after which we clear the intervall 
        clearInterval(interval);
    }
}, 1000);                              // The intervall is set at 1 second here

//b.

function printFibonaccib(n) {
    if (n <= 1) {
      return n;
    } else {
      return printFibonaccib(n - 1) + printFibonaccib(n - 2);
    }
  }
  
  let l = 1;
  
  function printFibonacciTimeouts() {                         
    setTimeout(() => {                         // We set the Timeout
      console.log(printFibonaccib(l));         // during which we print the output
      l++;                                     // by iterating over each output
      if (l <= 10) {                           // as long as the number outputs is lower to or equal to 10, we print the next output
        printFibonacciTimeouts();
      }
    }, 1000);                                  // The timeout is set at 1 second here
  }
  
  printFibonacciTimeouts()

// c.

function printFibonaccic(n) {
  if (n <= 1) {
    return n;
  } else {
    return printFibonaccic(n - 1) + printFibonaccic(n - 2);
  }
}

function printFibonacciTimeouts(limit) {
  let l = 1;

  function printNext() {
    if (l <= limit) {                      
      console.log(printFibonaccic(l));
      l++;
      setTimeout(printNext, 1000);
    }
  }

  setTimeout(printNext, 1000);
}

printFibonacciTimeouts(5);

// Alternative for c below
/*
function printFibonacciTimeouts(limit) {
    let current = 1; //
    let previous = 0;
    let count = 0; // We need count here to keep track against the limit

    function printNext() {
        console.log(current); // we print the current number of the sequence
        count++;

        if (count === limit) {
            return;               // once we reach the limit of counts, we return nothing - stopping the process

        } else {
            const next = current + previous; // we set the next number to be equal to the previous one (current) + the one before that (previous)
            previous = current; // then, we move 'one up' by changing the number that was current to previous
            current = next; // and the new current is next that we calculated before
        }

             setTimeout(printNext, 1000); // here we call the function to print the numbers of the sequence, with 1 second intervall
    }

    setTimeout(printNext, 1000); 
}

// we call the function with a given limit
printFibonacciTimeouts(15);*/
