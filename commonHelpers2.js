import"./assets/modulepreload-polyfill-3cfb730f.js";const a="feedback-form-state",c=document.querySelector(".feedback-form"),o=document.querySelector('[name="email"]'),r=document.querySelector('[name="message"]'),t=JSON.parse(localStorage.getItem(a));if(t)for(const e of Object.keys(t))document.querySelector(`[name="${e}"]`).value=t[e]??"";c.addEventListener("input",i);c.addEventListener("submit",e=>{e.preventDefault(),l()&&(console.log("submit",t),localStorage.removeItem(a),e.target.reset())});function i(e){const s={email:(t==null?void 0:t.email)||"",message:(t==null?void 0:t.message)||""};s[e.target.name]=e.target.value.trim(),localStorage.setItem(a,JSON.stringify(s))}function l(){let e=!0;return o.value||(m(o),e=!1),r.value?(r.value||o.value)&&(o.value&&n(o),r.value&&n(r),o.value&&r.value&&(e=!0)):(m(r),e=!1),e}function m(e){e.classList.add("error")}function n(e){e.classList.remove("error")}
//# sourceMappingURL=commonHelpers2.js.map
