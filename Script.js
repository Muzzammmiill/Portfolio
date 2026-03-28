
  const projects = [
    {
      num:'001', title:'GrandWork', emoji:'', thumb:'t1',
      desc:'A complete live institute website for Aptech Computer Education. Features course listings, admissions information, faculty details, timetable, and a working contact form. Designed to be clean and easy to navigate for prospective students.',
      tags:['HTML','CSS','PHP'],
      link:'https://aptech.42web.io/?i=1', hasLink:true
    },
    {
      num:'002', title:'TailorBlend', emoji:'✂️', thumb:'t2',
      desc:'A modern, stylish website for a tailoring and clothing brand. Showcases custom stitching services, fabric options, pricing, and a contact section. Built with a clean aesthetic that perfectly matches the brand identity.',
      tags:['HTML','CSS','JavaScript'],
      link:'https://tailorblend.vercel.app/', hasLink:true
    },
    {
      num:'003', title:'Gaming Horizon', emoji:'🎮', thumb:'t3',
      desc:'A bold, immersive gaming-themed website featuring game showcases, dynamic hover effects, animated sections, and a high-energy dark UI. Designed to capture the excitement and culture of gaming.',
      tags:['HTML','CSS','JavaScript'],
      link:'https://gaming-horizon.vercel.app/', hasLink:true
    },
    {
      num:'004', title:'Tic Tac Toe (C)', emoji:'❌⭕', thumb:'t4',
      desc:'A 2-player terminal Tic Tac Toe game written in C. Features a rendered 3×3 grid, alternating turns, win/draw detection, and a replay prompt. A great demonstration of logic, loops, and arrays in C — built as part of my CSIT coursework at NED.',
      tags:['C Language','Terminal','Game Logic','NED Coursework'],
      link:null, hasLink:false
    }
  ];


  const backdrop = document.getElementById('modalBackdrop');
  const modalClose = document.getElementById('modalClose');

  function openModal(id) {
    const p = projects[id];

    document.getElementById('modalNum').textContent = p.num;
    document.getElementById('modalTitle').textContent = p.title;
    document.getElementById('modalDesc').textContent = p.desc;

    const thumb = document.getElementById('modalThumb');
    thumb.className = 'modal-thumb ' + p.thumb;
    thumb.querySelectorAll('.moji').forEach(e => e.remove());
    const em = document.createElement('span');
    em.className = 'moji';
    em.style.cssText = 'font-size:72px;position:relative;z-index:1;';
    em.textContent = p.emoji;
    thumb.insertBefore(em, modalClose);

    document.getElementById('modalTags').innerHTML =
      p.tags.map(t => `<span class="tag">${t}</span>`).join('');

    document.getElementById('modalFooter').innerHTML = p.hasLink
      ? `<a href="${p.link}" target="_blank" rel="noopener" class="modal-btn">Visit Live Site ↗</a>
         <button class="modal-btn ghost" onclick="closeModal()">Close</button>`
      : `<span class="modal-btn disabled" title="Desktop / terminal app">No Live Link</span>
         <button class="modal-btn ghost" onclick="closeModal()">Close</button>`;

    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.proj-card').forEach(card => {
    card.addEventListener('click', () => openModal(+card.dataset.id));
  });
  modalClose.addEventListener('click', closeModal);
  backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* ── Hamburger ── */
  const hambBtn = document.getElementById('hambBtn');
  const navLinks = document.getElementById('navLinks');
  hambBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  function closeNav() { navLinks.classList.remove('open'); }

  /* ── Fade Up ── */
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fu').forEach(el => obs.observe(el));
