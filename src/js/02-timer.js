import "flatpickr/dist/flatpickr.min.css";
import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const startBtn = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

startBtn.setAttribute('disabled', true);
let time = {};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      time = selectedDates[0];
      if (selectedDates[0] < Date.now()) {
          Notiflix.Notify.warning("Please choose a date in the future");
      }
      if (selectedDates[0] > Date.now()) {
          startBtn.removeAttribute('disabled');
      }
  },
};

flatpickr("#datetime-picker", options);

startBtn.addEventListener('click', onStart);

function onStart() {
    setInterval(() => {
        const currentTime = time - Date.now();
        days.textContent = addLeadingZero(convertMs(currentTime).days);
        hours.textContent = addLeadingZero(convertMs(currentTime).hours);
        minutes.textContent = addLeadingZero( convertMs(currentTime).minutes);
        seconds.textContent = addLeadingZero(convertMs(currentTime).seconds);
    }, 1000)

}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}

