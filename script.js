document.addEventListener('DOMContentLoaded', () => {
    loadProfile();
    loadExperience();
    loadProjects();
    loadSkills();
    updateContact();
    animateStats();
    initScrollAnimations();
    initSmoothScroll();
});

// Load Profile Image
function loadProfile() {
    const profileImg = document.getElementById('profile-img');
    if (profileImg && portfolioConfig.profile && portfolioConfig.profile.image) {
        profileImg.src = portfolioConfig.profile.image;
        profileImg.alt = "Official_Thijs Profile";
    }
}

// Load Experience Timeline
function loadExperience() {
    const container = document.getElementById('experience-container');

    if (!container || !portfolioConfig.experience) {
        console.error('Experience container or config not found');
        return;
    }

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
    
    console.log(`Loaded ${portfolioConfig.experience.length} experience items`);
}

function loadProjects() {
    const container = document.getElementById('projects-container');
    
    if (!container || !portfolioConfig.projects) {
        console.error('Projects container or config not found');
        return;
    }
    
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
    
    console.log(`Loaded ${portfolioConfig.projects.length} projects`);
}

function loadSkills() {
    const container = document.getElementById('skills-container');
    
    if (!container || !portfolioConfig.skills) {
        console.error('Skills container or config not found');
        return;
    }
    
    container.innerHTML = portfolioConfig.skills.map(skill => `
        <div class="skill-card">
            <div class="skill-icon">${skill.icon}</div>
            <h3 class="skill-title">${skill.name}</h3>
            <div class="skill-level">
                <div class="skill-progress" style="width: 0%" data-level="${skill.level}"></div>
            </div>
        </div>
    `).join('');
    
    setTimeout(() => {
        document.querySelectorAll('.skill-progress').forEach(bar => {
            bar.style.width = bar.dataset.level + '%';
        });
    }, 500);
    
    console.log(`Loaded ${portfolioConfig.skills.length} skills`);
}

function updateContact() {
    const link = document.getElementById('discord-link');
    const text = document.getElementById('discord-text');
    
    if (!link || !text || !portfolioConfig.contact) {
        console.error('Contact elements or config not found');
        return;
    }
    
    link.href = portfolioConfig.contact.discordLink;
    text.textContent = portfolioConfig.contact.discordUsername;
    
    if (portfolioConfig.contact.discordLink === '#' || 
        portfolioConfig.contact.discordLink.includes('JE_USER_ID')) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            copyToClipboard(portfolioConfig.contact.discordUsername);
        });
    }
}

function animateStats() {
    const projects = portfolioConfig.projects ? portfolioConfig.projects.length : 0;
    const baseScripts = portfolioConfig.stats ? portfolioConfig.stats.baseScripts : 0;
    const baseClients = portfolioConfig.stats ? portfolioConfig.stats.baseClients : 0;
    
    const scripts = baseScripts + projects;
    const clients = baseClients;
    
    animateNumber('stat-projects', projects);
    animateNumber('stat-scripts', scripts);
    animateNumber('stat-clients', clients);
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
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification(`Copied ${text} to clipboard!`);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--secondary);
        color: var(--text-primary);
        padding: 1rem 1.5rem;
        border-radius: 8px;
        border: 1px solid rgba(255,255,255,0.1);
        z-index: 9999;
        font-family: 'Inter', sans-serif;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

console.log('Portfolio initialized successfully!');