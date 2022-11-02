const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let interId = null;

function changeBodyColor() {
  interId = setInterval(() => {
    stopBtnRef.parentNode.style.backgroundColor = getRandomHexColor();
  }, 1000);

  stopBtnRef.removeAttribute('disabled');
  startBtnRef.setAttribute('disabled', true);
}

function stopChangeBodyColor() {
  clearInterval(interId);
  startBtnRef.removeAttribute('disabled');
  stopBtnRef.setAttribute('disabled', true);
}

startBtnRef.addEventListener('click', changeBodyColor);
stopBtnRef.addEventListener('click', stopChangeBodyColor);
