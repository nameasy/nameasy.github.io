(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const a=[{name:"Обратный отсчёт до Нового года",cover:"images/new-year-card.jpg",link:"https://nameasy.github.io/until-the-new-year/",year:"2019"},{name:"Сканы",cover:"images/tickets/tsentralny-dom-khudozhnika.jpg",link:"scans.html",year:"2020"},{name:"Киномарафон",cover:"images/clapperboard-1.jpg",link:"https://codepen.io/nameasy/full/JjwrbZZ",year:"2020"},{name:"Генератор абстракций",cover:"images/abstraction.png",link:"abstractor.html",year:"2021"},{name:"Мой анимелист",cover:"images/anime-stats.png",link:"mal.html",year:"2023"}];export{a as p};
