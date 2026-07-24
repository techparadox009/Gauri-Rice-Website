// ============ GAURI RICE — main.js ============

// Header scroll state
const header = document.querySelector('.site-header');
const onScroll = () => {
  if(!header) return;
  header.classList.toggle('scrolled', window.scrollY > 12);
};
document.addEventListener('scroll', onScroll, { passive:true });
onScroll();

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if(navToggle && navLinks){
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  }));
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
if('IntersectionObserver' in window){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.15, rootMargin:'0px 0px -60px 0px' });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

// Animated stat counters
const counters = document.querySelectorAll('[data-count]');
if(counters.length && 'IntersectionObserver' in window){
  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const duration = 1400;
      const start = performance.now();
      const startVal = 0;
      const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
      function tick(now){
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = startVal + (target - startVal) * eased;
        el.textContent = decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString('en-IN');
        el.textContent += suffix;
        if(p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      counterIO.unobserve(el);
    });
  }, { threshold:0.4 });
  counters.forEach(c => counterIO.observe(c));
}

// Footer year
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

// Enquiry form (static hosting — no backend, so we confirm + mailto fallback)
const enquiryForm = document.querySelector('#enquiry-form');
if(enquiryForm){
  enquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(enquiryForm);
    const name = data.get('name') || '';
    const company = data.get('company') || '';
    const phone = data.get('phone') || '';
    const email = data.get('email') || '';
    const product = data.get('product') || '';
    const message = data.get('message') || '';
    const body = `Name: ${name}%0ACompany: ${company}%0APhone: ${phone}%0AEmail: ${email}%0AProduct interest: ${product}%0A%0AMessage:%0A${message}`;
    const mailLink = `mailto:enquiry@gauririce.com?subject=${encodeURIComponent('New Enquiry from Website — ' + name)}&body=${body}`;
    window.location.href = mailLink;
    const status = document.querySelector('#form-status');
    if(status){
      status.textContent = 'Opening your email app to send this enquiry to enquiry@gauririce.com…';
      status.style.opacity = '1';
    }
  });
}
