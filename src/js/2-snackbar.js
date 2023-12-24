import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const snackbarButton = document.querySelector('[data-show-snackbar]');

  if (snackbarButton) {
    snackbarButton.addEventListener('click', function () {});
  }

  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const delay = parseInt(this.elements.delay.value, 10);
    const state = this.elements.state.value;

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    promise.then(
      delay => {
        iziToast.success({
          title: 'Success',
          message: `✅ Fulfilled promise in ${delay}ms`,
        });
      },
      delay => {
        iziToast.error({
          title: 'Error',
          message: `❌ Rejected promise in ${delay}ms`,
        });
      }
    );
  });
});
