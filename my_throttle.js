Function.prototype.myThrottle = function(interval){
    let tooSoon;
    return () => {
        if (!tooSoon) {
            tooSoon = true;
            setTimeout(() => {
                tooSoon = false
            }, interval)
            this(interval);
        }
    }

}

  
class Neuron {
    constructor() {
        this.fire = this.fire.myThrottle(10000);
    }

    fire() {
        console.log("Firing!");
    }
}

  n = new Neuron();
  console.log(n.fire());
  console.log(n.fire());
  console.log(n.fire());

