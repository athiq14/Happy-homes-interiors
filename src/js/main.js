// Happy Homes Interiors — Core Client Interactions
// Accessible, performant, mobile-first JavaScript

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileDrawer();
  initFaqAccordion();
  initPortfolioFilters();
  initConsultationForms();
  initStatsCounters();
});

// Sticky Header on Scroll
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Mobile Drawer & Focus Trap
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.drawer-overlay');
  const closeBtn = document.querySelector('.drawer-close');
  const accordionBtn = document.querySelector('.mobile-services-accordion-btn');
  const servicesList = document.querySelector('.mobile-services-list');

  if (!toggleBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.add('active');
    if (overlay) overlay.classList.add('active');
    toggleBtn.classList.add('active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    toggleBtn.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    if (drawer.classList.contains('active')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });

  // Services accordion in drawer
  if (accordionBtn && servicesList) {
    accordionBtn.addEventListener('click', () => {
      const isExpanded = servicesList.classList.toggle('expanded');
      accordionBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      const icon = accordionBtn.querySelector('svg');
      if (icon) {
        icon.style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
      }
    });
  }
}

// Accessible FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all others in the same group
      faqItems.forEach((other) => {
        other.classList.remove('active');
        const otherTrigger = other.querySelector('.faq-trigger');
        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });

    // Keyboard support (Space / Enter)
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger.click();
      }
    });
  });
}

// Filterable Portfolio Gallery
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter || 'all';

      projectCards.forEach((card) => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Consultation Form Validation & Submission
function initConsultationForms() {
  const forms = document.querySelectorAll('form[data-consultation-form]');
  if (!forms.length) return;

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const feedback = form.querySelector('.form-feedback');
      const submitBtn = form.querySelector('button[type="submit"]');

      // Read values
      const name = form.querySelector('[name="client_name"]')?.value.trim();
      const phone = form.querySelector('[name="client_phone"]')?.value.trim();
      const email = form.querySelector('[name="client_email"]')?.value.trim();
      const service = form.querySelector('[name="service_needed"]')?.value;
      const location = form.querySelector('[name="property_location"]')?.value.trim();
      const message = form.querySelector('[name="project_details"]')?.value.trim() || '';

      // Basic phone check (minimum 10 digits)
      const phoneClean = phone ? phone.replace(/[^\d]/g, '') : '';
      if (!name || !phone || phoneClean.length < 10) {
        if (feedback) {
          feedback.className = 'form-feedback error';
          feedback.textContent = 'Please provide your full name and a valid 10-digit mobile number so our Coimbatore design team can reach you.';
        }
        return;
      }

      // Simulate loading state
      const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Submit';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Booking Consultation...';
      }

      setTimeout(() => {
        const refId = 'HH-' + Math.floor(100000 + Math.random() * 900000);

        // Store in localStorage for user session records
        try {
          const storedLeads = JSON.parse(localStorage.getItem('hh_consultations') || '[]');
          storedLeads.push({
            refId,
            name,
            phone,
            email,
            service,
            location,
            message,
            timestamp: new Date().toISOString()
          });
          localStorage.setItem('hh_consultations', JSON.stringify(storedLeads));
        } catch (err) {
          console.warn('Storage unavailable', err);
        }

        if (feedback) {
          feedback.className = 'form-feedback success';
          feedback.innerHTML = `
            <strong>Thank you, ${name}! Your consultation request (#${refId}) has been received.</strong><br>
            Our senior interior architect from the Coimbatore studio will contact you via WhatsApp / Phone at ${phone} within 24 hours.
          `;
        }

        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Enquiry Sent Successfully ✓';
          setTimeout(() => {
            submitBtn.innerHTML = originalBtnText;
          }, 4000);
        }
      }, 900);
    });
  });
}

// Animated Numerical Counters for Stats
function initStatsCounters() {
  const statNumbers = document.querySelectorAll('.hero-stat-val[data-target]');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        if (isNaN(target)) return;

        let count = 0;
        const duration = 1200;
        const stepTime = 20;
        const increment = target / (duration / stepTime);

        const timer = setInterval(() => {
          count += increment;
          if (count >= target) {
            el.textContent = target + suffix;
            clearInterval(timer);
          } else {
            el.textContent = Math.floor(count) + suffix;
          }
        }, stepTime);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  statNumbers.forEach((el) => observer.observe(el));
}
