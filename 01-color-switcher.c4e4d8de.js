const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let o=null;t.addEventListener("click",(()=>{o=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.setAttribute("disabled",!0)})),e.addEventListener("click",(()=>{clearInterval(o),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.c4e4d8de.js.map
