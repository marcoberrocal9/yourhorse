const WA='34674774758',EXTRA=5;
/* Pasarela de pago: un Payment Link de Stripe por producto y color (24 en total). Sustituye cada URL por la real. */
const PAY={
'Placa básica':{
marron:'https://buy.stripe.com/4gMbJ37bi4iya7C1BRe7m00',
negro:'https://buy.stripe.com/test_14A28rf9t1Km2tz1xH3AY03',
natural:'https://buy.stripe.com/test_eVq8wP2mH4Wyc496S13AY04',
blanco:'https://buy.stripe.com/REEMPLAZAR_BASICA_BLANCO',
verde:'https://buy.stripe.com/REEMPLAZAR_BASICA_VERDE',
personalizado:'https://buy.stripe.com/REEMPLAZAR_BASICA_PERSONALIZADO'},
'Placa de concurso':{
marron:'https://buy.stripe.com/REEMPLAZAR_CONCURSO_MARRON',
negro:'https://buy.stripe.com/REEMPLAZAR_CONCURSO_NEGRO',
natural:'https://buy.stripe.com/REEMPLAZAR_CONCURSO_NATURAL',
blanco:'https://buy.stripe.com/REEMPLAZAR_CONCURSO_BLANCO',
verde:'https://buy.stripe.com/REEMPLAZAR_CONCURSO_VERDE',
personalizado:'https://buy.stripe.com/REEMPLAZAR_CONCURSO_PERSONALIZADO'},
'Placa de caballo en venta':{
marron:'https://buy.stripe.com/REEMPLAZAR_VENTA_MARRON',
negro:'https://buy.stripe.com/REEMPLAZAR_VENTA_NEGRO',
natural:'https://buy.stripe.com/REEMPLAZAR_VENTA_NATURAL',
blanco:'https://buy.stripe.com/REEMPLAZAR_VENTA_BLANCO',
verde:'https://buy.stripe.com/REEMPLAZAR_VENTA_VERDE',
personalizado:'https://buy.stripe.com/REEMPLAZAR_VENTA_PERSONALIZADO'},
'Placa pack cuadra':{
marron:'https://buy.stripe.com/REEMPLAZAR_PACK_MARRON',
negro:'https://buy.stripe.com/REEMPLAZAR_PACK_NEGRO',
natural:'https://buy.stripe.com/REEMPLAZAR_PACK_NATURAL',
blanco:'https://buy.stripe.com/REEMPLAZAR_PACK_BLANCO',
verde:'https://buy.stripe.com/REEMPLAZAR_PACK_VERDE',
personalizado:'https://buy.stripe.com/REEMPLAZAR_PACK_PERSONALIZADO'}};
const wa=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
const page=document.body.dataset.page;
const links=[['index.html','inicio','Inicio'],['productos.html','productos','Productos'],['instrucciones.html','instrucciones','Instrucciones de uso'],['contacto.html','contacto','Contacto']];
/* Colores: [nombre, slug de imagen, color]. Imagen: media/<producto>-<slug>.jpg */
const COLORS=[['Marrón','marron','#7a5a43'],['Negro','negro','#1c1c1c'],['Natural','natural','#d9c3a0'],['Blanco','blanco','#ffffff'],['Verde','verde','#3f5a45'],['Personalizado','personalizado','conic-gradient(#e11d48,#f59e0b,#10b981,#3b82f6,#8b5cf6,#e11d48)']];
const IC={
user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
home:'<path d="M3 10.5 12 3l9 7.5V21H3z"/><path d="M9 21v-6h6v6"/>',
trophy:'<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0zM7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3"/>',
tag:'<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
shield:'<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/>',
image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',
phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
nfc:'<path d="M6 9q2 3 0 6M10 6q3.5 6 0 12M14 3q5 9 0 18"/>',
folder:'<path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
doc:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
pencil:'<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'};
document.body.insertAdjacentHTML('afterbegin',`<header><a class="logo" href="index.html">Your Horse</a><button class="burger" aria-label="Abrir menú" aria-expanded="false">☰</button><nav>${links.map(l=>`<a href="${l[0]}"${l[1]===page?' class="on"':''}>${l[2]}</a>`).join('')}</nav></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer><p>Your Horse · www.your-horse.com</p><p>hola@your-horse.com · 674 774 758</p></footer><a class="wa" href="${wa('Hola, quiero información sobre Your Horse.')}" target="_blank" rel="noopener">WhatsApp</a>`);
const header=document.querySelector('header'),burger=document.querySelector('.burger');
const solid=()=>header.classList.toggle('solid',page!=='inicio'||scrollY>40);
solid();addEventListener('scroll',solid,{passive:true});
burger.onclick=()=>{const o=header.classList.toggle('open');burger.setAttribute('aria-expanded',o);burger.textContent=o?'✕':'☰'};
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>header.classList.remove('open'));
/* contactless en fichas de producto */
const pr=document.querySelector('.pp .price');
if(pr)pr.insertAdjacentHTML('afterend','<p class="nfc"><i data-i="nfc"></i>Con tecnología contactless con tu teléfono</p>');
/* selector de color (redondas) */
document.querySelectorAll('[data-swatches]').forEach(c=>c.innerHTML=COLORS.map((k,i)=>`<label class="sw" title="${k[0]}"><input type="radio" name="color" value="${k[0]}"${i?'':' checked'}><span style="background:${k[2]}"></span><em>${k[0]}${k[1]==='personalizado'?' +'+EXTRA+' €':''}</em></label>`).join(''));
/* iconos */
document.querySelectorAll('[data-i]').forEach(e=>e.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true">${IC[e.dataset.i]}</svg>`);
/* cambio de imagen según color */
const sc=document.querySelector('[data-showcase],.pp .ph');
const base=sc&&(sc.dataset.showcase||sc.querySelector('img').getAttribute('src').replace(/^media\//,'').replace(/\.jpg$/,''));
const paint=()=>{const r=document.querySelector('input[name=color]:checked');if(!sc||!r)return;
const k=COLORS.find(c=>c[0]===r.value),img=sc.querySelector('img');
sc.style.setProperty('--tint',k[2][0]==='#'?k[2]:'transparent');sc.classList.remove('tint');
img.onerror=()=>{img.onerror=null;img.src=`media/${base}.jpg`;sc.classList.add('tint')};
img.src=`media/${base}-${k[1]}.jpg`};
addEventListener('change',paint);paint();
/* precio y enlace de pago */
const pg=document.getElementById('pagar');
if(pg){const cc=document.getElementById('color-custom'),b=parseInt(pr.textContent),upd=()=>{
const r=document.querySelector('input[name=color]:checked').value,p=r==='Personalizado',slug=COLORS.find(c=>c[0]===r)[1];
cc.hidden=!p;pr.textContent=(b+(p?EXTRA:0))+' €';
const pu=(PAY[document.body.dataset.product]||{})[slug];
if(!pu||pu.includes('REEMPLAZAR'))pg.hidden=true;else{pg.hidden=false;
pg.href=pu+'?client_reference_id='+location.pathname.split('/').pop().replace('.html','').replace(/[^\w-]/g,'')+'_'+slug}};
document.addEventListener('input',upd);upd()}
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('v');io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
