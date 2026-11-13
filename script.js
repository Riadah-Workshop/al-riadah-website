const langButton=document.getElementById('langToggle');
let currentLang='ar';
function setLanguage(lang){
  currentLang=lang;document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.body.dir=lang==='ar'?'rtl':'ltr';
  document.querySelectorAll('[data-ar][data-en]').forEach(node=>{
    const arrow=node.querySelector(':scope > span');
    const keepArrow=arrow&&(arrow.textContent.trim()==='↗'||arrow.textContent.trim()==='↙');
    node.innerHTML=node.dataset[lang]+(keepArrow?' '+arrow.outerHTML:'');
  });
  langButton.textContent=lang==='ar'?'EN':'عربي';langButton.setAttribute('aria-label',lang==='ar'?'Switch to English':'التبديل إلى العربية');
}
langButton.addEventListener('click',()=>setLanguage(currentLang==='ar'?'en':'ar'));
const menuButton=document.querySelector('.menu-toggle');const nav=document.querySelector('.main-nav');menuButton.addEventListener('click',()=>{const opened=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(opened));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
