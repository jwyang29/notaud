document.addEventListener("DOMContentLoaded", () => {
    
    // 1. 스크롤 페이드인 애니메이션 (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));

    // 2. 부드러운 스크롤 이동 
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80, 
                behavior: 'smooth'
            });
        });
    });

    // 3. (NEW) Dreamy Mouse Parallax Effect for floating elements
    document.addEventListener("mousemove", (e) => {
        const floaters = document.querySelectorAll('.float-anim, .float-anim-delayed');
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;

        floaters.forEach(floater => {
            // Apply a subtle translation to follow the mouse slightly, adding depth
            floater.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
});
