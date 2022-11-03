const refs = {
  userForm: document.querySelector('.form'),
  firstDelayInput: document.querySelector('[name="delay"]'),
  delayStepInput: document.querySelector('[name="step"]'),
  amountInput: document.querySelector('[name="amount"]'),
  startBtn: document.querySelector('[type="submit"]'),
};

let delay = null;
let step = null;
let amount = null;
refs.userForm.addEventListener('input', onInput);
refs.userForm.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  const resultObj = { position, delay };
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(resultObj);
      } else {
        reject(resultObj);
      }
    }, delay);
  });
}

function onInput() {
  delay = +refs.firstDelayInput.value;
  amount = +refs.amountInput.value;
  step = +refs.delayStepInput.value;
}

function onSubmit(evt) {
  evt.preventDefault();

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}
