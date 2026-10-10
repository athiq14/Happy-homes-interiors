// Generator script to produce static HTML pages from centralized site-data.js
// Generates 22 unique, fully styled, SEO-optimized pages for Happy Homes Interiors

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { company, services, projects, testimonials, faqs } from '../src/data/site-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Helper to ensure directory exists
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Common Header Component
function renderHeader(currentPath) {
  return `
  <header class="site-header" role="banner">
    <div class="container header-container">
      <a href="/" class="site-logo" aria-label="Happy Homes Interiors Home">
        <img src="/images/logo.png" alt="Happy Homes Interiors Logo" width="140" height="48" onerror="this.onerror=null; this.src='/images/logo.png';">
      </a>

      <nav class="desktop-nav" aria-label="Primary Navigation">
        <a href="/" class="nav-link ${currentPath === '/' ? 'active' : ''}">Home</a>
        <a href="/about/" class="nav-link ${currentPath.startsWith('/about') ? 'active' : ''}">About</a>
        
        <div class="nav-item-dropdown">
          <a href="/services/" class="nav-link dropdown-toggle ${currentPath.startsWith('/services') ? 'active' : ''}" aria-expanded="false" aria-haspopup="true">
            Services
            <svg class="dropdown-icon" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
          <div class="services-dropdown" role="menu">
            <div class="dropdown-grid">
              ${services.map(s => `
                <a href="/services/${s.slug}/" class="dropdown-item" role="menuitem">
                  <span class="dropdown-item-title">${s.navTitle}</span>
                  <span class="dropdown-item-desc">${s.category}</span>
                </a>
              `).join('')}
            </div>
            <div class="dropdown-footer">
              <span style="font-size: 0.8rem; color: var(--color-text-light);">All 12 interior services verified in Coimbatore</span>
              <a href="/services/">View All Services Overview →</a>
            </div>
          </div>
        </div>

        <a href="/projects/" class="nav-link ${currentPath.startsWith('/projects') ? 'active' : ''}">Projects</a>
        <a href="/faq/" class="nav-link ${currentPath.startsWith('/faq') ? 'active' : ''}">FAQ</a>
        <a href="/contact/" class="nav-link ${currentPath.startsWith('/contact') ? 'active' : ''}">Contact</a>
      </nav>

      <div class="header-actions">
        <a href="tel:${company.phonePrimaryTel}" class="header-phone-link" aria-label="Call Happy Homes Interiors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span>${company.phonePrimary}</span>
        </a>
        <a href="/contact/" class="btn btn-primary btn-sm">Book Consultation</a>
        <button class="mobile-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Drawer Navigation -->
  <div class="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
    <div class="drawer-header">
      <a href="/" class="site-logo">
        <img src="/images/logo.png" alt="Happy Homes Interiors" width="120">
      </a>
      <button class="drawer-close" aria-label="Close menu">&times;</button>
    </div>
    <div class="mobile-menu-list">
      <a href="/" class="mobile-menu-link">Home</a>
      <a href="/about/" class="mobile-menu-link">About Us</a>
      
      <button class="mobile-services-accordion-btn" aria-expanded="false">
        <span>Our Services</span>
        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
      <div class="mobile-services-list">
        <a href="/services/" class="mobile-sub-link" style="font-weight: 700; color: var(--color-walnut);">• All Services Overview</a>
        ${services.map(s => `
          <a href="/services/${s.slug}/" class="mobile-sub-link">• ${s.navTitle}</a>
        `).join('')}
      </div>

      <a href="/projects/" class="mobile-menu-link">Projects</a>
      <a href="/faq/" class="mobile-menu-link">FAQ</a>
      <a href="/contact/" class="mobile-menu-link">Contact</a>
    </div>

    <div class="drawer-actions">
      <a href="/contact/" class="btn btn-primary btn-sm" style="width: 100%;">Book a Consultation</a>
      <a href="tel:${company.phonePrimaryTel}" class="btn btn-outline btn-sm" style="width: 100%;">Call: ${company.phonePrimary}</a>
      <a href="${company.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm" style="width: 100%;">Chat on WhatsApp</a>
    </div>
  </div>
  <div class="drawer-overlay"></div>
  `;
}

// Common Footer Component
function renderFooter() {
  return `
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-top">
        <div>
          <a href="/" class="site-logo" style="margin-bottom: 1.25rem;">
            <img src="/images/logo.png" alt="Happy Homes Interiors" width="150" style="filter: brightness(0) invert(1);">
          </a>
          <p class="footer-desc">${company.shortDesc}</p>
          <div class="footer-contact-list">
            <div class="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>${company.address.formatted}</span>
            </div>
            <div class="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <div>
                <a href="tel:${company.phonePrimaryTel}">${company.phonePrimary}</a> / 
                <a href="tel:${company.phoneSecondaryTel}">${company.phoneSecondary}</a>
              </div>
            </div>
            <div class="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a href="mailto:${company.emailPrimary}">${company.emailPrimary}</a>
            </div>
          </div>
          <div class="footer-social-links">
            <a href="${company.socials.facebook}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="${company.socials.instagram}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="${company.socials.youtube}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
            <a href="${company.socials.twitter}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 class="footer-col-title">Navigation</h4>
          <ul class="footer-nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/about/">About Us</a></li>
            <li><a href="/services/">All Services</a></li>
            <li><a href="/projects/">Design Portfolio</a></li>
            <li><a href="/faq/">Frequently Asked Questions</a></li>
            <li><a href="/contact/">Book a Consultation</a></li>
            <li><a href="/privacy-policy/">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-col-title">Specialized Services</h4>
          <ul class="footer-nav-list">
            <li><a href="/services/modular-kitchens/">Modular Kitchens</a></li>
            <li><a href="/services/wardrobes/">Wardrobes</a></li>
            <li><a href="/services/living-room-interiors/">Living Room Interiors</a></li>
            <li><a href="/services/bedroom-interiors/">Bedroom Interiors</a></li>
            <li><a href="/services/pooja-units/">Pooja Units</a></li>
            <li><a href="/services/false-ceilings/">False Ceilings</a></li>
            <li><a href="/services/tv-units/">TV Units</a></li>
            <li><a href="/services/complete-home-interiors/">Complete Home Fit-Outs</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-col-title">Studio Hours & Areas</h4>
          <p class="footer-desc" style="margin-bottom: 0.8rem;">
            <strong>Hours:</strong> ${company.hours}
          </p>
          <p class="footer-desc" style="margin-bottom: 1.25rem;">
            <strong>Serving Coimbatore:</strong> RS Puram, Peelamedu, Race Course, Ramanathapuram, Saibaba Colony, Gandhipuram, Sulur, Ukkadam, Tirupur & Tamil Nadu.
          </p>
          <a href="/contact/" class="btn btn-outline-white btn-sm" style="width: 100%;">Visit Our Studio</a>
        </div>
      </div>

      <div class="footer-bottom">
        <div>
          © ${new Date().getFullYear()} ${company.name}. All Rights Reserved. Turnkey Interior Designers in Coimbatore.
        </div>
        <div>
          <a href="/privacy-policy/">Privacy Policy</a> &nbsp;|&nbsp; 
          <a href="/contact/">Contact Us</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Floating Actions -->
  <div class="floating-actions" aria-label="Quick Communication">
    <a href="${company.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="fab-btn fab-whatsapp" aria-label="Chat with our designers on WhatsApp">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.199.534 1.286.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.087-.179.182-.077.357.101.174.45 1.05 1.157 1.679.57.507 1.05.664 1.223.751.173.087.275.072.376-.043.101-.116.433-.505.549-.679.116-.173.231-.144.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.072.043.419-.101.824z"/>
      </svg>
    </a>
    <a href="tel:${company.phonePrimaryTel}" class="fab-btn fab-phone" aria-label="Call Happy Homes Interiors">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    </a>
  </div>
  `;
}

