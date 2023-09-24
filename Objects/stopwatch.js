// 13 - Exercise - StopWatch
function Stopwatch(){
    let startTime = null;
    let endTime = null;
    let duration = 0;

    this.start = function(){
        if (startTime !== null)
            throw new Error('Stopwatch has already started')
        startTime = new Date();
    }
    
    this.stop = function() {
        if (startTime === null) {
            throw new Error("Stopwatch is not started")
        }
        duration += (new Date().getTime() - startTime.getTime()) / 1000;
        startTime = null;
    }

    this.reset = function(){
        duration = 0;
        startTime = null;
    }
    
    Object.defineProperty(this, 'duration', {
        get: function(){ return duration; }
    })
}

const sw = new Stopwatch();
sw.start();
setTimeout(() => {
    sw.stop();
    console.log(sw.duration);
}, 2000); // wait 2 seconds
console.log(sw.duration);