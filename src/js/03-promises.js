import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  
  const delay = Number(form.elements.delay.value);
  const amount = Number(form.elements.amount.value);
  const step = Number(form.elements.step.value);
  
  
  for (let i = 1, int = delay; i <= amount; i += 1, int += step) {
    setTimeout(() => {
        createPromise(i, int)
          .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
          .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }, int);
  }
  

}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const obj = { position, delay };
  const promise = new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(obj);
    } else {
      reject(obj);
    }
  });
  return promise;
}
