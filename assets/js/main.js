// Render projects dynamically from projects.js
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid || typeof projects === 'undefined') return;
  
  grid.innerHTML = '';
  projects.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('data-id', project.id);
    
    const isImageFile = /\.(svg|png|jpe?g|webp|gif)$/i.test(project.thumbnail);
    const thumbHTML = isImageFile
      ? `<div class="thumb"><img src="${project.thumbnail}" alt="${project.title} thumbnail" loading="lazy" onerror="this.parentElement.innerHTML='${project.title.replace(/'/g, "\\'")}'"></div>`
      : `<div class="thumb thumb-emoji">${project.thumbnail}</div>`;
    
    card.innerHTML = `
      ${thumbHTML}
      <div class="meta">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-actions">
          <button class="btn btn-sm btn-primary" data-open="${project.id}">Details</button>
          ${project.externalLink ? `<a class="btn btn-sm btn-outline" href="${project.externalLink}" target="_blank">Visit</a>` : ''}
          ${project.demoLink ? `<a class="btn btn-sm btn-outline" href="${project.demoLink}" target="_blank">Demo</a>` : ''}
          ${project.repoLink && project.repoLink !== '#' ? `<a class="btn btn-sm btn-outline" href="${project.repoLink}" target="_blank">Repo</a>` : ''}
        </div>
      </div>
    `;
    
    grid.appendChild(card);
  });
  
  // Attach modal handlers after rendering
  attachModalHandlers();
}

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle?.addEventListener('click', ()=>{
  document.documentElement.classList.toggle('light');
  themeToggle.textContent = document.documentElement.classList.contains('light') ? '☀️' : '🌙';
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target);} });
},{threshold:0.12});
reveals.forEach(r=>io.observe(r));

// Modal project details
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalContent = document.getElementById('modalContent');

function attachModalHandlers() {
  document.querySelectorAll('[data-open]').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const id = parseInt(btn.getAttribute('data-open'));
      const project = projects.find(p => p.id === id);
      if (project) {
        modalContent.innerHTML = `<h3>${project.title}</h3><p>${project.caseStudy}</p>`;
        modal.setAttribute('aria-hidden','false');
      }
    });
  });
}

modalClose?.addEventListener('click', ()=> modal.setAttribute('aria-hidden','true'));
modal?.addEventListener('click', (e)=>{ if(e.target===modal) modal.setAttribute('aria-hidden','true'); });

// Smooth scrolling for anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href.length>1){ e.preventDefault(); document.querySelector(href)?.scrollIntoView({behavior:'smooth'}); }
  });
});

// Initialize projects on load
renderProjects();
