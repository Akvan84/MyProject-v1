(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const s=async()=>{let i=(await(await fetch("https://akvan84.github.io/JsonDB/db.json")).json()).menu.map(t=>t.dropdown.length?`      
      <li>
        <a href="${t.link}">${t.name}</a>
        <ul>
${t.dropdown.map(e=>`<li><a href="${e.link}">${e.name}</a></li>`).join("")}          
        </ul>
      </li>`:`<li><a href="${t.link}">${t.name}</a></li>`);document.querySelector(".mainMenu").innerHTML=i.join("")},l=async()=>{let a=await(await fetch("https://akvan84.github.io/JsonDB/db.json")).json(),i=`<div style="
      background: url(${a.parallax.image})
        no-repeat center center fixed;
      background-size: cover;
    "
  >
  <div>
  <h1>${a.parallax.title}</h1>
  <div style="font-size: ${a.parallax.fontsize}">${a.parallax.content}</div></div>
  </div>`;document.querySelector(".parallax").innerHTML=i},c=async()=>{let i=(await(await fetch("https://fakestoreapi.com/products")).json()).map(t=>`
        <div class="product">
          <h2>Title: ${t.title.substring(0,20)}...</h2>
          <img src="${t.image}" alt="image">
          <p>Description: ${t.description.substring(0,150)}...</p>
          <h3>Price: ${t.price} $</h3>
          <h3>Rate: ${t.rating.rate}</h3>
        </div>`);document.querySelector(".products").innerHTML=i.join("")};s();l();c();
