class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
    }
    display() {
        let date = new Date();
        // create 3 variables in one go using array destructuring
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
        if (hours < 10) 
            hours = '0' + hours;
        

        if (mins < 10) 
            mins = '0' + mins;
        

        if (secs < 10) 
            secs = '0' + secs;
        

        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}
const myClock = new DigitalClock('my clock:')
//myClock.start()

// a.

class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
        super(prefix);
        this.precision = precision;
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), this.precision);
    }
}

const myPrecisionClock = new PrecisionClock('my clock:', 5000);
//myPrecisionClock.start()

// b.

class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = "07:00") {
        super(prefix);
        this.wakeupTime = wakeupTime;
        this.timer = null;
    }

    checkWakeupTime() {
        let date = new Date();
        const currentHour = date.getHours();
        const currentMinute = date.getMinutes();
        const [wakeupHour, wakeupMinute] = this.wakeupTime.split(':').map(Number);

        if (currentHour === wakeupHour && currentMinute === wakeupMinute) {
            console.log("Wake Up");
            clearInterval(this.timer);
        }
    }

    start() {
        this.display();
        this.timer = setInterval(() => {
            this.display(),
            this.checkWakeupTime();
        }, 1000);
    }
}

const alarm = new AlarmClock("my alarm:", "17:40");
alarm.start();
