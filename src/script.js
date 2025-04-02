const startTimer = document.getElementById('timerBtn');
const timer = document.getElementById('timer');
const smTimer = document.getElementById('smTimer');
const medTimer = document.getElementById('medTimer');
const lgTimer = document.getElementById('lgTimer');
const xlTimer = document.getElementById('xlTimer');

let count;

const startCountdown = (durationInMin) => {
    clearInterval(count);
    let timeLeft = durationInMin * 60; //Convert minutes to seconds

    const updateDisplay = () => {
        let minutes = Math.floor(timeLeft / 60); //Convert seconds to minutes
        let seconds = timeLeft % 60; //Get the remainder of the seconds
        countDown.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    updateDisplay();

    count = setInterval(() => {
        timeLeft--;
        updateDisplay();
        if (timeLeft === 0) {
            clearInterval(count);
            countDown.textContent = "Time for a break!";

        }
    }, 1000);
};

smTimer.addEventListener('click', () => {
  startTimer.remove();
  let countDown = document.createElement('h3');
  countDown.textContent = '25:00';
  countDown.setAttribute('id', 'countDown');
  timer.appendChild(countDown);

  let minutes = 25;

  startCountdown(minutes);
});

medTimer.addEventListener('click', () => {
    startTimer.remove();
    let countDown = document.createElement('h3');
    countDown.textContent = '30:00';
    countDown.setAttribute('id', 'countDown');
    timer.appendChild(countDown);

    let minutes = 30;

    startCountdown(minutes);
  });

lgTimer.addEventListener('click', () => {
  startTimer.remove();
  let countDown = document.createElement('h3');
  countDown.textContent = '45:00';
  countDown.setAttribute('id', 'countDown');
  timer.appendChild(countDown);

  let minutes = 45;

  startCountdown(minutes);
});

xlTimer.addEventListener('click', () => {
    startTimer.remove();
    let countDown = document.createElement('h3');
    countDown.textContent = '60:00';
    countDown.setAttribute('id', 'countDown');
    timer.appendChild(countDown);

    let minutes = 60;

    startCountdown(minutes);
  });
