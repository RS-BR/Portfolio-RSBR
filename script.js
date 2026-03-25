"use strict";

document.addEventListener("DOMContentLoaded", () => {

  // ── 1. Bilingual Dictionary ──
  const translations = {
    pt: {
      // Nav
      navSobre: "Sobre", navShowcase: "Showcase", navServicos: "Serviços", navContato: "Contato",

      // Hero
      heroEyebrow: "PORTFÓLIO · DIREÇÃO DE ARTE & EDIÇÃO",
      heroTitle1: "CONVERTENDO",
      heroTitle2: "VISUAL",
      heroTitle3: "NOISE",
      heroTitle4: 'EM <span class="dot-accent">CLAREZA.</span>',
      heroDesc: "Sou Raí (RSBR). Designer, editor e diretor criativo. Criador dos canais Raízando e RRSX018. Transformo cliques em retenção absoluta usando neuro-design e pacing agressivo.",
      btnHero: "VER SHOWCASE", btnEmail: "rairod00@gmail.com",

      // Marquee
      skill1: "EDIÇÃO DE VÍDEO & MOTION", skill2: "DESIGN GRÁFICO & IDENTIDADE",
      skill3: "UX / UI", skill4: "ROTEIRO & ESTRATÉGIA",
      skill5: "IA & PRODUÇÃO", skill6: "THUMBNAILS CTR",

      // Sobre
      sec1Label: "SOBRE",
      sobreEsp: "Especialidades", sobreEspHead: "Design · Vídeo · Estratégia",
      sobreRes: "Vantagem", sobreResHead: "ROI Imediato",
      sobreExp: "Experiência", sobreExpHead: "Desde 2017",
      sec1Title: "O EQUILÍBRIO ENTRE ESTÉTICA E RETENÇÃO.",
      sobreP1: "Sou o Raí, 20 anos, criador dos canais Raízando e RRSX018. Aprendi a me posicionar na internet mapeando o que realmente faz as pessoas clicarem e ficarem.",
      sobreP2: "Não acredito no \"derretimento cerebral\" dos vídeos ultra-acelerados. Acredito no design limpo, storytelling que respira e psicologia visual que prende os olhos. O básico elevado à perfeição.",
      stat1: "Anos de Estudo", stat2: "Canais Ativos", stat3: "Views Orgânicas",
      profileQuote: "\"Não é edição. É engenharia de atenção.\"",

      // Showcase
      sec2Label: "SHOWCASE",
      sec2Title: "PROJETOS & DADOS REAIS",
      sec2Sub: "Mesmo com canais recém-criados, a estética e a estrutura garantem números absurdos. Analise os dados.",
      badge1: "GAMING", badge2: "ANIME",
      subsRRSX018: "7 Inscritos na época", subsRaizando: "9 Inscritos na época",
      descSSL: "Engenharia de CTR aplicada. O visual atrai cliques imediatos mesmo num canal recém-criado (7 inscritos).",
      descDBZ: "Retenção testada do zero. Roteiro arquitetado com loops abertos garantindo views orgânicas (9 inscritos).",
      descOPM: "Análise de Design e Animação. CTR testado do zero com resultado orgânico.",
      idLabel1: "Canal Raízando", idDesc1: "Anime & Cultura",
      idLabel2: "Canal RRSX018", idDesc2: "Gaming & Rocket League",

      // Serviços
      sec3Label: "PRODUÇÃO",
      sec3Title: "A ENGENHARIA DO SEU CONTEÚDO.",
      serv1Title: "Video Editing Premium",
      serv1Desc: "Pacing perfeito, sound design impecável e color grading denso. Transformo material bruto em experiência de alta retenção.",
      serv1Spec: "Short (até 3min) · 1 dia | Longo · 3-5 dias",
      serv2Title: "Engenharia de CTR",
      serv2Desc: "Thumbnails baseadas em contradições visuais e neuromarketing para forçar o clique na home do YouTube.",
      serv2Spec: "1-2 Opções · Entrega 24h",
      serv3Title: "Arquitetura de Roteiro",
      serv3Desc: "Loops abertos e psicologia forense do espectador para evitar quedas drásticas de retenção.",
      serv3Spec: "Briefing INCLUSO · Entrega 1-2 dias",

      // CTA / Footer
      ctaLabel: "PRONTO PARA SUBIR O NÍVEL?",
      ctaTitle: "O ALGORITMO FAVORECE<br>A <span class=\"accent-orange\">RETENÇÃO.</span>",
      ctaSub: "Pare de perder público nos 5 segundos iniciais. Vamos transformar seus cliques em clientes e fãs fiéis.",
      btnZap: "INICIAR PROTOCOLO (WHATSAPP)",
      btnEmail2: "rairod00@gmail.com",
      footerCopy: "© 2026 Raí. Direção Criativa e Edição.",

      langToggleText: "EN",
    },
    en: {
      // Nav
      navSobre: "About", navShowcase: "Showcase", navServicos: "Services", navContato: "Contact",

      // Hero
      heroEyebrow: "PORTFOLIO · ART DIRECTION & EDITING",
      heroTitle1: "DIRECTING",
      heroTitle2: "VISUAL",
      heroTitle3: "NOISE",
      heroTitle4: 'INTO <span class="dot-accent">CLARITY.</span>',
      heroDesc: "I am Raí (RSBR). Designer, video editor, and creative director. Creator of Raízando and RRSX018. I turn clicks into absolute retention using neuro-design and aggressive pacing.",
      btnHero: "SEE SHOWCASE", btnEmail: "rairod00@gmail.com",

      // Marquee
      skill1: "VIDEO EDITING & MOTION", skill2: "GRAPHIC DESIGN & IDENTITY",
      skill3: "UX / UI", skill4: "SCRIPT & STRATEGY",
      skill5: "AI & PRODUCTION", skill6: "CTR THUMBNAILS",

      // About
      sec1Label: "ABOUT",
      sobreEsp: "Specialties", sobreEspHead: "Design · Video · Strategy",
      sobreRes: "Advantage", sobreResHead: "Immediate ROI",
      sobreExp: "Experience", sobreExpHead: "Since 2017",
      sec1Title: "THE BALANCE BETWEEN AESTHETICS AND RETENTION.",
      sobreP1: "I'm Raí, 20 years old, creator of the Raízando and RRSX018 channels. I learned to position myself on the internet by mapping what truly makes people click and stay.",
      sobreP2: "I don't believe in the \"brain rot\" of ultra-fast aimless videos. I believe in clean design, storytelling that breathes, and visual psychology that locks eyes. The basics elevated to perfection.",
      stat1: "Years of Study", stat2: "Active Channels", stat3: "Organic Views",
      profileQuote: '"It\'s not editing. It\'s attention engineering."',

      // Showcase
      sec2Label: "SHOWCASE",
      sec2Title: "PROJECTS & REAL DATA",
      sec2Sub: "Even with brand-new channels, aesthetics and structure guarantee absurd numbers. Analyze the data.",
      badge1: "GAMING", badge2: "ANIME",
      subsRRSX018: "7 Subscribers at the time", subsRaizando: "9 Subscribers at the time",
      descSSL: "Applied CTR engineering. The visual attracts immediate clicks even on a brand-new channel (7 subscribers).",
      descDBZ: "Retention tested from zero. Script engineered with open loops guaranteeing organic views (9 subscribers).",
      descOPM: "Design & Animation Analysis. CTR tested from zero with organic results.",
      idLabel1: "Raízando Channel", idDesc1: "Anime & Culture",
      idLabel2: "RRSX018 Channel", idDesc2: "Gaming & Rocket League",

      // Services
      sec3Label: "PRODUCTION",
      sec3Title: "THE ENGINEERING OF YOUR CONTENT.",
      serv1Title: "Premium Video Editing",
      serv1Desc: "Perfect pacing, flawless sound design, and dense color grading. I transform raw footage into high-retention experiences.",
      serv1Spec: "Short (up to 3min) · 1 day | Long · 3-5 days",
      serv2Title: "CTR Engineering",
      serv2Desc: "Thumbnails based on visual contradictions and neuromarketing to force the click on YouTube's homepage.",
      serv2Spec: "1-2 Options · 24h Delivery",
      serv3Title: "Script Architecture",
      serv3Desc: "Open loops and forensic viewer psychology to prevent drastic retention drops.",
      serv3Spec: "Briefing INCLUDED · 1-2 days delivery",

      // CTA / Footer
      ctaLabel: "READY TO LEVEL UP?",
      ctaTitle: 'THE ALGORITHM FAVORS<br><span class="accent-orange">RETENTION.</span>',
      ctaSub: "Stop losing your audience in the first 5 seconds. Let's turn your clicks into loyal fans.",
      btnZap: "START PROJECT (WHATSAPP)",
      btnEmail2: "rairod00@gmail.com",
      footerCopy: "© 2026 Raí. Creative Direction and Editing.",

      langToggleText: "PT",
    }
  };

  let currentLang = localStorage.getItem('siteLang') || 'pt';
  const langToggle = document.getElementById('langToggle');

  function applyLanguage(lang) {
    const d = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (d[key] !== undefined) el.innerHTML = d[key];
    });
    if (langToggle) langToggle.textContent = d.langToggleText;
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }

  applyLanguage(currentLang);

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'pt' ? 'en' : 'pt';
      localStorage.setItem('siteLang', currentLang);
      applyLanguage(currentLang);
    });
  }

  // ── 2. Hamburger Menu ──
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // ── 3. Navbar scroll ──
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  // ── 4. Scroll Animations ──
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });

  document.querySelectorAll('.fade-up, .fade-in').forEach(el => observer.observe(el));

  // ── 5. Animated Counters ──
  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1800;
    const start = performance.now();
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString('pt-BR');
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target.toLocaleString('pt-BR');
    };
    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

  // ── 6. Custom Cursor ──
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');

  if (cursor && follower && window.matchMedia("(pointer: fine)").matches) {
    let mx = 0, my = 0, fx = 0, fy = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = `${mx}px`;
      cursor.style.top = `${my}px`;
    });

    const loop = () => {
      fx += (mx - fx) * 0.12;
      fy += (my - fy) * 0.12;
      follower.style.left = `${fx}px`;
      follower.style.top = `${fy}px`;
      requestAnimationFrame(loop);
    };
    loop();

    document.querySelectorAll('a, button, .sc-card, .bento-card, .identity-card, .service-card').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  }

  // ── 7. Magnetic Buttons ──
  if (window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll('.magnetic').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        const s = btn.dataset.strength || 20;
        btn.style.transform = `translate(${x / s}px, ${y / s}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0,0)';
      });
    });
  }

  // ── 8. Interactive Tilt on Cards (3D Magnetic) ──
  if (window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll('.interactive-tilt').forEach(el => {
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        const xPct = (e.clientX - r.left) / r.width - 0.5;
        const yPct = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${yPct * -6}deg) rotateY(${xPct * 6}deg) scale3d(1.02,1.02,1.02) translateZ(8px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale3d(1,1,1) translateZ(0)';
      });
    });
  }

});