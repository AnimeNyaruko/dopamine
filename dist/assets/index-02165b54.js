(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();const d=80,l=window.matchMedia("(prefers-reduced-motion: reduce)"),u=(t,n=100)=>t.getBoundingClientRect().top<=(window.innerHeight||document.documentElement.clientHeight)*(n/100),m=t=>t.getBoundingClientRect().top>(window.innerHeight||document.documentElement.clientHeight),a=document.querySelectorAll(".scroll-animation"),f=()=>{a.forEach(t=>{u(t,d)?t.classList.add("scroll-animation-scrolled"):m(t)&&t.classList.remove("scroll-animation-scrolled")})};let i=!1;const p=(t,n)=>{i||(i=!0,setTimeout(()=>{t(),i=!1},n))};window.addEventListener("scroll",()=>{l&&!l.matches&&p(f,250)});