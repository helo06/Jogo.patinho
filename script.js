let duck;
let lake;
let startButton;
let message;
let interval;

function startGame() {
    duck = document.getElementById('duck');
    lake = document.getElementById('lake');
    startButton = document.getElementById('startButton');
    message = document.getElementById('message');

    duck.style.bottom = '0px';
    message.textContent = '';

    startButton.disabled = true;
    interval = setInterval(moveDuck, 100);
}

function moveDuck() {
    let duckPosition = parseInt(duck.style.bottom);
    
    if (duckPosition < 300) {
        duck.style.bottom = (duckPosition + 5) + 'px';
    } else {
        clearInterval(interval);
        message.textContent = 'Parabéns! O patinho chegou do outro lado!';
        startButton.disabled = false;
    }
}

document.getElementById('startButton').addEventListener('click', startGame);
