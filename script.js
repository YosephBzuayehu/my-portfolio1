
          
        // ============ Typing Animation ===========
        var typed = new Typed(".typing", {
        strings: [
            "Student ",
            "Front-End Developer ",
            "UI/UX Designer ",
        ],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 1000,
        loop: true,
        smartBackspace: true,
        showCursor: true,
        });
            
          
          document.getElementById("year").textContent = new Date().getFullYear();

        // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
            // Close mobile menu when clicking outside
           window.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });
        // Animate skill bars when scrolling to skills section
        const skillBars = document.querySelectorAll('.skill-progress');
        
        function animateSkillBars() {
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                if (isElementInViewport(bar)) {
                    bar.style.width = width + '%';
                }
            });
        }
        
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        
        window.addEventListener('scroll', animateSkillBars);
        window.addEventListener('load', animateSkillBars);
        
        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
