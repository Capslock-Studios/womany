document.addEventListener('DOMContentLoaded', function() {
    // Get current page URL path (e.g., "about.html")
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Inject navigation HTML
    document.getElementById('nav').innerHTML = `
        <div class="wrap">
            <div class="sec-1">
                <div class="logo">
                    <a href="index.html"><img src="images/womany-logo-trans.png" alt="Womany Logo"></a>
                </div>
            </div>
            <div class="hamburger" onclick="toggleMenu()">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="sec-2 nav-links">
                <a class="nav-link" href="index.html">Home</a>
                <a class="nav-link" href="about.html">About</a>
                <a class="nav-link" href="challenges.html">Challenges</a>
                <a class="nav-link" href="solutions.html">Solutions</a>
                <a class="nav-link" href="media.html">Media</a>
                <a class="nav-link" href="involved.html">Get Involved</a>
                <a class="nav-link" href="contact.html">Contact</a>
            </div>
            <div class="sec-3">
                <div class="d-flex justify-content-end align-items-center h-100">
                    <div class="nav-social"><a href="https://x.com/WomanyHealth"><i class="bi bi-twitter-x"></i></a></div>
                    <div class="nav-social"><a href="https://www.youtube.com/@WomanyApp"><i class="bi bi-youtube"></i></a></div>
                    <div class="nav-social"><a href="https://www.instagram.com/Womany_Health"><i class="bi bi-instagram"></i></a></div>
                    <div class="nav-social"><a href="https://www.facebook.com/womanyhealth"><i class="bi bi-facebook"></i></a></div>
                    <div class="nav-social"><a href="https://www.linkedin.com/company/womanyhealth"><i class="bi bi-linkedin"></i></a></div>
                </div>
            </div>
        </div>
    `;

    // Highlight active link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage) {
            link.classList.add('active');
        }
    });
});

// Toggle mobile menu (if needed)
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}