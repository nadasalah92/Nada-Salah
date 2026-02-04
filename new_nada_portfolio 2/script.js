// ======================================
// ⚡ SCRIPT.JS - ALL INTERACTIONS HERE
// ======================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Nada Portfolio Loaded Successfully!');
    
    // 🎯 Handle all "Open Project" buttons
    const projectButtons = document.querySelectorAll('.project-btn');
    
    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            
            // 📊 Track clicks (optional analytics)
            console.log('Opening project:', url);
            
            // 🚀 Open Excel file in new tab
            window.open(url, '_blank');
            
            // 🎉 Button feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // 📱 Smooth scroll for anchor links (if added later)
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
    
    // 💫 Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe skill cards and project cards
    document.querySelectorAll('.skill-card, .project-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// ======================================
// ✅ END SCRIPT.JS FILE
// ======================================
