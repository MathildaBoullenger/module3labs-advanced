//a.
//b.
//d.
function randomDelay() {
    return new Promise((resolve, reject) => {
        let ranDelay = (Math.floor(Math.random() * 21_000));
        if (ranDelay % 2 === 0) {
            setTimeout(() => resolve(`The number of milliseconds for the delay is even: ${ranDelay} milliseconds`), ranDelay);
        } else {
            setTimeout(() => reject(`The number of milliseconds for the delay is odd: ${ranDelay} milliseconds`), ranDelay);
        }
    });
}
//c.
randomDelay()
  .then((result) => console.log('Success! ' + result ))
  .catch((error) => console.log('Error! ' + error));


