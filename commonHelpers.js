import{S as u,i as a}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const d="43948978-860dfecfaa788bc4b5c828749",h="https://pixabay.com/api/",f=r=>{const i=new URLSearchParams({q:r,key:d,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${h}?${i}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})},p=r=>r.map(({webformatURL:i,largeImageURL:s,tags:l,likes:t,views:e,comments:o,downloads:m})=>`
            <li class="item-list">
        <a href="${s}" class="item-list-link">
            <img class="item-list-img"  height="152"
            width="300" src="${i}" alt="${l}">
        </a>
        <div class='markup-info'>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Likes</h3>
                    <p class="item-list-text">${t}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Views</h3>
                    <p class="item-list-text">${e}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Comments</h3>
                    <p class="item-list-text">${o}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Downloads</h3>
                <p class="item-list-text">${m}</p>
            </div>
            </div>
            </li>
            `).join(""),y=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),n=document.querySelector(".js-loader"),g=new u("ul.list a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});function L(r){r.preventDefault();const i=r.target.elements.searchKeyword.value.trim();if(i===""){c.innerHTML="",r.target.reset(),a.show({message:"Input field can not be empty",position:"topRight",timeout:2e3,color:"red"});return}c.innerHTML="",n.classList.remove("is-hidden"),f(i).then(s=>{s.total===0&&a.show({message:"Sorry, there are no images for this query",position:"topRight",timeout:2e3,color:"red"}),c.innerHTML=p(s.hits),g.refresh()}).catch(s=>console.log(s)).finally(()=>{r.target.reset(),n.classList.add("is-hidden")})}y.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
