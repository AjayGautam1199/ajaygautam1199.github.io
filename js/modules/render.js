import { skills } from '../data/skills.js';
import { projects } from '../data/projects.js';
import { experience, education } from '../data/experience.js';

const escapeHTML = (str) =>
  String(str).replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[ch]));

export function renderSkills(target) {
  if (!target) return;
  target.innerHTML = skills
    .map(
      (s) => `
      <article class="skill-card scroll-reveal">
        <i class="fas ${escapeHTML(s.icon)} skill-icon" aria-hidden="true"></i>
        <h3>${escapeHTML(s.title)}</h3>
        <div class="skill-items">
          ${s.items.map((item) => `<p>${escapeHTML(item)}</p>`).join('')}
        </div>
      </article>`
    )
    .join('');
}

export function renderEducation(target) {
  if (!target) return;
  target.innerHTML = education
    .map(
      (e) => `
      <article class="education-card scroll-reveal">
        <i class="fas ${escapeHTML(e.icon)} education-icon" aria-hidden="true"></i>
        <h3>${escapeHTML(e.degree)}</h3>
        <p class="institution">${escapeHTML(e.institution)}</p>
        <p class="duration">${escapeHTML(e.duration)}</p>
        ${e.badge ? `
          <div class="achievement-badge">
            <i class="fas fa-award" aria-hidden="true"></i>
            ${escapeHTML(e.badge)}
          </div>` : ''}
      </article>`
    )
    .join('');
}

export function renderExperience(target) {
  if (!target) return;
  target.innerHTML = experience
    .map(
      (e) => `
      <article class="experience-card scroll-reveal">
        <h3>${escapeHTML(e.role)}</h3>
        <p class="institution">${escapeHTML(e.company)}</p>
        <p class="duration">${escapeHTML(e.duration)} · ${escapeHTML(e.location)}</p>
        ${e.badge ? `
          <div class="achievement-badge">
            <i class="fas fa-star" aria-hidden="true"></i>
            ${escapeHTML(e.badge)}
          </div>` : ''}
        <p class="about-text" style="margin-top:1rem;">${escapeHTML(e.description)}</p>
      </article>`
    )
    .join('');
}

export function renderProjects(target) {
  if (!target) return;
  target.innerHTML = projects
    .map((p) => {
      const imageHTML = p.images
        .map(
          (img, i) => `
          <img src="${escapeHTML(img.src)}"
               alt="${escapeHTML(img.alt)}"
               class="project-image${i === 0 ? ' active' : ''}"
               loading="lazy">`
        )
        .join('');

      const tagsHTML = p.tags
        .map((t) => `<span class="tag">${escapeHTML(t)}</span>`)
        .join('');

      const linksHTML = p.links
        ? Object.entries(p.links)
            .map(([type, url]) => {
              const icon = type === 'github' ? 'fa-brands fa-github' : 'fas fa-external-link-alt';
              const label = type === 'github' ? 'View source on GitHub' : 'View live demo';
              return `<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer" aria-label="${label}"><i class="${icon}" aria-hidden="true"></i></a>`;
            })
            .join('')
        : '';

      const togglable = p.images.length > 1;

      return `
      <article class="project-card scroll-reveal">
        <div class="image-container"${togglable ? ' role="button" tabindex="0" aria-label="Toggle project view"' : ''}>
          ${imageHTML}
        </div>
        <div class="project-content">
          <h3>${escapeHTML(p.title)}</h3>
          <div class="project-tags">${tagsHTML}</div>
          <p class="project-description">${escapeHTML(p.description)}</p>
          ${togglable ? `<p class="image-toggle-text">Click image to view different angles</p>` : ''}
          ${linksHTML ? `<div class="project-links">${linksHTML}</div>` : ''}
        </div>
      </article>`;
    })
    .join('');
}
