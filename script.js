const WA='34674774758';
const wa=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
const page=document.body.dataset.page;
const links=[['index.html','inicio','Inicio'],['productos.html','productos','Productos'],['contacto.html','contacto','Contacto']];
document.body.insertAdjacentHTML('afterbegin',`<header><a class="logo" href="index.html">Your Horse</a><button class="burger" aria-label="Abrir menú" aria-expanded="false">☰</button><nav>${links.map(l=>`<a href="${l[0]}"${l[1]===page?' class="on"':''}>${l[2]}</a>`).join('')}</nav></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer><p>Your Horse · www.your-horse.com</p><p>hola@your-horse.com · 674 774 758</p></footer><a class="wa" href="${wa('Hola, quiero información sobre Your Horse.')}" target="_blank" rel="noopener">WhatsApp</a>`);
const header=document.querySelector('header'),burger=document.querySelector('.burger');
const solid=()=>header.classList.toggle('solid',page!=='inicio'||scrollY>40);
solid();addEventListener('scroll',solid,{passive:true});
burger.onclick=()=>{const o=header.classList.toggle('open');burger.setAttribute('aria-expanded',o);burger.textContent=o?'✕':'☰'};
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>header.classList.remove('open'));
const pedir=document.getElementById('pedir');
if(pedir){const f=[...document.querySelectorAll('[data-l]')],cc=document.getElementById('color-custom'),upd=()=>{
const r=document.querySelector('input[name=color]:checked').value,p=r==='Personalizado';cc.hidden=!p;
const d=f.map(i=>i.type==='checkbox'?(i.checked?i.dataset.l+': lo envío por este chat':''):(i.value.trim()?`${i.dataset.l}: ${i.value.trim()}`:'')).filter(Boolean);
pedir.href=wa(`Hola, quiero pedir la ${document.body.dataset.product}. ${d.join('. ')}${d.length?'. ':''}Color: ${p?'Personalizado'+(cc.value.trim()?' ('+cc.value.trim()+')':''):r}.`)};
pedir.target='_blank';pedir.rel='noopener';document.addEventListener('input',upd);upd()}
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('v');io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
