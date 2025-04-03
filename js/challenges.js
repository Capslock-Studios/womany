document.addEventListener('DOMContentLoaded', function() {
    const challengeItems = document.querySelectorAll('.challenge-item');
    let currentActive = 0;
    let isScrolling = false;
    let touchStartY = 0;
    let scrollTimeout;

    // Create navigation dots
    const scrollNav = document.createElement('div');
    scrollNav.className = 'scroll-nav';
    challengeItems.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `scroll-nav-dot${index === 0 ? ' active' : ''}`;
        dot.addEventListener('click', () => goToSection(index));
        scrollNav.appendChild(dot);
    });
    document.body.appendChild(scrollNav);

    // Initialize first section
    challengeItems[0].classList.add('active');

    function updateSections(newIndex) {
        // Remove all classes first
        challengeItems.forEach(item => {
            item.classList.remove('active', 'previous');
        });

        // Add appropriate classes
        if (newIndex > 0) {
            challengeItems[newIndex - 1].classList.add('previous');
        }
        challengeItems[newIndex].classList.add('active');

        // Update navigation dots
        document.querySelectorAll('.scroll-nav-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === newIndex);
        });
    }

    function goToSection(index) {
        if (isScrolling || index === currentActive) return;
        if (index >= 0 && index < challengeItems.length) {
            isScrolling = true;
            currentActive = index;
            updateSections(currentActive);

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isScrolling = false;
            }, 1000);
        }
    }

    // Scroll handling
    function handleScroll(direction) {
        if (direction === 'down') {
            goToSection(Math.min(currentActive + 1, challengeItems.length - 1));
        } else {
            goToSection(Math.max(currentActive - 1, 0));
        }
    }

    // Event listeners
    window.addEventListener('wheel', (e) => {
        e.preventDefault();
        handleScroll(e.deltaY > 0 ? 'down' : 'up');
    }, { passive: false });

    window.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        const diff = touchStartY - touchEndY;
        if (Math.abs(diff) > 50) {
            handleScroll(diff > 0 ? 'down' : 'up');
        }
    }, { passive: true });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            handleScroll('down');
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            handleScroll('up');
        }
    });

    // Prevent default scrolling
    document.body.style.overflow = 'hidden';
});