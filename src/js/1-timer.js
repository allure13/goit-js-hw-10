import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const userSelectedDate = selectedDates[0];

    if (userSelectedDate < new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });

      document.querySelector('[data-start]').disabled = true;
    } else {
      document.querySelector('[data-start]').disabled = false;
    }
  },
};

const flatpickrInstance = flatpickr('#datetime-picker', options);

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

document.querySelector('[data-start]').addEventListener('click', function () {
  const selectedDate = flatpickrInstance.selectedDates[0];
  const currentTime = Date.now();
  let timeDifference = selectedDate - currentTime;

  const timerInterval = setInterval(function () {
    const { days, hours, minutes, seconds } = convertMs(timeDifference);

    document.querySelector('[data-days]').textContent =
      days >= 0 ? addLeadingZero(days) : '00';
    document.querySelector('[data-hours]').textContent =
      hours >= 0 ? addLeadingZero(hours) : '00';
    document.querySelector('[data-minutes]').textContent =
      minutes >= 0 ? addLeadingZero(minutes) : '00';
    document.querySelector('[data-seconds]').textContent =
      seconds >= 0 ? addLeadingZero(seconds) : '00';

    if (timeDifference <= 0) {
      clearInterval(timerInterval);
      iziToast.success({
        title: 'Success',
        message: 'Countdown timer has reached the end date.',
      });
    }

    timeDifference -= 1000;
  }, 1000);
});

function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('[data-start]').disabled = true;
});
