const e={userForm:document.querySelector(".form"),firstDelayInput:document.querySelector('[name="delay"]'),delayStepInput:document.querySelector('[name="step"]'),amountInput:document.querySelector('[name="amount"]'),startBtn:document.querySelector('[type="submit"]')};let t=null,n=null,o=null;function u(e,t){const n={position:e,delay:t},o=Math.random()>.3;return new Promise(((e,u)=>{setTimeout((()=>{o?e(n):u(n)}),t)}))}e.userForm.addEventListener("input",(function(){t=+e.firstDelayInput.value,o=+e.amountInput.value,n=+e.delayStepInput.value})),e.userForm.addEventListener("submit",(function(e){e.preventDefault();for(let e=1;e<=o;e+=1)u(e,t).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),t+=n}));
//# sourceMappingURL=03-promises.de8dc5cc.js.map