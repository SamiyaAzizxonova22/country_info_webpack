(()=>{var n={896:()=>{const n=document.querySelector(".header__dark-mode"),e=document.querySelector("body"),a=localStorage.getItem("mode")?localStorage.getItem("mode"):null;a&&e.classList.add("dark-mode"),n.addEventListener("click",(()=>{e.classList.toggle("dark-mode"),a?localStorage.setItem("mode",""):localStorage.setItem("mode","dark")}))}},e={};function a(o){var s=e[o];if(void 0!==s)return s.exports;var t=e[o]={exports:{}};return n[o](t,t.exports,a),t.exports}(()=>{"use strict";a(896);const n=document.querySelector(".loader"),e=e=>{e?n.classList.remove("hidden"):n.classList.add("hidden")},o=(document.querySelector(".cards"),document.querySelector(".country-info")),s=window.location.search;(async n=>{e(!0);const a=await fetch(n);if(console.log(a),!a.ok)throw new Error("Something went wrong :(");const o=await a.json();return e(!1),o})(`https://restcountries.com/v3.1/${new URLSearchParams(s).get("country")}`).then((n=>{(n=>{const{population:e,borders:a,capital:s,region:t,languages:r,flags:c,name:l,tld:i,currencies:p,subregion:u}=n,d=Object.values(l.nativeName)[0].official,m=Object.values(r),g=Object.values(p)[0].name;console.log(n),o.innerHTML=`\n  <img\n  class="country-info__img"\n  src=${c.svg}\n  alt="country-flag"\n  width="560"\n  height="400"\n  />\n  <div class="country-info__content">\n    <h2>${l.common}</h2>\n    <ul class="country-info__list">\n      <li class="country-info__item">\n        <p class="name">\n          Native Name\n          <span>${d}</span>\n        </p>\n        <p class="population">\n          Population:\n          <span>${e}</span>\n        </p>\n        <p class="region">\n          Region:\n          <span>${t}</span>\n        </p>\n        <p class="sub-region">\n          Sub Region:\n          <span>${u}</span>\n        </p>\n        <p class="capital">\n          Capital:\n          <span>${s}</span>\n        </p>\n      </li>\n      <li class="country-info__item">\n        <p class="name">\n          Top Level Domain:\n          <span>${i}</span>\n        </p>\n        <p class="population">\n          Currencies:\n          <span>${g}</span>\n        </p>\n        <p class="region">\n          Languages:\n          <span>${m}</span>\n        </p>\n      </li>\n    </ul>\n\n    <div class="country-info__borders">\n      <h3>Border Countries:</h3>\n      ${a?a.map((n=>`<a href="./about.html?country=/alpha/${n}">${n}</a>`)):"No Borders"}\n    </div>\n  </div>\n  `})(n[0])})).catch((n=>{alert(n.message)}))})()})();