// Reusable Consultation Booking Form HTML
function renderConsultationForm(formTitle = "Book Your Personalized Design Consultation", formSubtitle = "Meet with our senior interior architects at our Coimbatore studio or your residence.") {
  return `
  <div class="form-card" id="consultation-form-section">
    <div style="margin-bottom: 2rem;">
      <span class="eyebrow">Design Consultation</span>
      <h3 style="font-size: 2rem; margin-bottom: 0.5rem;">${formTitle}</h3>
      <p>${formSubtitle}</p>
    </div>

    <form data-consultation-form>
      <div class="form-grid">
        <div>
          <label class="form-label" for="client_name">Full Name *</label>
          <input type="text" id="client_name" name="client_name" class="form-control" placeholder="e.g. Ramesh Sundaram" required>
        </div>
        <div>
          <label class="form-label" for="client_phone">Phone / WhatsApp Number *</label>
          <input type="tel" id="client_phone" name="client_phone" class="form-control" placeholder="e.g. 99943 11447" required>
        </div>
        <div>
          <label class="form-label" for="client_email">Email Address</label>
          <input type="email" id="client_email" name="client_email" class="form-control" placeholder="name@example.com">
        </div>
        <div>
          <label class="form-label" for="property_location">Property Location in Coimbatore *</label>
          <input type="text" id="property_location" name="property_location" class="form-control" placeholder="e.g. RS Puram, Peelamedu, Avinashi Rd" required>
        </div>
        <div>
          <label class="form-label" for="service_needed">Service Requirement *</label>
          <select id="service_needed" name="service_needed" class="form-control" required>
            <option value="">Select Service Needed</option>
            ${services.map(s => `<option value="${s.title}">${s.title}</option>`).join('')}
          </select>
        </div>
        <div>
          <label class="form-label" for="property_type">Property Type</label>
          <select id="property_type" name="property_type" class="form-control">
            <option value="Apartment / Flat (2BHK / 3BHK / 4BHK)">Apartment / Flat</option>
            <option value="Independent Luxury Villa / Duplex">Independent Luxury Villa / Duplex</option>
            <option value="Existing Home Renovation">Existing Home Renovation</option>
            <option value="Commercial / Office Space">Commercial / Office Space</option>
          </select>
        </div>
        <div>
          <label class="form-label" for="project_budget">Estimated Budget Range</label>
          <select id="project_budget" name="project_budget" class="form-control">
            <option value="₹3 Lakhs – ₹6 Lakhs">₹3 Lakhs – ₹6 Lakhs</option>
            <option value="₹6 Lakhs – ₹12 Lakhs">₹6 Lakhs – ₹12 Lakhs</option>
            <option value="₹12 Lakhs – ₹25 Lakhs">₹12 Lakhs – ₹25 Lakhs</option>
            <option value="₹25 Lakhs+ (Luxury Turnkey)">₹25 Lakhs+ (Luxury Turnkey)</option>
          </select>
        </div>
        <div>
          <label class="form-label" for="project_timeline">Expected Move-in Timeline</label>
          <select id="project_timeline" name="project_timeline" class="form-control">
            <option value="Within 30 Days (Immediate)">Within 30 Days (Immediate)</option>
            <option value="1 – 2 Months">1 – 2 Months</option>
            <option value="3 – 6 Months">3 – 6 Months</option>
            <option value="Planning / Future Stage">Planning / Future Stage</option>
          </select>
        </div>
        <div class="form-group-full">
          <label class="form-label" for="project_details">Tell Us About Your Project & Specific Requirements</label>
          <textarea id="project_details" name="project_details" class="form-control" placeholder="Share your floorplan details, design ideas, or specific room preferences..."></textarea>
        </div>
      </div>

      <div style="margin-top: 1.75rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <button type="submit" class="btn btn-primary btn-lg">Submit Consultation Request →</button>
        <span style="font-size: 0.82rem; color: var(--color-text-light);">Direct privacy protection • Zero spam guarantee</span>
      </div>

      <div class="form-feedback" role="alert"></div>
    </form>
  </div>
  `;
}

