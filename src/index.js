const myH1 = document.querySelector('h1');

const btnStartEl = document.querySelector('.btn-start');
const btnResetEl = document.querySelector('.btn-reset');
const timetEl = document.querySelector('.global-timer');
const navigBtnEl = document.querySelector('.global-time-nav');

function pad(value) {
  return String(value).padStart(2, '0');
}

const timer = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    const startTaime = Date.now();

    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTaime;
      const timeComponents = getTimeComponents(deltaTime);

      timetEl.textContent = `${timeComponents.hours} : ${timeComponents.mins} : ${timeComponents.secs}`;
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
  },

};

function getTimeComponents(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { hours, mins, secs };
}

navigBtnEl.addEventListener('click', e => {
  let target = e.target;

  if (
    !target.classList.contains('btn-start') &
    !target.classList.contains('btn-reset')
  ) {
    return;
  }

  if (target.classList.contains('btn-start')) {
    timer.start();
  }

  if (target.classList.contains('btn-reset')) {
    timer.isActive = false;
    timer.stop();
  }
});
