
const btnStartEl = document.querySelector('.btn-start');
const btnResetEl = document.querySelector('.btn-reset');
const timetEl = document.querySelector('.global-timer');
const navigBtnEl = document.querySelector('.global-time-nav');





const time = {
  seconds: 0,
  minutes: 0,
  hours : 0,
};



class Timer {
    constructor(time) {
        this.time = time
        this.isPaused = false;
  }
    
  onStart() {
      setInterval(()=> {
        
      if (!this.isPaused) {
      this.time.seconds++}

      }, 1000);
    
  }

  onReset() {
    this.seconds = 0;
    }
    
    onTest() {
        console.log(this.seconds);
    }
}


const myTimer = new Timer(time);

myTimer.onStart()

//  myTimer.onTest();


 console.log(` це обьект time ${time.seconds}`);