// Master HTML Shell
function renderHtmlShell({ title, description, canonicalUrl, ogImage = '/images/services/modular-kitchen.jpg', currentPath, content, schemaJson }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${canonicalUrl}">
  
  <!-- Open Graph / Meta -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${ogImage}">
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/images/logo.png">
  
  <!-- Design System CSS -->
  <link rel="stylesheet" href="/src/css/main.css">

  ${schemaJson ? `<script type="application/ld+json">${JSON.stringify(schemaJson)}</script>` : ''}
</head>
<body>
  ${renderHeader(currentPath)}

  <main id="main-content">
    ${content}
  </main>

  ${renderFooter()}

  <!-- Client JavaScript -->
  <script type="module" src="/src/js/main.js"></script>
</body>
</html>`;
}

// ============================================================================
// 1. GENERATE HOMEPAGE (/)
// ============================================================================
function generateHomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": company.name,
    "image": "https://happyhomesinteriors.com/images/logo.png",
    "@id": "https://happyhomesinteriors.com/#organization",
    "url": "https://happyhomesinteriors.com",
    "telephone": company.phonePrimary,
    "priceRange": "₹₹ - ₹₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": company.address.line1 + ", " + company.address.line2,
      "addressLocality": company.address.city,
      "addressRegion": company.address.state,
      "postalCode": company.address.postalCode,
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "22:00"
    }
  };

  const content = `
  <!-- Immersive Hero Banner -->
  <section class="home-hero">
    <div class="hero-media-wrapper">
      <video class="hero-video" autoplay loop muted playsinline poster="/images/hero/hero-poster.jpg">
        <source src="/videos/hero.mp4" type="video/mp4">
      </video>
      <div class="hero-gradient-overlay"></div>
    </div>

    <div class="container hero-content">
      <div class="hero-badge">Turnkey Interior Studio • Coimbatore</div>
      <h1 class="hero-title">Crafting Timeless <span>Living Spaces</span> with Soul & Precision</h1>
      <p class="hero-desc">From bespoke modular kitchens and fluted wardrobe suites to consecrated pooja rooms and complete turnkey home fit-outs across Coimbatore and Tamil Nadu.</p>
      
      <div class="hero-actions">
        <a href="/contact/" class="btn btn-brass btn-lg">Book Free Consultation</a>
        <a href="/projects/" class="btn btn-outline-white btn-lg">Explore Portfolio</a>
      </div>

      <div class="hero-stats-bar">
        <div class="hero-stat-item">
          <span class="hero-stat-val" data-target="10" data-suffix="+">10+</span>
          <span class="hero-stat-lbl">Years Experience</span>
        </div>
        <div class="hero-stat-item">
          <span class="hero-stat-val" data-target="450" data-suffix="+">450+</span>
          <span class="hero-stat-lbl">Delivered Homes</span>
        </div>
        <div class="hero-stat-item">
          <span class="hero-stat-val" data-target="600" data-suffix="+">600+</span>
          <span class="hero-stat-lbl">Happy Families</span>
        </div>
        <div class="hero-stat-item">
          <span class="hero-stat-val" data-target="10" data-suffix=" Yrs">10 Yrs</span>
          <span class="hero-stat-lbl">Material Warranty</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Brand Introduction -->
  <section class="section section-ivory">
    <div class="container">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 4rem; align-items: center;">
        <div>
          <span class="eyebrow">About Happy Homes Interiors</span>
          <h2 style="margin-bottom: 1.5rem;">Where Precision Joinery Meets Refined Aesthetics</h2>
          <p class="lead">“ Decorate your home. It gives the illusion that your life is more interesting than it really is. ”</p>
          <p>Happy Homes Interiors has been successfully providing a full range of space planning and turnkey fit-out services to the interior contracting industry in Coimbatore. Our steady growth throughout these years is rooted in our primary principle of unwavering commitment to quality along with our corporate office facilities, strategic planning, and hands-on project management.</p>
          <p>Our ability to overcome spatial challenges without compromising on quality serves as a testament to our craftsmanship. A bold new lifestyle awaits you with Happy Homes Interiors.</p>
          <div style="margin-top: 2rem;">
            <a href="/about/" class="btn btn-primary">Discover Our Story →</a>
          </div>
        </div>
        <div style="position: relative;">
          <img src="/images/about-studio.jpg" alt="Happy Homes Interiors Craftsmanship Studio" style="border-radius: var(--radius-md); box-shadow: var(--shadow-lg); width: 100%;" onerror="this.onerror=null; this.src='/images/hero/studio-intro.jpg';">
          <div style="position: absolute; bottom: -1.5rem; right: -1.5rem; background: var(--color-walnut); color: var(--color-ivory); padding: 1.5rem; border-radius: var(--radius-sm); max-width: 240px; box-shadow: var(--shadow-md);">
            <div style="font-family: var(--font-serif); font-size: 2.2rem; font-weight: 700; color: var(--color-brass-light);">100%</div>
            <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em;">Factory-Manufactured Dust-Free Assembly</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Services Overview -->
  <section class="section section-white">
    <div class="container">
      <div class="section-header text-center">
        <span class="eyebrow eyebrow-center">Our Expertise</span>
        <h2>Comprehensive Interior Solutions</h2>
        <p>From modular joinery to full architectural renovations, explore our confirmed suite of bespoke interior design disciplines.</p>
      </div>

      <div class="services-grid">
        ${services.slice(0, 6).map(s => `
          <article class="service-card">
            <div class="service-card-media">
              <img src="${s.heroImage}" alt="${s.title} — Happy Homes Interiors Coimbatore" loading="lazy" onerror="this.onerror=null; this.src='/images/services/modular-kitchen.jpg';">
              <span class="service-card-tag">${s.category}</span>
            </div>
            <div class="service-card-body">
              <h3 class="service-card-title">${s.title}</h3>
              <p class="service-card-desc">${s.shortDesc}</p>
              <a href="/services/${s.slug}/" class="service-card-link">Explore Service Details →</a>
            </div>
          </article>
        `).join('')}
      </div>

      <div style="text-align: center; margin-top: 3.5rem;">
        <a href="/services/" class="btn btn-outline">Browse All 12 Confirmed Services →</a>
      </div>
    </div>
  </section>

  <!-- Featured Real Projects -->
  <section class="section section-ivory">
    <div class="container">
      <div class="section-header text-center">
        <span class="eyebrow eyebrow-center">Verified Portfolio</span>
        <h2>Signature Delivered Residences</h2>
        <p>Explore real turnkey transformations and custom woodwork completed across Coimbatore's premier neighborhoods.</p>
      </div>

      <div class="portfolio-grid">
        ${projects.slice(0, 3).map(p => `
          <article class="project-card">
            <div class="project-card-media">
              <img src="${p.heroImage}" alt="${p.title} in ${p.location}" loading="lazy" onerror="this.onerror=null; this.src='/images/projects/kitchen-hero.jpg';">
              <div class="project-card-overlay"></div>
              <span class="project-card-badge">${p.category}</span>
            </div>
            <div class="project-card-body">
              <div class="project-card-meta">
                <span>📍 ${p.location}</span>
                <span>•</span>
                <span>${p.area}</span>
              </div>
              <h3 class="project-card-title">${p.title}</h3>
              <p class="project-card-desc">${p.shortDesc}</p>
              <a href="/projects/${p.slug}/" class="service-card-link">View Project Case Study →</a>
            </div>
          </article>
        `).join('')}
      </div>

      <div style="text-align: center; margin-top: 3.5rem;">
        <a href="/projects/" class="btn btn-primary">View Full Portfolio Gallery →</a>
      </div>
    </div>
  </section>

  <!-- 4-Step Design Process -->
  <section class="section section-dark">
    <div class="container">
      <div class="section-header text-center">
        <span class="eyebrow eyebrow-center" style="color: var(--color-brass-light);">Workflow</span>
        <h2>How We Bring Your Vision to Reality</h2>
        <p>Our structured 4-step fit-out framework guarantees transparent pricing, timely delivery, and zero on-site headaches.</p>
      </div>

      <div class="process-grid">
        <div class="process-step-card" style="background: var(--color-dark-surface); border-color: rgba(255,255,255,0.08);">
          <div class="step-num">01</div>
          <h3 class="step-title" style="color: var(--color-white);">Discovery & Vastu Survey</h3>
          <p class="step-desc">Laser-accurate site measurement and comprehensive family lifestyle consultation at our studio or site.</p>
        </div>
        <div class="process-step-card" style="background: var(--color-dark-surface); border-color: rgba(255,255,255,0.08);">
          <div class="step-num">02</div>
          <h3 class="step-title" style="color: var(--color-white);">Photorealistic 3D Renders</h3>
          <p class="step-desc">Detailed 3D visualizations, material sample curation, and itemized transparent BOQ cost locking.</p>
        </div>
        <div class="process-step-card" style="background: var(--color-dark-surface); border-color: rgba(255,255,255,0.08);">
          <div class="step-num">03</div>
          <h3 class="step-title" style="color: var(--color-white);">Factory Precision Milling</h3>
          <p class="step-desc">Computerized cutting, 2mm PVC edge banding, and pre-drilled hardware mortises in our dust-free facility.</p>
        </div>
        <div class="process-step-card" style="background: var(--color-dark-surface); border-color: rgba(255,255,255,0.08);">
          <div class="step-num">04</div>
          <h3 class="step-title" style="color: var(--color-white);">Clean Assembly & Handover</h3>
          <p class="step-desc">Swift, dustless on-site modular installation followed by deep cleaning and 10-year warranty certificate.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="section section-white">
    <div class="container">
      <div class="section-header text-center">
        <span class="eyebrow eyebrow-center">Client Feedback</span>
        <h2>Trusted by Homeowners Across Coimbatore</h2>
        <p>Real experiences from families who trusted Happy Homes Interiors with their living spaces.</p>
      </div>

      <div class="testimonials-grid">
        ${testimonials.slice(0, 3).map(t => `
          <div class="testimonial-card">
            <p class="testimonial-quote">${t.quote}</p>
            <div class="testimonial-author">
              <div>
                <div class="author-name">${t.author}</div>
                <div class="author-loc">${t.location}</div>
              </div>
              <span style="font-size: 0.78rem; font-weight: 600; color: var(--color-brass-dark);">${t.service}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Lead Consultation Form -->
  <section class="section section-ivory">
    <div class="container container-narrow">
      ${renderConsultationForm()}
    </div>
  </section>
  `;

  const html = renderHtmlShell({
    title: "Happy Homes Interiors — Bespoke Interior Design & Turnkey Fit-Outs in Coimbatore",
    description: "Leading interior designer in Coimbatore specializing in modular kitchens, wardrobes, living rooms, pooja units, and complete turnkey home interiors.",
    canonicalUrl: "https://happyhomesinteriors.com/",
    currentPath: "/",
    content,
    schemaJson: schema
  });

  fs.writeFileSync(path.join(rootDir, 'index.html'), html);
  console.log('✓ Generated / (index.html)');
}

// ============================================================================
// 2. GENERATE ABOUT PAGE (/about)
// ============================================================================
function generateAboutPage() {
  const content = `
  <section class="page-hero">
    <div class="container page-hero-inner">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span class="breadcrumbs-separator">/</span>
        <span class="breadcrumbs-current">About Us</span>
      </nav>
      <span class="eyebrow">Studio Profile</span>
      <h1>About Happy Homes Interiors</h1>
      <p class="lead" style="max-width: 780px;">A decade of dedicated interior contracting, turnkey execution, and bespoke joinery craftsmanship in Coimbatore, Tamil Nadu.</p>
    </div>
  </section>

  <section class="section section-white">
    <div class="container">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 4rem; align-items: center;">
        <div>
          <span class="eyebrow">Our Legacy</span>
          <h2>A Decade of Precision Interior Contracting</h2>
          <p>Founded in Coimbatore, Happy Homes Interiors has grown into one of the region's most reputable interior architecture and turnkey fit-out studios. Our steady growth throughout these years can be attributed to our primary principle of commitment to quality along with our strengths of corporate office facilities, strategic planning, and interior project management.</p>
          <p>For every project, we ensure accuracy and efficiency by stressing detailed initial project planning, thorough coordination, value engineering, and hands-on supervision. Our ability to overcome complex architectural challenges without compromising on aesthetics serves as a testament to our commitment.</p>
          <p>Whether crafting a modern minimalist apartment in RS Puram or executing a sprawling luxury duplex on Avinashi Road, our team operates with an uncompromising focus on durability, material honesty, and client satisfaction.</p>
        </div>
        <div>
          <img src="/images/about-studio.jpg" alt="Happy Homes Interiors Coimbatore Design Studio" style="border-radius: var(--radius-md); box-shadow: var(--shadow-lg); width: 100%;" onerror="this.onerror=null; this.src='/images/hero/studio-intro.jpg';">
        </div>
      </div>
    </div>
  </section>

  <!-- Core Pillars -->
  <section class="section section-ivory">
    <div class="container">
      <div class="section-header text-center">
        <span class="eyebrow eyebrow-center">Core Pillars</span>
        <h2>Why Happy Homes Stands Apart</h2>
        <p>The operational and material standards that underpin every residence we design.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
        <div style="background: var(--color-white); padding: 2.25rem; border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle);">
          <div style="font-size: 2rem; color: var(--color-brass); margin-bottom: 1rem;">⚙️</div>
          <h3 style="font-size: 1.35rem; margin-bottom: 0.75rem;">Direct Factory Fabrication</h3>
          <p style="font-size: 0.9rem;">By maintaining our own computerized edge-banding and precision woodworking facilities, we eliminate third-party delays and avoid on-site sawdust.</p>
        </div>
        <div style="background: var(--color-white); padding: 2.25rem; border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle);">
          <div style="font-size: 2rem; color: var(--color-brass); margin-bottom: 1rem;">🛡️</div>
          <h3 style="font-size: 1.35rem; margin-bottom: 0.75rem;">IS 710 Marine Grade Plywood</h3>
          <p style="font-size: 0.9rem;">We strictly refuse sub-par particle boards in wet zones. All our modular carcasses utilize boiling waterproof (BWP) plywood with anti-termite treatment.</p>
        </div>
        <div style="background: var(--color-white); padding: 2.25rem; border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle);">
          <div style="font-size: 2rem; color: var(--color-brass); margin-bottom: 1rem;">🤝</div>
          <h3 style="font-size: 1.35rem; margin-bottom: 0.75rem;">Single-Source Turnkey Accountability</h3>
          <p style="font-size: 0.9rem;">No finger-pointing between carpenters, painters, and electricians. One dedicated project manager oversees civil, false ceiling, lighting, and fit-out from start to finish.</p>
        </div>
        <div style="background: var(--color-white); padding: 2.25rem; border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle);">
          <div style="font-size: 2rem; color: var(--color-brass); margin-bottom: 1rem;">📜</div>
          <h3 style="font-size: 1.35rem; margin-bottom: 0.75rem;">10-Year Comprehensive Warranty</h3>
          <p style="font-size: 0.9rem;">We provide written 10-year structural warranty certificates along with one full year of complimentary on-site maintenance support for all moving hardware.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Studio Details -->
  <section class="section section-white">
    <div class="container container-narrow text-center">
      <span class="eyebrow eyebrow-center">Our Studio</span>
      <h2>Located in the Heart of Coimbatore</h2>
      <p class="lead">Visit our studio at 63/53, Maruthakutti Gounder Thottam, Kuppakonam Pudur Post, Coimbatore to explore full-scale modular kitchen exhibits, wardrobe shutter finishes, and tactile material swatches.</p>
      <div style="margin-top: 2rem; display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        <a href="/contact/" class="btn btn-primary btn-lg">Schedule Studio Visit</a>
        <a href="tel:${company.phonePrimaryTel}" class="btn btn-outline btn-lg">Call ${company.phonePrimary}</a>
      </div>
    </div>
  </section>
  `;

  const html = renderHtmlShell({
    title: "About Us | Happy Homes Interiors — Coimbatore Interior Designers",
    description: "Learn about Happy Homes Interiors, Coimbatore's trusted interior contractor and turnkey studio with over a decade of craftsmanship and 450+ delivered homes.",
    canonicalUrl: "https://happyhomesinteriors.com/about/",
    currentPath: "/about/",
    content
  });

  const outDir = path.join(rootDir, 'about');
  ensureDir(outDir);
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log('✓ Generated /about/ (about/index.html)');
}

// ============================================================================
// 3. GENERATE SERVICES OVERVIEW PAGE (/services)
// ============================================================================
function generateServicesPage() {
  const content = `
  <section class="page-hero">
    <div class="container page-hero-inner">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span class="breadcrumbs-separator">/</span>
        <span class="breadcrumbs-current">Services Overview</span>
      </nav>
      <span class="eyebrow">Interior Solutions</span>
      <h1>Our Complete Interior Design Services</h1>
      <p class="lead" style="max-width: 780px;">From specialized modular kitchens and floor-to-ceiling wardrobes to full turnkey architectural transformations across Coimbatore.</p>
    </div>
  </section>

  <section class="section section-white">
    <div class="container">
      <div class="section-header text-center">
        <span class="eyebrow eyebrow-center">12 Confirmed Disciplines</span>
        <h2>Explore Our Specialized Service Offerings</h2>
        <p>Every service below is backed by dedicated factory machinery, IS 710 marine ply, global hardware brands, and experienced on-site supervisors.</p>
      </div>

      <div class="services-grid">
        ${services.map(s => `
          <article class="service-card">
            <div class="service-card-media">
              <img src="${s.heroImage}" alt="${s.title} — Happy Homes Interiors Coimbatore" loading="lazy" onerror="this.onerror=null; this.src='/images/services/modular-kitchen.jpg';">
              <span class="service-card-tag">${s.category}</span>
            </div>
            <div class="service-card-body">
              <h3 class="service-card-title">${s.title}</h3>
              <p class="service-card-desc">${s.shortDesc}</p>
              <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--color-border-subtle); display: flex; align-items: center; justify-content: space-between;">
                <a href="/services/${s.slug}/" class="service-card-link" style="font-weight: 700;">Explore ${s.navTitle} →</a>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Materials & Standards -->
  <section class="section section-ivory">
    <div class="container">
      <div class="section-header text-center">
        <span class="eyebrow eyebrow-center">Material Integrity</span>
        <h2>Our Uncompromising Quality Standards</h2>
        <p>We source only verified materials engineered to endure Coimbatore's tropical climate.</p>
      </div>

      <div style="overflow-x: auto; background: var(--color-white); border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle); box-shadow: var(--shadow-sm);">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.92rem;">
          <thead>
            <tr style="background: var(--color-ivory); border-bottom: 1px solid var(--color-border-medium);">
              <th style="padding: 1.25rem 1.5rem; color: var(--color-walnut);">Component</th>
              <th style="padding: 1.25rem 1.5rem; color: var(--color-walnut);">Material Specification</th>
              <th style="padding: 1.25rem 1.5rem; color: var(--color-walnut);">Durability Benefit</th>
              <th style="padding: 1.25rem 1.5rem; color: var(--color-walnut);">Warranty</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid var(--color-border-subtle);">
              <td style="padding: 1.15rem 1.5rem; font-weight: 600;">Kitchen & Bath Carcass</td>
              <td style="padding: 1.15rem 1.5rem;">IS 710 Boiling Waterproof (BWP) Marine Plywood</td>
              <td style="padding: 1.15rem 1.5rem;">Zero swelling under water exposure; anti-termite vacuum treated</td>
              <td style="padding: 1.15rem 1.5rem; color: var(--color-brass-dark); font-weight: 600;">10 Years</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--color-border-subtle);">
              <td style="padding: 1.15rem 1.5rem; font-weight: 600;">Wardrobe & Living Carcass</td>
              <td style="padding: 1.15rem 1.5rem;">Calibrated HDHMR & Moisture-Resistant Ply</td>
              <td style="padding: 1.15rem 1.5rem;">Superior screw-holding strength, perfectly flat shutter alignments</td>
              <td style="padding: 1.15rem 1.5rem; color: var(--color-brass-dark); font-weight: 600;">10 Years</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--color-border-subtle);">
              <td style="padding: 1.15rem 1.5rem; font-weight: 600;">Cabinet Shutter Finishes</td>
              <td style="padding: 1.15rem 1.5rem;">High-Gloss Acrylic, Anti-Fingerprint Matte PU, Teak Veneer</td>
              <td style="padding: 1.15rem 1.5rem;">UV-resistant, scratch-durable, easy to wipe clean</td>
              <td style="padding: 1.15rem 1.5rem; color: var(--color-brass-dark); font-weight: 600;">5 Years</td>
            </tr>
            <tr>
              <td style="padding: 1.15rem 1.5rem; font-weight: 600;">Hardware & Drawer Runners</td>
              <td style="padding: 1.15rem 1.5rem;">Blum (Austria), Hettich (Germany), Hafele (Germany)</td>
              <td style="padding: 1.15rem 1.5rem;">100,000 cycle tested, soft-closing, heavy weight capacities (up to 60kg)</td>
              <td style="padding: 1.15rem 1.5rem; color: var(--color-brass-dark); font-weight: 600;">Lifetime / 10 Yrs</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Consultation Form -->
  <section class="section section-white">
    <div class="container container-narrow">
      ${renderConsultationForm("Request a Free Service Consultation", "Tell us which service you are considering and get an itemized budget estimate.")}
    </div>
  </section>
  `;

  const html = renderHtmlShell({
    title: "Interior Design Services in Coimbatore | Happy Homes Interiors",
    description: "Explore Happy Homes Interiors' 12 confirmed services: modular kitchens, wardrobes, living rooms, pooja units, false ceilings, TV units, and turnkey fit-outs.",
    canonicalUrl: "https://happyhomesinteriors.com/services/",
    currentPath: "/services/",
    content
  });

  const outDir = path.join(rootDir, 'services');
  ensureDir(outDir);
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log('✓ Generated /services/ (services/index.html)');
}

// ============================================================================
// 4. GENERATE 12 INDIVIDUAL SERVICE PAGES (/services/[slug])
// ============================================================================
function generateIndividualServicePages() {
  services.forEach(service => {
    const relatedServices = services.filter(s => service.relatedSlugs?.includes(s.slug));

    const content = `
    <section class="page-hero">
      <div class="container page-hero-inner">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span class="breadcrumbs-separator">/</span>
          <a href="/services/">Services</a>
          <span class="breadcrumbs-separator">/</span>
          <span class="breadcrumbs-current">${service.title}</span>
        </nav>
        <span class="eyebrow">${service.category}</span>
        <h1>${service.title}</h1>
        <p class="lead" style="max-width: 820px;">${service.shortDesc}</p>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="section section-white">
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 4rem; align-items: center;">
          <div>
            <span class="eyebrow">Service Overview</span>
            <h2>Architectural Precision for Your ${service.navTitle}</h2>
            <p>${service.overview}</p>
            <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="#consultation-form-section" class="btn btn-primary">Book ${service.navTitle} Consultation</a>
              <a href="${company.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">Enquire on WhatsApp</a>
            </div>
          </div>
          <div>
            <img src="${service.heroImage}" alt="${service.title} by Happy Homes Interiors Coimbatore" style="border-radius: var(--radius-md); box-shadow: var(--shadow-lg); width: 100%;" onerror="this.onerror=null; this.src='/images/services/modular-kitchen.jpg';">
          </div>
        </div>
      </div>
    </section>

    <!-- Design Possibilities -->
    <section class="section section-ivory">
      <div class="container">
        <div class="section-header text-center">
          <span class="eyebrow eyebrow-center">Options & Configurations</span>
          <h2>Design Possibilities for ${service.navTitle}</h2>
          <p>Explore customized layout possibilities engineered to suit your space, habits, and architectural style.</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
          ${service.designPossibilities.map(dp => `
            <div style="background: var(--color-white); padding: 2rem; border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle); box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.3rem; margin-bottom: 0.65rem; color: var(--color-walnut);">${dp.title}</h3>
              <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.55;">${dp.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Materials & Finishes -->
    <section class="section section-white">
      <div class="container">
        <div class="section-header text-center">
          <span class="eyebrow eyebrow-center">Material Palette</span>
          <h2>Materials, Finishes & Hardware</h2>
          <p>Carefully selected specifications ensuring beauty, durability, and resilience against daily wear.</p>
        </div>

        <div style="max-width: 880px; margin: 0 auto; display: grid; gap: 1.25rem;">
          ${service.materialsFinishes.map(mf => `
            <div style="background: var(--color-ivory-light); padding: 1.5rem 2rem; border-radius: var(--radius-sm); border-left: 4px solid var(--color-brass); display: flex; flex-direction: column; gap: 0.35rem;">
              <span style="font-size: 0.78rem; text-transform: uppercase; font-weight: 700; letter-spacing: 0.08em; color: var(--color-brass-dark);">${mf.category}</span>
              <span style="font-size: 1.05rem; font-weight: 600; color: var(--color-walnut);">${mf.details}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 4-Step Process -->
    <section class="section section-dark">
      <div class="container">
        <div class="section-header text-center">
          <span class="eyebrow eyebrow-center" style="color: var(--color-brass-light);">Execution Process</span>
          <h2>Our 4-Step ${service.navTitle} Workflow</h2>
          <p>From initial laser measurements to dust-free on-site installation and 10-year warranty handover.</p>
        </div>

        <div class="process-grid">
          ${service.processSteps.map(ps => `
            <div class="process-step-card" style="background: var(--color-dark-surface); border-color: rgba(255,255,255,0.08);">
              <div class="step-num">${ps.step}</div>
              <h3 class="step-title" style="color: var(--color-white);">${ps.title}</h3>
              <p class="step-desc">${ps.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Service Specific FAQs -->
    <section class="section section-white">
      <div class="container container-narrow">
        <div class="section-header text-center">
          <span class="eyebrow eyebrow-center">Questions & Answers</span>
          <h2>${service.navTitle} FAQs</h2>
          <p>Answers to common questions regarding design, timeline, and material selection in Coimbatore.</p>
        </div>

        <div class="faq-accordion">
          ${service.faqs.map((f, i) => `
            <div class="faq-item ${i === 0 ? 'active' : ''}">
              <button class="faq-trigger" aria-expanded="${i === 0 ? 'true' : 'false'}">
                <span>${f.q}</span>
                <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <div class="faq-content">
                <p class="faq-answer">${f.a}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Related Services -->
    ${relatedServices.length ? `
      <section class="section section-ivory">
        <div class="container">
          <div class="section-header text-center">
            <span class="eyebrow eyebrow-center">Explore More</span>
            <h2>Related Interior Services</h2>
          </div>
          <div class="services-grid">
            ${relatedServices.map(rs => `
              <article class="service-card">
                <div class="service-card-media">
                  <img src="${rs.heroImage}" alt="${rs.title} — Happy Homes Interiors Coimbatore" loading="lazy" onerror="this.onerror=null; this.src='/images/services/modular-kitchen.jpg';">
                  <span class="service-card-tag">${rs.category}</span>
                </div>
                <div class="service-card-body">
                  <h3 class="service-card-title">${rs.title}</h3>
                  <p class="service-card-desc">${rs.shortDesc}</p>
                  <a href="/services/${rs.slug}/" class="service-card-link">View Service Details →</a>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>
    ` : ''}

    <!-- Booking Form Section -->
    <section class="section section-white">
      <div class="container container-narrow">
        ${renderConsultationForm(`Book a ${service.navTitle} Consultation`, `Schedule an appointment with our Coimbatore team to plan your ${service.navTitle.toLowerCase()}.`)}
      </div>
    </section>
    `;

    const html = renderHtmlShell({
      title: `${service.title} in Coimbatore | Happy Homes Interiors`,
      description: service.shortDesc,
      canonicalUrl: `https://happyhomesinteriors.com/services/${service.slug}/`,
      currentPath: `/services/${service.slug}/`,
      content
    });

    const outDir = path.join(rootDir, 'services', service.slug);
    ensureDir(outDir);
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
    console.log(`✓ Generated /services/${service.slug}/ (services/${service.slug}/index.html)`);
  });
}

// ============================================================================
// 5. GENERATE PORTFOLIO LISTING PAGE (/projects)
// ============================================================================
function generateProjectsPage() {
  const content = `
  <section class="page-hero">
    <div class="container page-hero-inner">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span class="breadcrumbs-separator">/</span>
        <span class="breadcrumbs-current">Portfolio</span>
      </nav>
      <span class="eyebrow">Delivered Residences</span>
      <h1>Interior Design Portfolio</h1>
      <p class="lead" style="max-width: 780px;">Discover real completed homes and custom interior craftsmanship executed across Coimbatore, Tirupur, and Tamil Nadu.</p>
    </div>
  </section>

  <section class="section section-white">
    <div class="container">
      <div class="portfolio-filters">
        <button class="filter-btn active" data-filter="all">All Projects</button>
        <button class="filter-btn" data-filter="kitchen">Modular Kitchens</button>
        <button class="filter-btn" data-filter="wardrobe">Wardrobes</button>
        <button class="filter-btn" data-filter="living">Living & TV</button>
        <button class="filter-btn" data-filter="pooja">Pooja Units</button>
        <button class="filter-btn" data-filter="turnkey">Turnkey Homes</button>
        <button class="filter-btn" data-filter="kids">Kids Rooms</button>
      </div>

      <div class="portfolio-grid">
        ${projects.map(p => `
          <article class="project-card" data-category="${p.categoryKey}">
            <div class="project-card-media">
              <img src="${p.heroImage}" alt="${p.title} in ${p.location}" loading="lazy" onerror="this.onerror=null; this.src='/images/projects/kitchen-hero.jpg';">
              <div class="project-card-overlay"></div>
              <span class="project-card-badge">${p.category}</span>
            </div>
            <div class="project-card-body">
              <div class="project-card-meta">
                <span>📍 ${p.location}</span>
                <span>•</span>
                <span>${p.area}</span>
              </div>
              <h3 class="project-card-title">${p.title}</h3>
              <p class="project-card-desc">${p.shortDesc}</p>
              <a href="/projects/${p.slug}/" class="service-card-link">View Full Case Study →</a>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="section section-ivory">
    <div class="container container-narrow">
      ${renderConsultationForm("Inspired by Our Portfolio?", "Discuss how we can bring similar craftsmanship and elegance to your residence.")}
    </div>
  </section>
  `;

  const html = renderHtmlShell({
    title: "Interior Design Portfolio in Coimbatore | Happy Homes Interiors",
    description: "Explore real verified interior design projects by Happy Homes Interiors across RS Puram, Peelamedu, Race Course, and Avinashi Road in Coimbatore.",
    canonicalUrl: "https://happyhomesinteriors.com/projects/",
    currentPath: "/projects/",
    content
  });

  const outDir = path.join(rootDir, 'projects');
  ensureDir(outDir);
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log('✓ Generated /projects/ (projects/index.html)');
}

// ============================================================================
// 6. GENERATE INDIVIDUAL PROJECT DETAIL PAGES (/projects/[slug])
// ============================================================================
function generateIndividualProjectPages() {
  projects.forEach(project => {
    const otherProjects = projects.filter(p => p.slug !== project.slug).slice(0, 2);

    const content = `
    <section class="page-hero">
      <div class="container page-hero-inner">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span class="breadcrumbs-separator">/</span>
          <a href="/projects/">Projects</a>
          <span class="breadcrumbs-separator">/</span>
          <span class="breadcrumbs-current">${project.title}</span>
        </nav>
        <span class="eyebrow">${project.category} • ${project.location}</span>
        <h1>${project.title}</h1>
        <p class="lead" style="max-width: 820px;">${project.shortDesc}</p>
      </div>
    </section>

    <!-- Key Metrics Bar -->
    <div style="background: var(--color-white); border-bottom: 1px solid var(--color-border-subtle); padding: 1.5rem 0;">
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem;">
          <div>
            <div style="font-size: 0.78rem; text-transform: uppercase; color: var(--color-text-light); font-weight: 600;">Location</div>
            <div style="font-size: 1.1rem; font-weight: 700; color: var(--color-walnut);">${project.location}</div>
          </div>
          <div>
            <div style="font-size: 0.78rem; text-transform: uppercase; color: var(--color-text-light); font-weight: 600;">Area Covered</div>
            <div style="font-size: 1.1rem; font-weight: 700; color: var(--color-walnut);">${project.area}</div>
          </div>
          <div>
            <div style="font-size: 0.78rem; text-transform: uppercase; color: var(--color-text-light); font-weight: 600;">Timeline</div>
            <div style="font-size: 1.1rem; font-weight: 700; color: var(--color-walnut);">${project.duration}</div>
          </div>
          <div>
            <div style="font-size: 0.78rem; text-transform: uppercase; color: var(--color-text-light); font-weight: 600;">Completion Year</div>
            <div style="font-size: 1.1rem; font-weight: 700; color: var(--color-walnut);">${project.year}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Gallery & Scope -->
    <section class="section section-ivory">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 4rem; align-items: start;">
          <div>
            <span class="eyebrow">Project Imagery</span>
            <div style="display: grid; gap: 1.5rem;">
              ${project.gallery.map(img => `
                <img src="${img}" alt="${project.title} in ${project.location}" style="border-radius: var(--radius-md); box-shadow: var(--shadow-md); width: 100%;" onerror="this.onerror=null; this.src='/images/projects/kitchen-hero.jpg';">
              `).join('')}
            </div>
          </div>

          <div style="position: sticky; top: 110px;">
            <div style="background: var(--color-white); padding: 2.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle); box-shadow: var(--shadow-sm); margin-bottom: 2rem;">
              <span class="eyebrow">Execution Scope</span>
              <h2 style="font-size: 1.8rem; margin-bottom: 1.25rem;">Scope of Work</h2>
              <ul style="display: flex; flex-direction: column; gap: 0.75rem;">
                ${project.scope.map(s => `
                  <li style="display: flex; align-items: flex-start; gap: 0.65rem; font-size: 0.92rem; color: var(--color-text-muted);">
                    <span style="color: var(--color-brass); font-weight: 700;">✓</span>
                    <span>${s}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <div style="background: var(--color-white); padding: 2.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle); box-shadow: var(--shadow-sm); margin-bottom: 2rem;">
              <span class="eyebrow">Specifications</span>
              <h3 style="font-size: 1.5rem; margin-bottom: 1.25rem;">Material Details</h3>
              <div style="display: flex; flex-direction: column; gap: 0.85rem;">
                ${project.specs.map(sp => `
                  <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 0.5rem; font-size: 0.88rem;">
                    <span style="color: var(--color-text-light); font-weight: 600;">${sp.label}:</span>
                    <span style="color: var(--color-walnut); font-weight: 600; text-align: right;">${sp.value}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Client Feedback Card -->
            <div style="background: var(--color-walnut); color: var(--color-ivory); padding: 2rem; border-radius: var(--radius-md);">
              <span style="color: var(--color-brass-light); font-size: 0.78rem; text-transform: uppercase; font-weight: 700; letter-spacing: 0.08em;">Client Feedback</span>
              <p style="font-family: var(--font-serif); font-size: 1.2rem; font-style: italic; margin: 0.75rem 0 1.25rem 0; color: var(--color-ivory-light); line-height: 1.5;">
                “ ${project.clientFeedback} ”
              </p>
              <div style="font-weight: 700; font-size: 0.95rem; color: var(--color-brass-light);">${project.clientName}</div>
              <div style="font-size: 0.8rem; color: rgba(244, 239, 230, 0.7);">${project.location}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Projects -->
    <section class="section section-white">
      <div class="container">
        <div class="section-header text-center">
          <span class="eyebrow eyebrow-center">More Case Studies</span>
          <h2>Explore More Completed Homes</h2>
        </div>
        <div class="portfolio-grid">
          ${otherProjects.map(op => `
            <article class="project-card">
              <div class="project-card-media">
                <img src="${op.heroImage}" alt="${op.title} in ${op.location}" loading="lazy" onerror="this.onerror=null; this.src='/images/projects/kitchen-hero.jpg';">
                <div class="project-card-overlay"></div>
                <span class="project-card-badge">${op.category}</span>
              </div>
              <div class="project-card-body">
                <div class="project-card-meta">
                  <span>📍 ${op.location}</span>
                  <span>•</span>
                  <span>${op.area}</span>
                </div>
                <h3 class="project-card-title">${op.title}</h3>
                <p class="project-card-desc">${op.shortDesc}</p>
                <a href="/projects/${op.slug}/" class="service-card-link">View Full Case Study →</a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Consultation Booking -->
    <section class="section section-ivory">
      <div class="container container-narrow">
        ${renderConsultationForm(`Book a Consultation for a Similar Design`, `Ready to bring this level of design quality to your home in Coimbatore? Reach out today.`)}
      </div>
    </section>
    `;

    const html = renderHtmlShell({
      title: `${project.title} — ${project.location} | Happy Homes Interiors`,
      description: project.shortDesc,
      canonicalUrl: `https://happyhomesinteriors.com/projects/${project.slug}/`,
      currentPath: `/projects/${project.slug}/`,
      content
    });

    const outDir = path.join(rootDir, 'projects', project.slug);
    ensureDir(outDir);
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
    console.log(`✓ Generated /projects/${project.slug}/ (projects/${project.slug}/index.html)`);
  });
}

// ============================================================================
// 7. GENERATE CONTACT PAGE (/contact)
// ============================================================================
function generateContactPage() {
  const content = `
  <section class="page-hero">
    <div class="container page-hero-inner">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span class="breadcrumbs-separator">/</span>
        <span class="breadcrumbs-current">Contact & Consultation</span>
      </nav>
      <span class="eyebrow">Connect With Us</span>
      <h1>Contact Happy Homes Interiors</h1>
      <p class="lead" style="max-width: 780px;">Schedule your personalized design consultation at our Coimbatore studio or request an on-site visit for your upcoming home.</p>
    </div>
  </section>

  <section class="section section-white">
    <div class="container">
      <div style="display: grid; grid-template-columns: 1fr 1.3fr; gap: 4rem; align-items: start;">
        <div>
          <span class="eyebrow">Studio & Reach</span>
          <h2>Get in Touch Directly</h2>
          <p>Our experienced interior planning team is available for studio appointments, phone discussions, and instant WhatsApp support.</p>

          <div style="margin-top: 2.5rem; display: flex; flex-direction: column; gap: 2rem;">
            <div style="display: flex; gap: 1.25rem;">
              <div style="width: 48px; height: 48px; border-radius: var(--radius-sm); background: var(--color-ivory); display: flex; align-items: center; justify-content: center; color: var(--color-brass-dark); flex-shrink: 0;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4 style="font-size: 1.15rem; margin-bottom: 0.25rem;">Studio Address</h4>
                <p style="font-size: 0.92rem; margin-bottom: 0.35rem;">${company.address.formatted}</p>
                <a href="${company.mapsUrl}" target="_blank" rel="noopener noreferrer" style="font-size: 0.82rem; font-weight: 700; color: var(--color-brass-dark); text-decoration: underline;">View on Google Maps →</a>
              </div>
            </div>

            <div style="display: flex; gap: 1.25rem;">
              <div style="width: 48px; height: 48px; border-radius: var(--radius-sm); background: var(--color-ivory); display: flex; align-items: center; justify-content: center; color: var(--color-brass-dark); flex-shrink: 0;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <h4 style="font-size: 1.15rem; margin-bottom: 0.25rem;">Phone Numbers</h4>
                <p style="font-size: 0.92rem; margin-bottom: 0.2rem;">
                  <a href="tel:${company.phonePrimaryTel}" style="font-weight: 600; color: var(--color-walnut);">${company.phonePrimary}</a> (Primary)
                </p>
                <p style="font-size: 0.92rem;">
                  <a href="tel:${company.phoneSecondaryTel}" style="font-weight: 600; color: var(--color-walnut);">${company.phoneSecondary}</a> (Secondary)
                </p>
              </div>
            </div>

            <div style="display: flex; gap: 1.25rem;">
              <div style="width: 48px; height: 48px; border-radius: var(--radius-sm); background: var(--color-ivory); display: flex; align-items: center; justify-content: center; color: var(--color-brass-dark); flex-shrink: 0;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h4 style="font-size: 1.15rem; margin-bottom: 0.25rem;">Email</h4>
                <p style="font-size: 0.92rem; margin-bottom: 0.2rem;"><a href="mailto:${company.emailPrimary}">${company.emailPrimary}</a></p>
                <p style="font-size: 0.92rem;"><a href="mailto:${company.emailSecondary}">${company.emailSecondary}</a></p>
              </div>
            </div>

            <div style="display: flex; gap: 1.25rem;">
              <div style="width: 48px; height: 48px; border-radius: var(--radius-sm); background: var(--color-ivory); display: flex; align-items: center; justify-content: center; color: var(--color-brass-dark); flex-shrink: 0;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div>
                <h4 style="font-size: 1.15rem; margin-bottom: 0.25rem;">Studio Hours</h4>
                <p style="font-size: 0.92rem;">${company.hours}</p>
              </div>
            </div>
          </div>

          <div style="margin-top: 2.5rem;">
            <a href="${company.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="width: 100%;">
              <span>Instant Chat on WhatsApp (+91 99943 11447)</span>
            </a>
          </div>
        </div>

        <div>
          ${renderConsultationForm()}
        </div>
      </div>
    </div>
  </section>

  <!-- Google Map Embed -->
  <section style="line-height: 0; background: var(--color-ivory);">
    <iframe src="${company.mapsUrl}" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Happy Homes Interiors Location in Coimbatore"></iframe>
  </section>
  `;

  const html = renderHtmlShell({
    title: "Contact Us & Book Consultation | Happy Homes Interiors Coimbatore",
    description: "Contact Happy Homes Interiors at 63/53 Kuppakonam Pudur Post, Coimbatore. Call +91 999 431 1447 or book a design consultation online.",
    canonicalUrl: "https://happyhomesinteriors.com/contact/",
    currentPath: "/contact/",
    content
  });

  const outDir = path.join(rootDir, 'contact');
  ensureDir(outDir);
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log('✓ Generated /contact/ (contact/index.html)');
}

// ============================================================================
// 8. GENERATE FAQ PAGE (/faq)
// ============================================================================
function generateFaqPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(cat => cat.items.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    })))
  };

  const content = `
  <section class="page-hero">
    <div class="container page-hero-inner">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span class="breadcrumbs-separator">/</span>
        <span class="breadcrumbs-current">FAQ</span>
      </nav>
      <span class="eyebrow">Clear Answers</span>
      <h1>Frequently Asked Questions</h1>
      <p class="lead" style="max-width: 780px;">Everything you need to know about our interior design workflow, materials, pricing, and project guarantees in Coimbatore.</p>
    </div>
  </section>

  <section class="section section-white">
    <div class="container container-narrow">
      ${faqs.map((category, catIdx) => `
        <div style="margin-bottom: 3.5rem;">
          <h2 style="font-size: 1.85rem; margin-bottom: 1.5rem; color: var(--color-walnut); border-bottom: 2px solid var(--color-ivory-dark); padding-bottom: 0.75rem;">
            ${category.category}
          </h2>

          <div class="faq-accordion">
            ${category.items.map((item, itemIdx) => `
              <div class="faq-item ${catIdx === 0 && itemIdx === 0 ? 'active' : ''}">
                <button class="faq-trigger" aria-expanded="${catIdx === 0 && itemIdx === 0 ? 'true' : 'false'}">
                  <span>${item.q}</span>
                  <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
                <div class="faq-content">
                  <p class="faq-answer">${item.a}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- CTA Box -->
  <section class="section section-ivory">
    <div class="container container-narrow text-center">
      <span class="eyebrow eyebrow-center">Still Have Questions?</span>
      <h2>Speak Directly with a Senior Designer</h2>
      <p class="lead" style="margin-bottom: 2rem;">Every home is unique. Schedule an obligation-free 30-minute consultation or message us on WhatsApp with your floorplan.</p>
      <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        <a href="/contact/" class="btn btn-primary btn-lg">Book Consultation</a>
        <a href="${company.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">Chat on WhatsApp</a>
      </div>
    </div>
  </section>
  `;

  const html = renderHtmlShell({
    title: "Frequently Asked Questions | Happy Homes Interiors Coimbatore",
    description: "Detailed answers about materials, modular kitchen warranties, BWP plywood standards, turnkey project timelines, and interior pricing in Coimbatore.",
    canonicalUrl: "https://happyhomesinteriors.com/faq/",
    currentPath: "/faq/",
    content,
    schemaJson: schema
  });

  const outDir = path.join(rootDir, 'faq');
  ensureDir(outDir);
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log('✓ Generated /faq/ (faq/index.html)');
}

// ============================================================================
// 9. GENERATE PRIVACY POLICY PAGE (/privacy-policy)
// ============================================================================
function generatePrivacyPolicyPage() {
  const content = `
  <section class="page-hero">
    <div class="container page-hero-inner">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span class="breadcrumbs-separator">/</span>
        <span class="breadcrumbs-current">Privacy Policy</span>
      </nav>
      <span class="eyebrow">Trust & Transparency</span>
      <h1>Privacy Policy</h1>
      <p class="lead" style="max-width: 780px;">How Happy Homes Interiors collects, respects, and protects your information.</p>
    </div>
  </section>

  <section class="section section-white">
    <div class="container container-narrow" style="font-size: 0.95rem; line-height: 1.8;">
      <p><strong>Effective Date:</strong> January 1, 2024</p>
      <p>Happy Homes Interiors ("we", "us", or "our"), operating in Coimbatore, Tamil Nadu, values your privacy and is committed to protecting the personal information you share with us through our website (https://happyhomesinteriors.com) and consultation channels.</p>

      <h2 style="font-size: 1.6rem; margin: 2rem 0 1rem 0;">1. Information We Collect</h2>
      <p>When you submit a consultation request, request a quote, or contact us through WhatsApp or phone, we may collect the following details:</p>
      <ul style="list-style: disc; margin-left: 1.5rem; margin-bottom: 1.5rem;">
        <li>Full Name</li>
        <li>Contact Information (Mobile phone number, WhatsApp number, Email address)</li>
        <li>Property Information (Location in Coimbatore or Tamil Nadu, property type such as apartment, villa, or renovation)</li>
        <li>Project Scope, requirements, budget preferences, and move-in timeline</li>
      </ul>

      <h2 style="font-size: 1.6rem; margin: 2rem 0 1rem 0;">2. How We Use Your Information</h2>
      <p>We use the collected information exclusively for legitimate business purposes related to your interior design inquiry:</p>
      <ul style="list-style: disc; margin-left: 1.5rem; margin-bottom: 1.5rem;">
        <li>To schedule in-person studio consultations or site measurement visits</li>
        <li>To prepare customized 2D/3D floorplans and itemized Bill of Quantities (BOQ) estimates</li>
        <li>To communicate project milestones, updates, and design drafts via phone, email, or WhatsApp</li>
        <li>To provide post-handover warranty and maintenance support</li>
      </ul>

      <h2 style="font-size: 1.6rem; margin: 2rem 0 1rem 0;">3. Data Protection & Zero Third-Party Selling</h2>
      <p>We do not sell, rent, lease, or trade your personal information to third-party marketing brokers or advertising companies under any circumstances. Your information is only accessible by authorized Happy Homes Interiors project managers and design architects directly involved in your project.</p>

      <h2 style="font-size: 1.6rem; margin: 2rem 0 1rem 0;">4. Communication Preferences</h2>
      <p>You may request to update, modify, or delete your contact information from our records at any time by contacting us at <a href="mailto:${company.emailPrimary}" style="color: var(--color-brass-dark); text-decoration: underline;">${company.emailPrimary}</a> or messaging us on WhatsApp at <a href="tel:${company.phonePrimaryTel}" style="color: var(--color-brass-dark); text-decoration: underline;">${company.phonePrimary}</a>.</p>

      <h2 style="font-size: 1.6rem; margin: 2rem 0 1rem 0;">5. Contact Information</h2>
      <p>For any questions regarding this Privacy Policy, please contact:</p>
      <p>
        <strong>Happy Homes Interiors</strong><br>
        63/53, Maruthakutti Gounder Thottam, 6th Street Extension, Kuppakonam Pudur Post,<br>
        Coimbatore, Tamil Nadu – 641038.<br>
        Phone: ${company.phonePrimary} / ${company.phoneSecondary}<br>
        Email: ${company.emailPrimary}
      </p>
    </div>
  </section>
  `;

  const html = renderHtmlShell({
    title: "Privacy Policy | Happy Homes Interiors",
    description: "Read the Privacy Policy of Happy Homes Interiors. Learn how we handle consultation inquiries with complete confidentiality and zero third-party data sharing.",
    canonicalUrl: "https://happyhomesinteriors.com/privacy-policy/",
    currentPath: "/privacy-policy/",
    content
  });

  const outDir = path.join(rootDir, 'privacy-policy');
  ensureDir(outDir);
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log('✓ Generated /privacy-policy/ (privacy-policy/index.html)');
}

// ============================================================================
// 10. GENERATE 404 ERROR PAGE (404.html)
// ============================================================================
function generate404Page() {
  const content = `
  <section class="section section-ivory" style="min-height: 80vh; display: flex; align-items: center; text-align: center; padding-top: calc(var(--header-height) + 3rem);">
    <div class="container container-narrow">
      <span class="eyebrow eyebrow-center">Page Not Found</span>
      <h1 style="font-size: clamp(3.5rem, 8vw, 6rem); color: var(--color-walnut); margin-bottom: 1rem;">404</h1>
      <h2 style="font-size: 2rem; margin-bottom: 1.25rem;">This Living Space Doesn't Exist</h2>
      <p class="lead" style="margin-bottom: 2.5rem; max-width: 600px; margin-left: auto; margin-right: auto;">
        The page you are looking for may have been moved, renamed, or is temporarily unavailable. Let us help guide you back to our curated interior spaces.
      </p>

      <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        <a href="/" class="btn btn-primary btn-lg">Return to Home</a>
        <a href="/services/" class="btn btn-outline btn-lg">Explore Services</a>
        <a href="/projects/" class="btn btn-outline btn-lg">View Portfolio</a>
        <a href="/contact/" class="btn btn-brass btn-lg">Contact Us</a>
      </div>
    </div>
  </section>
  `;

  const html = renderHtmlShell({
    title: "Page Not Found (404) | Happy Homes Interiors",
    description: "The page you requested could not be found. Explore Happy Homes Interiors modular kitchens, wardrobes, and living room interior solutions.",
    canonicalUrl: "https://happyhomesinteriors.com/404.html",
    currentPath: "/404",
    content
  });

  fs.writeFileSync(path.join(rootDir, '404.html'), html);
  console.log('✓ Generated /404 (404.html)');
}

// Execute Generation
console.log('=== Starting Happy Homes Interiors Static Multi-Page Site Generation ===');
generateHomePage();
generateAboutPage();
generateServicesPage();
generateIndividualServicePages();
generateProjectsPage();
generateIndividualProjectPages();
generateContactPage();
generateFaqPage();
generatePrivacyPolicyPage();
generate404Page();
console.log('=== All 22 Pages Successfully Generated! ===');
