/**
 * ============================================================================
 * EMTECH - FUTURISTIC BLACK & NEON GREEN ANIMATION ENGINE
 * Dynamic Three.js Matrix Cyber Backdrop, GSAP ScrollTrigger & Dual WhatsApp
 * ============================================================================
 */

(function () {
  'use strict';

  // ==========================================================================
  // CONFIGURATION: TWO DIRECT WHATSAPP NUMBERS & EMAIL
  // Replace these with your active business numbers when ready
  // ==========================================================================
  const WHATSAPP_LINE_1 = '233555298484'; // WhatsApp Line 1
  const WHATSAPP_LINE_2 = '233530292379'; // WhatsApp Line 2
  const CONTACT_EMAIL_1 = 'edwingligah124@gmail.com';
  const CONTACT_EMAIL_2 = 'michealkumi922@gmail.com';

  let activeWorld = 'hero';

  // ==========================================================================
  // 1. LENIS SMOOTH SCROLL
  // ==========================================================================
  let lenis = null;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          if (lenis) {
            lenis.scrollTo(targetEl, { offset: -60, duration: 1.2 });
          } else {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  });

  // ==========================================================================
  // 2. THREE.JS FUTURISTIC CYBER BLACK & NEON GREEN BACKDROP
  // ==========================================================================
  const canvas = document.getElementById('world-canvas');
  let scene, camera, renderer;
  let particleSystem, torusMesh, gridGroup, floatingGroup;
  const particleCount = 1000;

  let mouseX = 0, mouseY = 0;
  let targetCamX = 0, targetCamY = 0;

  const greenPrimary = new THREE.Color(0x00ff88);
  const greenSecondary = new THREE.Color(0x10b981);

  function initThree() {
    if (!canvas || typeof THREE === 'undefined') return;

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x040605, 0.025);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 28);

    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- Ambient Particle Matrix ---
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 105;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 105;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      const mixed = new THREE.Color().lerpColors(greenPrimary, greenSecondary, Math.random());
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pMaterial = new THREE.PointsMaterial({
      size: 1.3,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    particleSystem = new THREE.Points(geometry, pMaterial);
    scene.add(particleSystem);

    // --- Central Rotating Cyber Torus Knot ---
    const torusGeo = new THREE.TorusKnotGeometry(6.2, 1.5, 96, 14, 2, 3);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    torusMesh = new THREE.Mesh(torusGeo, torusMat);
    scene.add(torusMesh);

    // --- Cyber Matrix Floor Grid ---
    gridGroup = new THREE.Group();
    const gridHelper = new THREE.GridHelper(70, 35, 0x00ff88, 0x062817);
    gridHelper.position.y = -13;
    gridGroup.add(gridHelper);
    scene.add(gridGroup);

    // --- Floating Algorithmic Data Cubes ---
    floatingGroup = new THREE.Group();
    for (let c = 0; c < 14; c++) {
      const cubeGeo = new THREE.BoxGeometry(1.4, 1.4, 1.4);
      const cubeMat = new THREE.MeshBasicMaterial({
        color: 0x00ff88,
        wireframe: true,
        transparent: true,
        opacity: 0.25,
      });
      const cube = new THREE.Mesh(cubeGeo, cubeMat);
      cube.position.set(
        (Math.random() - 0.5) * 45,
        (Math.random() - 0.5) * 16 - 2,
        (Math.random() - 0.5) * 35
      );
      floatingGroup.add(cube);
    }
    scene.add(floatingGroup);

    window.addEventListener('resize', onWindowResize);
    window.addEventListener('mousemove', onMouseMove);

    animateThree();
  }

  function onWindowResize() {
    if (!camera || !renderer) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function onMouseMove(e) {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  }

  const clock = new THREE.Clock();

  function animateThree() {
    requestAnimationFrame(animateThree);
    const elapsedTime = clock.getElapsedTime();

    if (particleSystem) {
      particleSystem.rotation.y = elapsedTime * 0.02;
    }

    if (torusMesh) {
      torusMesh.rotation.x = elapsedTime * 0.18;
      torusMesh.rotation.y = elapsedTime * 0.22;
    }

    if (floatingGroup) {
      floatingGroup.children.forEach((child, idx) => {
        child.rotation.x = elapsedTime * 0.4 + idx;
        child.rotation.y = elapsedTime * 0.5 + idx;
      });
    }

    targetCamX = mouseX * 2.5;
    targetCamY = mouseY * 2.0;
    camera.position.x += (targetCamX - camera.position.x) * 0.05;
    camera.position.y += (targetCamY - camera.position.y) * 0.05;

    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  }

  // ==========================================================================
  // 3. GSAP SCROLLTRIGGER & SECTION TRACKING
  // ==========================================================================
  function initScrollytelling() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const worldSections = document.querySelectorAll('.world-section');
    const hudSteps = document.querySelectorAll('.hud-step');
    const navLinks = document.querySelectorAll('.nav-item a');

    worldSections.forEach((section) => {
      const worldName = section.getAttribute('data-world-name');

      ScrollTrigger.create({
        trigger: section,
        start: 'top 55%',
        end: 'bottom 55%',
        onEnter: () => switchWorld(worldName),
        onEnterBack: () => switchWorld(worldName),
      });

      const title = section.querySelector('.section-title, .hero-title');
      if (title) {
        gsap.from(title, {
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
          },
          y: 35,
          opacity: 0,
          duration: 0.85,
          ease: 'power3.out',
        });
      }

      const cards = section.querySelectorAll(
        '.academic-card, .portfolio-card, .biz-card, .hero-capability-box'
      );
      if (cards.length > 0) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            once: true,
          },
          y: 35,
          opacity: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: 'power3.out',
          clearProps: 'all',
        });
      }

      const topicsBox = section.querySelector('.student-topics-box');
      if (topicsBox) {
        gsap.from(topicsBox, {
          scrollTrigger: {
            trigger: topicsBox,
            start: 'top 85%',
            once: true,
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          clearProps: 'all',
        });
      }
    });

    function switchWorld(worldName) {
      if (activeWorld === worldName) return;
      activeWorld = worldName;

      hudSteps.forEach((step) => {
        if (step.getAttribute('data-world') === worldName) {
          step.classList.add('active');
        } else {
          step.classList.remove('active');
        }
      });

      navLinks.forEach((link) => {
        if (link.getAttribute('data-target') === worldName) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }

  // ==========================================================================
  // 4. PORTFOLIO FILTER & MODAL
  // ==========================================================================
  const projectsData = {
    damars: {
      title: 'Damars Drive',
      category: 'LUXURY MOBILITY & RENTALS',
      image: 'assets/images/damars_drive.jpg',
      liveUrl: 'https://damars-drive.netlify.app/',
      desc: 'Premium luxury car rental platform in Ghana. Features a real-time vehicle fleet catalog, dynamic vehicle brand and model search, reservation booking inquiries, and responsive luxury automotive showcases.',
      tech: ['Next.js 14', 'React', 'Tailwind CSS', 'Netlify', 'Responsive UI'],
    },
    uniwallet: {
      title: 'UniWallet',
      category: 'STUDENT & PERSONAL FINTECH',
      image: 'assets/images/uniwallet.jpg',
      liveUrl: 'https://uniwallet.tech/',
      desc: 'Smart personal budgeting and student allowance web application with GHS allocation categories (food, hostel, savings), goal tracking, monthly analytics, and interactive charts.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Recharts', 'LocalStorage API'],
    },
    gearflow: {
      title: 'EK GearFlow',
      category: 'OPERATIONS & MEDIA REGISTRY',
      image: 'assets/images/ek_gearflow.jpg',
      liveUrl: 'https://dbjo34z68f2kg.cloudfront.net/',
      desc: 'Professional cloud-hosted media equipment registry and rental inventory management system featuring audit trails, invoice generation, client directory, and staff permissions.',
      tech: ['JavaScript (ES6+)', 'AWS CloudFront', 'Lucide Icons', 'CSS Modules'],
    },
  };

  function initPortfolio() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const cards = document.querySelectorAll('.portfolio-card');

    filterTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        filterTabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        const filterVal = tab.getAttribute('data-filter');

        cards.forEach((card) => {
          const cardCat = card.getAttribute('data-category');
          if (filterVal === 'all' || cardCat === filterVal) {
            gsap.to(card, { autoAlpha: 1, scale: 1, duration: 0.3, display: 'flex' });
          } else {
            gsap.to(card, { autoAlpha: 0, scale: 0.95, duration: 0.2, display: 'none' });
          }
        });
      });
    });

    const modalBackdrop = document.getElementById('project-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalDesc = document.getElementById('modal-desc');
    const modalTechStack = document.getElementById('modal-tech-stack');
    const modalLiveLink = document.getElementById('modal-live-link');

    function openModal(id) {
      const data = projectsData[id];
      if (!data) return;

      if (modalImg) modalImg.src = data.image;
      if (modalTitle) modalTitle.textContent = data.title;
      if (modalCategory) modalCategory.textContent = data.category;
      if (modalDesc) modalDesc.textContent = data.desc;

      if (modalTechStack) {
        modalTechStack.innerHTML = '';
        data.tech.forEach((t) => {
          const chip = document.createElement('span');
          chip.className = 'tech-chip';
          chip.textContent = t;
          modalTechStack.appendChild(chip);
        });
      }

      if (modalLiveLink) {
        modalLiveLink.href = data.liveUrl;
      }

      modalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (lenis) lenis.stop();
    }

    function closeModal() {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
      if (lenis) lenis.start();
    }

    cards.forEach((card) => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-project-id');
        openModal(id);
      });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeModal();
      });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
        closeModal();
      }
    });

    const modalCtaBtn = document.getElementById('modal-cta-btn');
    if (modalCtaBtn) modalCtaBtn.addEventListener('click', closeModal);
  }

  // ==========================================================================
  // 5. 3D CARD TILT ON HOVER
  // ==========================================================================
  function initCardTilt() {
    const tiltCards = document.querySelectorAll('[data-tilt]');
    tiltCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      });
    });
  }

  // ==========================================================================
  // 6. INQUIRY FORM: TWO WHATSAPP LINES ROUTING
  // ==========================================================================
  function initInquiryForm() {
    let selectedService = 'Student Final-Year Project';
    const serviceChips = document.querySelectorAll('#service-chips .chip-btn');

    serviceChips.forEach((btn) => {
      btn.addEventListener('click', () => {
        serviceChips.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        selectedService = btn.getAttribute('data-service');
      });
    });

    const form = document.getElementById('simple-inquiry-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('client-name').value.trim();
        const phone = document.getElementById('client-phone').value.trim();
        const note = document.getElementById('client-note').value.trim();

        // Check which line the user selected
        const selectedLineRadio = document.querySelector('input[name="wa-target-line"]:checked');
        const chosenLine = selectedLineRadio ? selectedLineRadio.value : 'line1';
        const targetNumber = chosenLine === 'line2' ? WHATSAPP_LINE_2 : WHATSAPP_LINE_1;

        // Construct pre-filled WhatsApp message
        const waText = encodeURIComponent(
          `Hello EMtech!\n\n` +
          `Name: ${name}\n` +
          `Phone: ${phone}\n` +
          `Project: ${selectedService}\n` +
          `Brief: ${note}`
        );

        const waUrl = `https://wa.me/${targetNumber}?text=${waText}`;
        window.open(waUrl, '_blank');

        showToast(`Inquiry created! Opening WhatsApp (${chosenLine === 'line2' ? 'Line 2' : 'Line 1'})...`);
        form.reset();
      });
    }

    // Direct Copy Email Cards
    const emailCards = document.querySelectorAll('.copy-email-card');
    emailCards.forEach((card) => {
      card.addEventListener('click', () => {
        const email = card.getAttribute('data-email');
        if (email) {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(email).then(() => {
              showToast(`Email copied: ${email}`);
            }).catch(() => {
              showToast(`Email: ${email}`);
            });
          } else {
            showToast(`Email: ${email}`);
          }
        }
      });
    });
  }

  // ==========================================================================
  // 7. TOAST NOTIFICATION
  // ==========================================================================
  let toastTimer = null;
  function showToast(msg) {
    const toast = document.getElementById('toast-notice');
    const toastText = document.getElementById('toast-text');
    if (!toast || !toastText) return;

    toastText.textContent = msg;
    toast.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    initThree();
    initScrollytelling();
    initPortfolio();
    initCardTilt();
    initInquiryForm();
  });
})();
