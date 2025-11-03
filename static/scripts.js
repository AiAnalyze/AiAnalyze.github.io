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
                'data-flow': 'data-flow 8s linear infinite',
                // 👇 اضافه کردن تعریف انیمیشن جدید به Tailwind
                'fadeInUp': 'fadeInUp 0.3s ease-out forwards' 
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
// المنت‌ها را انتخاب کنید
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');

// کلاس‌هایی که حالت باز شدن منو را تعریف می‌کنند
const OPEN_CLASSES = ['max-h-96', 'opacity-100']; // max-h-96 یک ارتفاع کافی و بزرگ است
const CLOSED_CLASSES = ['max-h-0', 'opacity-0'];

// یک Event Listener برای کلیک روی دکمه منو اضافه کنید
menuButton.addEventListener('click', () => {
    // اگر منو باز است (یکی از کلاس‌های باز را دارد)، آن را ببند
    if (mobileMenu.classList.contains('max-h-96')) {
        mobileMenu.classList.remove(...OPEN_CLASSES);
        mobileMenu.classList.add(...CLOSED_CLASSES);
    } else {
        // اگر بسته است، آن را باز کن
        mobileMenu.classList.remove(...CLOSED_CLASSES);
        mobileMenu.classList.add(...OPEN_CLASSES);
    }

    // آیکون‌های باز و بسته را جابجا کنید
    iconOpen.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
});

// (اختیاری) بستن منو با کلیک روی لینک‌ها
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        // برای بستن، کلاس‌های باز را حذف و کلاس‌های بسته را اضافه کن
        mobileMenu.classList.remove(...OPEN_CLASSES);
        mobileMenu.classList.add(...CLOSED_CLASSES);
        
        // آیکون‌ها را به حالت بسته برگردان
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
    });
});

// (اختیاری) بستن منو با کلیک روی لینک‌ها
// اگر می‌خواهید با کلیک روی هر لینک منو بسته شود، این کد را اضافه کنید
// const mobileLinks = mobileMenu.querySelectorAll('a');
// mobileLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         mobileMenu.classList.add('hidden');
//         iconOpen.classList.remove('hidden');
//         iconClose.classList.add('hidden');
//     });
// });
// ... (کدهای قبلی)

// المنت‌های آیتم‌های موبایل منو را انتخاب کنید
const mobileItems = mobileMenu.querySelectorAll('.mobile-item');

menuButton.addEventListener('click', () => {
    // ... (منطق جابجایی آیکون‌ها)

    if (mobileMenu.classList.contains('max-h-96')) {
        // حالت بسته شدن
        mobileMenu.classList.remove(...OPEN_CLASSES);
        mobileMenu.classList.add(...CLOSED_CLASSES);
        
        // سریعاً انیمیشن آیتم‌ها را پاک کن (برای آماده‌سازی برای باز شدن بعدی)
        mobileItems.forEach(item => {
            item.classList.remove('animate-fadeInUp');
        });

    } else {
        // حالت باز شدن
        mobileMenu.classList.remove(...CLOSED_CLASSES);
        mobileMenu.classList.add(...OPEN_CLASSES);

        // اعمال انیمیشن با تأخیر (Staggered Animation)
        mobileItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate-fadeInUp');
            }, 50 + (index * 50)); // تأخیر ۵۰ میلی‌ثانیه بین هر آیتم
        });
    }

    // آیکون‌های باز و بسته را جابجا کنید
    iconOpen.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
});

// (اختیاری) بستن منو با کلیک روی لینک‌ها
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove(...OPEN_CLASSES);
        mobileMenu.classList.add(...CLOSED_CLASSES);
        
        // پاک کردن انیمیشن آیتم‌ها هنگام بسته شدن
        mobileItems.forEach(item => {
            item.classList.remove('animate-fadeInUp');
        });
        
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
    });
});

// حتماً این کد را قبل از تگ پایانی </body> قرار دهید.
document.addEventListener('DOMContentLoaded', () => {
    // 📢 این 4 المنت باید در HTML شما با همین ID ها وجود داشته باشند.
    const mobileMenu = document.getElementById('mobile-menu');
    const menuButton = document.getElementById('mobile-menu-button');
    const iconOpen = document.getElementById('icon-open');
    const iconClose = document.getElementById('icon-close');
    
    // اگر المنت های کلیدی پیدا نشد، از اجرا متوقف شوید تا خطا ندهد.
    if (!menuButton || !mobileMenu) {
        console.error("Critical mobile menu elements (button/menu) not found!");
        return; 
    }
    
    // آیتم های داخلی منو برای انیمیشن تأخیردار
    const mobileItems = mobileMenu.querySelectorAll('.mobile-item');

    const OPEN_CLASSES = ['max-h-96', 'opacity-100'];
    const CLOSED_CLASSES = ['max-h-0', 'opacity-0'];

    // حالت اولیه را تنظیم می کند (برای رفع مشکل لود شدن باز)
    function initializeMenu() {
        mobileMenu.classList.add(...CLOSED_CLASSES);
        mobileMenu.classList.remove(...OPEN_CLASSES);
        if (iconOpen) iconOpen.classList.remove('hidden');
        if (iconClose) iconClose.classList.add('hidden');
        mobileItems.forEach(item => item.classList.remove('animate-fadeInUp'));
    }
    initializeMenu(); // اجرای اولیه

    // منطق اصلی باز و بسته شدن
    menuButton.addEventListener('click', () => {
        const isMenuOpen = mobileMenu.classList.contains('max-h-96');

        if (isMenuOpen) {
            // حالت بسته شدن
            mobileMenu.classList.remove(...OPEN_CLASSES);
            mobileMenu.classList.add(...CLOSED_CLASSES);
            mobileItems.forEach(item => item.classList.remove('animate-fadeInUp'));
        } else {
            // حالت باز شدن
            mobileMenu.classList.remove(...CLOSED_CLASSES);
            mobileMenu.classList.add(...OPEN_CLASSES);

            // اعمال انیمیشن تأخیردار (Staggered Animation)
            mobileItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('animate-fadeInUp');
                }, 50 + (index * 50)); 
            });
        }

        // جابجایی آیکون‌ها
        if (iconOpen && iconClose) {
            iconOpen.classList.toggle('hidden');
            iconClose.classList.toggle('hidden');
        }
    });

    // بستن منو با کلیک روی لینک‌ها
    mobileItems.forEach(link => {
        link.addEventListener('click', () => {
            // اگر باز است، شبیه‌سازی کلیک دکمه برای اجرای منطق بسته شدن
            if (mobileMenu.classList.contains('max-h-96')) {
                menuButton.click();
            }
        });
    });
});