tailwind.config = {
    theme: {
        extend: {
            colors: {
                'navy': '#0f172a',
                'navy-light': '#1e293b',
                'steel': '#64748b',
                'steel-light': '#94a3b8',
                'steel-dark': '#475569',
                'blue-primary': '#1e40af',
                'blue-light': '#3b82f6',
                'blue-dark': '#1d4ed8'
            },
            fontFamily: {
                'heading': ['Montserrat', 'sans-serif'],
                'body': ['Inter', 'sans-serif']
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-blue': 'pulse-blue 2s ease-in-out infinite',
                'slide-up': 'slide-up 0.8s ease-out',
                'data-flow': 'data-flow 8s linear infinite'
            }
        }
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navigation
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('shadow-lg');
        nav.classList.remove('bg-white/95');
        nav.classList.add('bg-white');
    } else {
        nav.classList.remove('shadow-lg');
        nav.classList.remove('bg-white');
        nav.classList.add('bg-white/95');
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0s';
            entry.target.classList.add('animate-slide-up');
        }
    });
}, observerOptions);

// Observe all cards and sections for animation
document.querySelectorAll('.card-hover, section > div').forEach(element => {
    observer.observe(element);
});

// Add click handlers for CTA buttons
document.querySelectorAll('button').forEach(button => {
    if (button.textContent.includes('Get Started')) {
        button.addEventListener('click', function () {
            alert('Direct token distribution coming soon! Join our community for updates.');
        });
    }
    if (button.textContent.includes('Whitepaper')) {
        button.addEventListener('click', function () {
            alert('Whitepaper download will be available soon. Stay tuned for technical details!');
        });
    }
});

// Create additional data flow particles dynamically
function createDataParticle() {
    const particle = document.createElement('div');
    particle.className = 'data-particle';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 8 + 's';
    document.querySelector('.ai-network').appendChild(particle);

    // Remove particle after animation completes
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 8000);
}

// Create new particles periodically
setInterval(createDataParticle, 2000);

(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'97e77db516652f0f',t:'MTc1Nzc2NDg5OC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();