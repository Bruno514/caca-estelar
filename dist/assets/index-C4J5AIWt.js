(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`<section class="menu">
  <h1>Caça Estelar!</h1>
  <button class="botao-comecar">Começar</button>
</section>

<section class="placar">
  <p>Pontuação: <span class="placar-pontos">0</span>
  <p>Tempo: <span class="placar-cronometro">30s</span></p>
</section>

<section class="espaco">
</section>

`;document.querySelector(`#app`).innerHTML=e,document.querySelector(`.botao-comecar`).addEventListener(`click`,r);var t=0,n=30;function r(){t=0,n=30,document.querySelector(`.menu`).classList.add(`escondido`);let e=setInterval(()=>{n--;let t=document.querySelector(`.placar-cronometro`);t.textContent=`${n}s`,n==0&&(clearInterval(e),document.querySelector(`.menu`).classList.remove(`escondido`))},1e3)}var i=[`🚀`,`👾`,`🛸`];function a(){let e=document.querySelector(`.espaco`);for(let t=0;t<200;t++){let t=document.createElement(`span`);t.classList.add(`estrela`),t.textContent=`★`,e.append(t);let{x:n,y:r}=s();n-=t.clientWidth,r=r<e.clientHeight/2?r+t.clientHeight/2:r-t.clientHeight,t.style.left=`${n}px`,t.style.top=`${r}px`}}function o(){let e=document.querySelector(`.espaco`),t=document.createElement(`span`),n=i[Math.floor(Math.random()*i.length)];t.classList.add(`alvo`),t.textContent=n,e.append(t);let{x:r,y:a}=s();r=r<e.clientWidth/2?r+t.clientWidth/2:r-t.clientWidth,a=a<e.clientHeight/2?a+t.clientHeight/2:a-t.clientHeight,t.style.left=`${r}px`,t.style.top=`${a}px`;let l=setTimeout(()=>{t.remove(),o()},1500);t.addEventListener(`click`,e=>{c(e.target,l)})}function s(){let e=document.querySelector(`.espaco`);return{x:Math.floor(Math.random()*e.clientWidth),y:Math.floor(Math.random()*e.clientHeight)}}function c(e,n){t++,l(),clearTimeout(n),e.remove(),o()}function l(){let e=document.querySelector(`.placar-pontos`);e.textContent=t}a();for(let e=0;e<10;e++)o();