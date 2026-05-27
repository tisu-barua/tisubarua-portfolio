document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Responsive Menu Logic ---
    const menuBtn = document.querySelector('#menu-btn');
    const navbar = document.querySelector('.navbar');

    menuBtn.addEventListener('click', () => {
        // Toggle icon state
        menuBtn.classList.toggle('fa-xmark');
        // Toggle mobile navbar layout slide-in
        navbar.classList.toggle('active');
    });

    // Close navbar when user clicks on any single link element
    window.onscroll = () => {
        menuBtn.classList.remove('fa-xmark');
        navbar.classList.remove('active');
        updateActiveNavLink();
    };

    // --- Scroll Spy: Highlight Current Section in Header ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    function updateActiveNavLink() {
        let currentScrollPos = window.scrollY;

        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(currentScrollPos >= offset && currentScrollPos < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
    }

    // --- Interactive FAQ Accordion Mechanism ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const currentItem = this.parentElement;
            const answer = this.nextElementSibling;

            // Check if item is already expanded
            if (currentItem.classList.contains('active')) {
                answer.style.maxHeight = null;
                currentItem.classList.remove('active');
            } else {
                // Collapse any other open FAQ items first for smooth visual accordion effect
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').style.maxHeight = null;
                });

                // Expand clicked item
                currentItem.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

});