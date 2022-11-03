import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  inputUserDate: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  daysValue: document.querySelector('span[data-days]'),
  hoursValue: document.querySelector('span[data-hours]'),
  minutesValue: document.querySelector('span[data-minutes]'),
  secondsValue: document.querySelector('span[data-seconds]'),
};

refs.startBtn.setAttribute('disabled', true);
let userTimeDeadline = null;
let interId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      alert('Please choose a date in the future');
      refs.startBtn.setAttribute('disabled', true);
      return;
    }
    refs.startBtn.removeAttribute('disabled');
    userTimeDeadline = selectedDates[0];
  },
};

flatpickr('#datetime-picker', options);

const timer = {
  start(userTime) {
    interId = setInterval(() => {
      const currentTime = Date.now();
      const timeDiff = userTime - currentTime;
      if (timeDiff <= 0) {
        // clearInterval(interId);
        return;
      }
      if (timeDiff <= 6000) {
        refs.secondsValue.parentNode.style.color = 'rgb(196, 20, 20)';
      }
      const timeDiffArr = convertMs(timeDiff);
      updateMurkup(timeDiffArr);
    }, 1000);
  },
};

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function updateMurkup({ days, hours, minutes, seconds }) {
  refs.daysValue.textContent = days;
  refs.hoursValue.textContent = hours;
  refs.minutesValue.textContent = minutes;
  refs.secondsValue.textContent = seconds;
}

refs.startBtn.addEventListener('click', () => {
  timer.start(userTimeDeadline);
});
