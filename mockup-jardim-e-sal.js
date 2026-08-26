
  // fictional site notice (fires once, on first scroll)
  window.addEventListener('scroll', ()=>{
    alert('This is a fictional website. It serves only as a layout demonstration.\n\nEste é um site fictício. Serve apenas como demonstração de layout.');
  }, { once:true });

  // mobile nav toggle
  const burger = document.getElementById('burgerBtn');
  const mainNav = document.getElementById('mainNav');
  burger.addEventListener('click', ()=> mainNav.classList.toggle('open'));
  if(window.innerWidth <= 860){
    document.querySelectorAll('.main-nav li').forEach(li=>{
      const link = li.querySelector('a');
      const sub = li.querySelector('.submenu');
      if(sub){
        link.addEventListener('click', (e)=>{ e.preventDefault(); li.classList.toggle('mobile-open'); });
      }
    });
  }

  // parallax hero (only runs on pages that have the hero section)
  const heroBg = document.getElementById('heroBg');
  if(heroBg){
    window.addEventListener('scroll', ()=>{
      const y = window.scrollY;
      heroBg.style.transform = `translateY(${y * 0.25}px)`;
    });
  }

  // menu tabs
  document.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });

  // chat widget
  const chatToggle = document.getElementById('chatToggle');
  const chatPanel = document.getElementById('chatPanel');
  const chatBody = document.getElementById('chatBody');
  const chatInput = document.getElementById('chatInput');
  const chatSend = document.getElementById('chatSend');
  let chatHistory = [];
  chatToggle.addEventListener('click', ()=> chatPanel.classList.toggle('open'));

  function addMsg(text, who){
    const div = document.createElement('div');
    div.className = 'msg ' + who;
    div.textContent = text;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
    return div;
  }

  const SYSTEM = `Você é o assistente do restaurante fictício "Jardim & Sal" em Cascais, Portugal (mockup de demonstração). Responda em português, poucas frases, tom acolhedor. Horário: quarta a domingo, 12h30-15h e 19h30-23h. Cozinha mediterrânica, menu sazonal. Se perguntarem algo que não sabe, diga com honestidade que não tem essa informação.`;

  async function sendChat(){
    const text = chatInput.value.trim();
    if(!text) return;
    addMsg(text, 'user');
    chatHistory.push({role:'user', content:text});
    chatInput.value = '';
    const typing = addMsg('a escrever...', 'bot');
    try{
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ model:'claude-sonnet-4-6', max_tokens:600, system:SYSTEM, messages:chatHistory })
      });
      const data = await res.json();
      const reply = (data.content||[]).map(b=>b.text||'').join('').trim() || 'Não consegui responder agora.';
      typing.remove();
      addMsg(reply, 'bot');
      chatHistory.push({role:'assistant', content:reply});
    }catch(e){
      typing.remove();
      addMsg('Erro ao responder agora. Tente novamente.', 'bot');
    }
  }
  chatSend.addEventListener('click', sendChat);
  chatInput.addEventListener('keydown', e=>{ if(e.key==='Enter') sendChat(); });
