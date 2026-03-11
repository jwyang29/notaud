// 페이지가 로드되면 실행
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. 스크롤 페이드인 애니메이션 (Intersection Observer 활용)
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // 요소가 15% 보일 때 애니메이션 실행
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 한 번 보이면 계속 보이게 유지
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));

    // 2. 부드러운 스크롤 이동 (네비게이션 클릭 시)
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80, // 헤더 높이만큼 띄워서 스크롤
                behavior: 'smooth'
            });
        });
    });
});
