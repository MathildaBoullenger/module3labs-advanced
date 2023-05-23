function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

//a. The order in which these messages will be printed is: #4, #3, #2, #1, because there is no Timeout set on message 4, a timeout of 0 on message 3 and increasing timeouts on messages 2 and 1.

//b. 

const delayMsgArrow = (msg) => {console.log(`This message will be printed after a delay: ${msg}`)}
setTimeout(delayMsgArrow, 100, '#1: Delayed by 100ms');
setTimeout(delayMsgArrow, 20, '#2: Delayed by 20ms');
setTimeout(delayMsgArrow, 0, '#3: Delayed by 0ms');
delayMsgArrow('#4: Not delayed at all')

//c.
let fifthTest = setTimeout(delayMsgArrow, 15000, '#0: Delayed by 15000ms');

//d.
clearTimeout(fifthTest);