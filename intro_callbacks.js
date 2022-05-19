class Clock {
    constructor() {
        let date = new Date();
        this.seconds = date.getSeconds();
        this.minutes = date.getMinutes();
        this.hours = date.getHours();

        this.printTime();

        setInterval(this._tick.bind(this), 1000);
        // setInterval(()=>{this._tick()}, 1000);


    }

    printTime() {
        let time = `${this.hours}:${this.minutes}:${this.seconds}`;
        console.log(time);
    }

    _tick() {
        if (this.seconds < 59 && this.minutes < 59 ) {
            this.seconds++;
        } else if (this.minutes < 59) {
            this.seconds = 0;
            this.minutes++;
        } else {
            this.hours++;
            this.seconds = 0;
            this.minutes = 0;
        }
        console.log(this.printTime());
    }
}

