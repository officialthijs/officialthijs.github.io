document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    loadExperience();
    loadProjects();
    loadSkills();
    updateContact();
    animateStats();
    initScrollAnimations();
    initSmoothScroll();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    
    if (!menuBtn || !navLinks) return;
    
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

function loadExperience() {
    const container = document.getElementById('experience-container');
    if (!container || !portfolioConfig.experience) return;
    
    container.innerHTML = portfolioConfig.experience.map((exp, index) => `
        <div class="experience-item" style="animation-delay: ${index * 0.2}s">
            <div class="experience-dot"></div>
            <div class="experience-date">${exp.date}</div>
            <h3 class="experience-title">${exp.title}</h3>
            <div class="experience-company">${exp.company}</div>
            <p class="experience-description">${exp.description}</p>
            <div class="experience-tags">
                ${exp.tags.map(tag => `<span class="experience-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function loadProjects() {
    const container = document.getElementById('projects-container');
    if (!container || !portfolioConfig.projects) return;
    
    container.innerHTML = portfolioConfig.projects.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
            <div class="project-content">
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
        </div>
    `).join('');
}

function loadSkills() {
    const container = document.getElementById('skills-container');
    if (!container || !portfolioConfig.skills) return;
    
    container.innerHTML = portfolioConfig.skills.map(skill => `
        <div class="skill-card">
            <div class="skill-icon">${skill.icon}</div>
            <h3 class="skill-title">${skill.name}</h3>
            <div class="skill-level">
                <div class="skill-progress" style="width: 0%" data-level="${skill.level}"></div>
            </div>
        </div>
    `).join('');
    
    // Animate skill bars when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                bar.style.width = bar.dataset.level + '%';
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.skill-progress').forEach(bar => observer.observe(bar));
}

function updateContact() {
    const link = document.getElementById('discord-link');
    const text = document.getElementById('discord-text');
    
    if (!link || !text || !portfolioConfig.contact) return;
    
    link.href = portfolioConfig.contact.discordLink;
    text.textContent = portfolioConfig.contact.discordUsername;
    
    // Copy to clipboard on mobile if link doesn't work
    link.addEventListener('click', (e) => {
        if (portfolioConfig.contact.discordLink.includes('636813350453379072')) {
            return; // Valid link, let it work normally
        }
        e.preventDefault();
        copyToClipboard(portfolioConfig.contact.discordUsername);
    });
}

function animateStats() {
    const projects = portfolioConfig.projects ? portfolioConfig.projects.length : 0;
    const baseScripts = portfolioConfig.stats ? portfolioConfig.stats.baseScripts : 0;
    const baseClients = portfolioConfig.stats ? portfolioConfig.stats.baseClients : 0;
    
    animateNumber('stat-projects', projects);
    animateNumber('stat-scripts', baseScripts + projects);
    animateNumber('stat-clients', baseClients);
}

function animateNumber(id, target) {
    const element = document.getElementById(id);
    if (!element) return;
    
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 30);
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
}

function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification(`Discord gekopieerd: ${text}`);
        }).catch(() => {
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showNotification(`Discord gekopieerd: ${text}`);
    } catch (err) {
        showNotification('Kon niet kopiëren');
    }
    
    document.body.removeChild(textArea);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--secondary);
        color: var(--text-primary);
        padding: 1rem 1.5rem;
        border-radius: 12px;
        border: 1px solid rgba(255,255,255,0.1);
        z-index: 9999;
        font-family: 'Inter', sans-serif;
        font-size: 0.9rem;
        text-align: center;
        max-width: 90%;
        animation: slideUp 0.3s ease;
        box-shadow: 0 10px 40px rgba(0,0,0,0.5);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2500);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from { transform: translate(-50%, 100%); opacity: 0; }
        to { transform: translate(-50%, 0); opacity: 1; }
    }
    @keyframes slideDown {
        from { transform: translate(-50%, 0); opacity: 1; }
        to { transform: translate(-50%, 100%); opacity: 0; }
    }
`;
document.head.appendChild(style);
