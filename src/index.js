// поточна дата
// const date = new Date();
// console.log(date);


const myH1 = document.querySelector('h1')

const btnStartEl = document.querySelector('.btn-start');
const btnResetEl = document.querySelector('.btn-reset');
const timetEl = document.querySelector('.global-timer');



const timer = {
    start() {
      const startTaime = Date.now();

        setInterval(() => {
          
            const currentTime = Date.now();
            const deltaTime = currentTime - startTaime;
            const timeComponents = getTimeComponents(deltaTime)
          
console.log(timeComponents);

      }, 1000);
    }
}

timer.start();





function getTimeComponents(time) {
const hours = Math.floor((time % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)); 
const secs = Math.floor((time % (1000 * 60)) / 1000);

    return { hours,mins,secs}
};