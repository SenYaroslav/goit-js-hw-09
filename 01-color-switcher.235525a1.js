const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let r=null;t.addEventListener("click",(function(){r=setInterval((()=>{e.parentNode.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.removeAttribute("disabled"),t.setAttribute("disabled",!0)})),e.addEventListener("click",(function(){clearInterval(r),t.removeAttribute("disabled"),e.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.235525a1.js.map
