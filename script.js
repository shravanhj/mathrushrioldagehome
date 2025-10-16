
const galleryImages = [
    {
        src: 'https://images.unsplash.com/photo-1618417606098-ce7a5493be5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBjaXRpemVucyUyMGFjdGl2aXRpZXN8ZW58MHx8fHwxNzYwNjMzNTYyfDA&ixlib=rb-4.1.0&q=85',
        title: 'Community Care',
        description: 'Outdoor activities and fresh air',
    },
    {
        src: 'https://images.unsplash.com/photo-1659434567031-a98e1187a9e3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxzZW5pb3IlMjBjaXRpemVucyUyMGFjdGl2aXRpZXN8ZW58MHx8fHwxNzYwNjMzNTYyfDA&ixlib=rb-4.1.0&q=85',
        title: 'Social Activities',
        description: 'Board games and leisure time',
    },
    {
        src: 'https://images.unsplash.com/photo-1513159446162-54eb8bdaa79b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxzZW5pb3IlMjBjaXRpemVucyUyMGFjdGl2aXRpZXN8ZW58MHx8fHwxNzYwNjMzNTYyfDA&ixlib=rb-4.1.0&q=85',
        title: 'Mental Wellness',
        description: 'Chess and cognitive activities',
    },
    {
        src: 'https://images.pexels.com/photos/8939962/pexels-photo-8939962.jpeg',
        title: 'Physical Fitness',
        description: 'Daily exercise routines',
    },
    {
        src: 'https://images.unsplash.com/photo-1632110287190-7b6807b7ad2e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHw0fHxlbGRlcmx5JTIwY2FyZSUyMEluZGlhfGVufDB8fHx8MTc2MDYzMzU1Nnww&ixlib=rb-4.1.0&q=85',
        title: 'Peaceful Living',
        description: 'Comfortable and serene environment',
    },
    {
        src: 'https://images.pexels.com/photos/14260022/pexels-photo-14260022.jpeg',
        title: 'Daily Care',
        description: 'Compassionate support services',
    },
];

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    } else {
        mobileMenu.classList.add('active');
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobileMenu');
        const menuIcon = document.getElementById('menuIcon');
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    }
}

// Gallery modal functions
function openGalleryModal(index) {
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    const image = galleryImages[index];
    
    modalImage.src = image.src;
    modalImage.alt = image.title;
    modalTitle.textContent = image.title;
    modalDescription.textContent = image.description;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGalleryModal() {
    const modal = document.getElementById('galleryModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeGalleryModal();
    }
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    alert(`Thank you, ${name}! We have received your message and will get back to you soon at ${email} or ${phone}.`);
    
    // Reset form
    this.reset();
});

// Add animation on scroll
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.value-card, .service-card, .gallery-item, .info-card');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.2s ease, transform 0.6s ease';
        observer.observe(element);
    });
});