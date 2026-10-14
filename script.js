// Para trocar os placeholders por fotos reais, cole a URL/base64 da imagem em "img" de cada item.
const GEAR=[
 {cat:'Mouse',name:'Logitech G PRO X Superlight',tag:'1ª geração',d:'Mouse sem fio da linha Superlight, pensado para leveza e precisão em jogo competitivo.',img:'assets/mouse.png'},
 {cat:'Teclado',name:'HyperX Alloy Origins 65%',tag:'65%',d:'Layout compacto de 65% que libera espaço para o mouse, com construção firme.',img:'assets/keyboard.png'},
 {cat:'Mousepad',name:'Titorion Control',tag:'Control',d:'Superfície de controle, focada em consistência nos movimentos.',img:'assets/mousepad.png'},
 {cat:'Áudio',name:'Havit Headset',tag:'Havit',d:'Headset da Havit para ouvir o servidor com clareza.',img:'assets/headset.png'},
 {cat:'Monitor',name:'AOC Destiny',tag:'240 Hz',d:'Monitor de 240 Hz: taxa de atualização alta para imagem fluida e rápida.',img:'assets/monitor.png'}
];
const el=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
const g=document.getElementById('gear');
GEAR.forEach(x=>{const c=el('article','card reveal');
 c.innerHTML=`<div class="lab"><span>${x.cat}</span><span>${x.tag}</span></div><div class="ph${x.img?' has':''}">${x.img?`<img src="${x.img}" alt="${x.name}">`:`<span>FOTO DO PRODUTO<br>PENDENTE</span>`}</div><h3>${x.name}</h3>`;g.appendChild(c)});

// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);e.target.querySelectorAll('[data-n]').forEach(count)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach((e,i)=>{e.style.transitionDelay=(i%3)*90+'ms';io.observe(e)});
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
function count(n){const to=+n.dataset.n,dec=+(n.dataset.d||0);if(RM){return}const t0=performance.now();
 (function f(t){const p=Math.min(1,(t-t0)/1200),v=to*(1-Math.pow(1-p,3));n.textContent=v.toFixed(dec);if(p<1)requestAnimationFrame(f)})(t0)}

// parallax
const pt=document.getElementById('portrait'),av=document.getElementById('av');
if(!RM&&matchMedia('(pointer:fine)').matches){addEventListener('pointermove',e=>{
 const x=(e.clientX/innerWidth-.5)*-14,y=(e.clientY/innerHeight-.5)*-10;av.style.transform=`translate(${x}px,${y}px)`});
 const tk=document.getElementById('tick');setInterval(()=>{tk.textContent=Math.random()<.9?'128':'127'},1400)}

// copy
const TXT=`unperson — CS2 settings
Resolução: 1280x960
Proporção: 4:3
Imagem: Stretched
Qualidade gráfica: Tudo no Low
DPI: 400
Sensibilidade: 1.35
eDPI: 540 (400 x 1.35)`;
const b=document.getElementById('copy'),cl=document.getElementById('cl'),lv=document.getElementById('live');
b.addEventListener('click',async()=>{let ok=true;
 try{await navigator.clipboard.writeText(TXT)}catch(e){try{const t=el('textarea');t.value=TXT;document.body.appendChild(t);t.select();ok=document.execCommand('copy');t.remove()}catch(_){ok=false}}
 cl.textContent=ok?'COPIADO':'NÃO FOI POSSÍVEL COPIAR';b.classList.toggle('ok',ok);lv.textContent=cl.textContent;
 setTimeout(()=>{cl.textContent='COPIAR CONFIGURAÇÕES';b.classList.remove('ok')},2000)});

// playstyle
const ph=[...document.querySelectorAll('.phrase')],pk=document.getElementById('pick');let cur=0,timer;
ph.forEach((_,i)=>{const bt=el('button','',i+1);bt.type='button';bt.setAttribute('aria-label','Frase '+(i+1));bt.onclick=()=>{show(i);clearInterval(timer)};pk.appendChild(bt)});
function show(i){cur=i;ph.forEach((p,k)=>p.classList.toggle('on',k===i));[...pk.children].forEach((c,k)=>c.setAttribute('aria-pressed',k===i))}
show(0);if(!RM)timer=setInterval(()=>show((cur+1)%ph.length),3600);

// nav state
const links=[...document.querySelectorAll('nav a')];
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'})
 .observe&&document.querySelectorAll('main section').forEach(s=>new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+s.id))}),{rootMargin:'-45% 0px -50% 0px'}).observe(s));
