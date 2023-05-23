//c.

function printMe(msg) {
    console.log('Printing debounced message:', msg);
  }

//a.
//b.

  function debounce(func, ms) {
    let timeout; //This variable is created to keep track of the timeout and reset it.
  
    return function () {
      clearTimeout(timeout); //every time the debounce function is called, the timer is reset to 0 (cleared).
      timeout = setTimeout(() => { 
        func.apply(this, arguments);
      }, ms); // Then, a new Timeout is created, which calls the function (func) with all of its arguments (arguments) after the indicated amount of time.
    };
  }
  
  printMe = debounce(printMe, 1000);  // Apply debounce to printMe with 1 second pause.
  
  // Fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
  
  setTimeout( printMe, 300, 'Call 1');
  setTimeout( printMe, 300, 'Call 2');
  setTimeout( printMe, 300, 'Call 3'); /* Only the last one will be printed here because those calls are all made within a second (900 milliseconds). 
  After the last call, there will be a 1s break and then the last call will be printed as defined in the debounce(func).*/
