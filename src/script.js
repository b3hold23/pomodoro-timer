const timer = document.getElementById('timer');
const timerValues = document.getElementById('timerValues');
const smTimer = document.getElementById('smTimer');
const mdTimer = document.getElementById('mdTimer');
const lgTimer = document.getElementById('lgTimer');
const xlTimer = document.getElementById('xlTimer');


let countDown;
let timerLength = 0;
let isRunning = false;
let workSession = true;
let breakTime = false;

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
               
                let breakLength = 0;

                if (timerLength === 25) {
                    breakLength = 5;
                } else if (timerLength === 30) {
                    breakLength = 10;
                } else if (timerLength === 45) {
                    breakLength = 15;
                } else if (timerLength === 60) {
                    breakLength = 20;
                }

                const breakBtn = document.createElement('button');
                breakBtn.textContent = "Start Break";

                timer.appendChild(breakBtn);

                breakBtn.addEventListener('click', () => {
                    breakBtn.remove();
                    timer.innerHTML = "";
                    const breakTimer = document.createElement('h1');
                    breakTimer.textContent = `${String(breakLength).padStart(2, '0')}:00`;
                
                    timer.appendChild(breakTimer);
                
                    workSession = false;
                    breakTime = true;
                    timerLength = breakLength;
                
                    startTimer(breakLength, breakTimer);
                
                });
            }
        }, 1000)
}

    
smTimer.addEventListener('click', () => {
    timerValues.remove();
    let timeDown = document.createElement('h1');
    timeDown.textContent = "25:00";
    timer.appendChild(timeDown);

    let time = 25;
    timerLength = time;

    startTimer(time, timeDown,);
})

mdTimer.addEventListener('click', () => {
    timerValues.remove();
    let timeDown = document.createElement('h1');
    timeDown.textContent = "30:00";
    timer.appendChild(timeDown);

    let time = 30;

    startTimer(time, timeDown);
})

lgTimer.addEventListener('click', () => {
    timerValues.remove();
    let timeDown = document.createElement('h1');
    timeDown.textContent = "45:00";
    timer.appendChild(timeDown);

    let time = 45;

    startTimer(time, timeDown);
})

xlTimer.addEventListener('click', () => {
    timerValues.remove();
    let timeDown = document.createElement('h1');
    timeDown.textContent = "60:00";
    timer.appendChild(timeDown);

    let time = 60;

    startTimer(time, timeDown);
})