const timer = document.getElementById('timer');
const smTimer = document.getElementById('smTimer');
const mdTimer = document.getElementById('mdTimer');
const lgTimer = document.getElementById('lgTimer');
const xlTimer = document.getElementById('xlTimer');


let countDown;
let isRunning = false;
let workSession = true;

function startTimer(durationInMin, timeDown) {
    clearInterval(countDown);
    let timeLeft = durationInMin * 60;
    
    function updateDisplay() {
        let time = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timeDown.textContent = `${String(time).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    
    updateDisplay();
    
        if (isRunning) return;
        isRunning = true;
        
        countDown = setInterval(() => {
            timeLeft--;
            updateDisplay();
            
            if (timeLeft <= 0) {
                clearInterval(countDown);
                isRunning = false;
            }
        }, 1000)
}
    
smTimer.addEventListener('click', () => {
    let timeDown = document.createElement('h1');
    timeDown.textContent = "25:00";
    timer.appendChild(timeDown);

    let time = 25;

    startTimer(time, timeDown);
})

mdTimer.addEventListener('click', () => {
    let timeDown = document.createElement('h1');
    timeDown.textContent = "30:00";
    timer.appendChild(timeDown);

    let time = 30;

    startTimer(time, timeDown);
})

lgTimer.addEventListener('click', () => {
    let timeDown = document.createElement('h1');
    timeDown.textContent = "45:00";
    timer.appendChild(timeDown);

    let time = 45;

    startTimer(time, timeDown);
})

xlTimer.addEventListener('click', () => {
    let timeDown = document.createElement('h1');
    timeDown.textContent = "60:00";
    timer.appendChild(timeDown);

    let time = 60;

    startTimer(time, timeDown);
})