let timer;
let timeLeft = 0;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(decrement, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    stopTimer();
    timeLeft = 600;
    displayTime();
}

function decrement() {
    if (timeLeft <= 0) {
        stopTimer();
        isRunning = false;
    } else {
        timeLeft--;
        displayTime();
    }
}

function displayTime() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    
    const display = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    document.getElementById('display').textContent = display;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

timeLeft = 600; // 10 minutes countdown initially

displayTime();
