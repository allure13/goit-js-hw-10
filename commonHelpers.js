import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as l,i as u}from"./assets/vendor-651d7991.js";const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<new Date?(u.error({title:"Error",message:"Please choose a date in the future"}),document.querySelector("[data-start]").disabled=!0):document.querySelector("[data-start]").disabled=!1}},f=l("#datetime-picker",m);function h(e){const r=Math.floor(e/864e5),s=Math.floor(e%864e5/36e5),a=Math.floor(e%864e5%36e5/6e4),i=Math.floor(e%864e5%36e5%6e4/1e3);return{days:r,hours:s,minutes:a,seconds:i}}document.querySelector("[data-start]").addEventListener("click",function(){const e=f.selectedDates[0],o=Date.now();let t=e-o;const c=setInterval(function(){const{days:d,hours:r,minutes:s,seconds:a}=h(t);document.querySelector("[data-days]").textContent=n(d),document.querySelector("[data-hours]").textContent=n(r),document.querySelector("[data-minutes]").textContent=n(s),document.querySelector("[data-seconds]").textContent=n(a),t<=0&&(clearInterval(c),u.success({title:"Success",message:"Countdown timer has reached the end date."})),t-=1e3},1e3)});function n(e){return e<10?`0${e}`:e}
//# sourceMappingURL=commonHelpers.js.map
