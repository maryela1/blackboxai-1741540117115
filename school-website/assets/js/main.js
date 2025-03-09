// Form validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset error messages
            hideAllErrors();
            
            // Get form fields
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            let isValid = true;
            
            // Validate name
            if (!name.value.trim()) {
                showError('name');
                isValid = false;
            }
            
            // Validate email
            if (!isValidEmail(email.value.trim())) {
                showError('email');
                isValid = false;
            }
            
            // Validate subject
            if (!subject.value.trim()) {
                showError('subject');
                isValid = false;
            }
            
            // Validate message
            if (!message.value.trim()) {
                showError('message');
                isValid = false;
            }
            
            // If form is valid, show success message
            if (isValid) {
                // Here you would typically send the form data to a server
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }
});

// Email validation helper function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show error message for a field
function showError(fieldName) {
    const errorElement = document.getElementById(`${fieldName}Error`);
    if (errorElement) {
        errorElement.classList.remove('hidden');
    }
}

// Hide all error messages
function hideAllErrors() {
    const errorElements = document.querySelectorAll('[id$="Error"]');
    errorElements.forEach(element => {
        element.classList.add('hidden');
    });
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.md\\:hidden button');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu hidden fixed top-16 left-0 w-full bg-white shadow-lg md:hidden';
    mobileMenu.innerHTML = `
        <div class="py-4 px-6 space-y-4">
            <a href="index.html" class="block text-gray-600 hover:text-blue-600 transition duration-300">Home</a>
            <a href="about.html" class="block text-gray-600 hover:text-blue-600 transition duration-300">About</a>
            <a href="contact.html" class="block text-gray-600 hover:text-blue-600 transition duration-300">Contact</a>
        </div>
    `;
    
    document.body.appendChild(mobileMenu);
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add active state to current navigation link
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('text-blue-600', 'font-semibold');
            link.classList.remove('text-gray-600');
        }
    });
});
