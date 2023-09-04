const myH1 = document.querySelector('h1');

const btnStartEl = document.querySelector('.btn-start');
const btnResetEl = document.querySelector('.btn-reset');
const timetEl = document.querySelector('.global-timer');
const navigBtnEl = document.querySelector('.global-time-nav');
const timeListEl = document.querySelector('.time-list');

function pad(value) {
  return String(value).padStart(2, '0');
}

const timer = {
  intervalId: null,
  isActive: false,
 
  start() {
    if (this.isActive)
    { return; }

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
    timetEl.style.backgroundColor="#fff";
    clearInterval(this.intervalId);
    followUpTime();
    timetEl.textContent = '00 : 00 : 00';
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
  ) {return;}

  if (target.classList.contains('btn-start')) {
    changeRandomBackgroundColor();
    timer.start();
  }

  if (target.classList.contains('btn-reset')) {
    timer.stop();
    timer.isActive = false;
  }
});


function followUpTime() {
  if (!timer.isActive) {
    return;
  }
  const paragraphElement = document.createElement('p');
  paragraphElement.textContent = timetEl.textContent;
  timeListEl.appendChild(paragraphElement);
}



function changeRandomBackgroundColor() {
  const generateRandomColor = () => {
    return '#' + (Math.random().toString(16) + '000000').slice(2, 8);
  };

  const isColorTooDark = color => {
    const luma =
      0.299 * parseInt(color.substring(1, 3), 16) +
      0.587 * parseInt(color.substring(3, 5), 16) +
      0.114 * parseInt(color.substring(5, 7), 16);
    return luma < 130; 
  };

  let randomColor = generateRandomColor();

  while (isColorTooDark(randomColor)) {
    randomColor = generateRandomColor();
  }

  timetEl.style.transitionTimingFunction =
    'cubic-bezier(0.44, 0.43, 0.45, 0.44)';
  timetEl.style.backgroundColor = randomColor;
}


