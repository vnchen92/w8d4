let tooSoon = false;

Function.prototype.myThrottle = function(interval){

    if (!tooSoon) {
        tooSoon = true;
        setTimeout(() => {
            tooSoon = false;
        }, interval);
    }

    return this;
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

