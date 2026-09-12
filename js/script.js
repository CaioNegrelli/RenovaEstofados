document.addEventListener('DOMContentLoaded', () => {
  // Menu hambúrguer (mobile) --------------------------------------------
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav-menu');

  if (toggle && nav) {
    const closeMenu = () => {
      nav.classList.remove('is-open');
      toggle.classList.remove('is-active');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
    };

    const toggleMenu = () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-active', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    };

    toggle.addEventListener('click', toggleMenu);

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Fecha o menu se a tela crescer para o breakpoint desktop
    window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
      if (e.matches) closeMenu();
    });
  }

  // Realce do link ativo conforme a seção visível ------------------------
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.header__nav a');

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    const setActive = (id) => {
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  // Animação "bolha estourando" nos Diferenciais --------------------------
  const popTargets = document.querySelectorAll('.diferenciais__item, .diferenciais__art');

  if (popTargets.length && 'IntersectionObserver' in window) {
    const popObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    popTargets.forEach((el) => popObserver.observe(el));
  }

  // Carrossel de Serviços (efeito de profundidade) ------------------------
  const track = document.querySelector('.servicos__track');

  if (track) {
    const slides = Array.from(track.querySelectorAll('.servicos__slide'));
    const prevBtn = document.querySelector('.servicos__arrow--prev');
    const nextBtn = document.querySelector('.servicos__arrow--next');
    const dots = Array.from(document.querySelectorAll('.servicos__dot'));
    let active = 0;

    const getSpacing = () => Math.min(230, track.clientWidth * 0.34);

    const render = () => {
      const spacing = getSpacing();
      const n = slides.length;

      slides.forEach((slide, i) => {
        // Wrap the offset around the circle so the slide right before
        // `active` shows up on the left instead of trailing off the far
        // right (e.g. with active = 0, the last slide should sit at -1,
        // not n - 1) — otherwise the carousel opens with only a right-hand
        // neighbor visible instead of one on each side.
        let offset = (i - active) % n;
        if (offset > n / 2) offset -= n;
        else if (offset < -n / 2) offset += n;
        const distance = Math.abs(offset);
        const scale = distance === 0 ? 1 : distance === 1 ? 0.82 : 0.68;
        const opacity = distance === 0 ? 1 : distance === 1 ? 0.55 : 0;

        slide.style.transform = `translate(-50%, -50%) translateX(${offset * spacing}px) scale(${scale})`;
        slide.style.opacity = String(opacity);
        slide.style.zIndex = String(10 - distance);
        slide.style.pointerEvents = distance > 1 ? 'none' : 'auto';
        slide.setAttribute('data-active', distance === 0 ? 'true' : 'false');
        slide.setAttribute('aria-hidden', distance === 0 ? 'false' : 'true');
      });

      dots.forEach((dot, i) => dot.classList.toggle('is-active', i === active));
    };

    const goTo = (index) => {
      active = (index + slides.length) % slides.length;
      render();
    };

    prevBtn?.addEventListener('click', () => goTo(active - 1));
    nextBtn?.addEventListener('click', () => goTo(active + 1));

    slides.forEach((slide, i) => {
      slide.addEventListener('click', () => {
        if (i !== active) goTo(i);
      });
    });

    dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

    let touchStartX = null;

    track.addEventListener(
      'touchstart',
      (e) => {
        touchStartX = e.touches[0].clientX;
      },
      { passive: true }
    );

    track.addEventListener(
      'touchend',
      (e) => {
        if (touchStartX === null) return;
        const diff = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(diff) > 40) {
          diff > 0 ? goTo(active - 1) : goTo(active + 1);
        }
        touchStartX = null;
      },
      { passive: true }
    );

    window.addEventListener('resize', render);
    render();
  }
});
