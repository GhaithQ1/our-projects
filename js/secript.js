// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');

    navToggle && navToggle.addEventListener('click', () => {
        if (mainNav.style.display === 'block') {
            mainNav.style.display = '';
        } else {
            mainNav.style.display = 'block';
            mainNav.style.position = 'absolute';
            mainNav.style.top = '72px';
            mainNav.style.right = '20px';
            mainNav.style.background = 'rgba(0,0,0,0.12)';
            mainNav.style.padding = '12px 18px';
            mainNav.style.borderRadius = '8px';
        }
    });
});