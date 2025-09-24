// Smooth scrolling for navigation links
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

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe sections for animations
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Form submission with EmailJS
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Initialize EmailJS with your public key
    emailjs.init('gLI2XMXbJeh25qrSY');

    const formData = {
        from_name: document.querySelector('input[type="text"]').value,
        from_email: document.querySelector('input[type="email"]').value,
        message: document.querySelector('textarea').value,
        to_name: 'Micah'
    };

    emailjs.send('service_de3zqej', 'template_6h1tat5', formData)
        .then((response) => {
            alert('Thank you for your message! I will get back to you soon.');
            document.querySelector('form').reset();
        }, (error) => {
            alert('Failed to send message. Please try again or contact me directly.');
            console.error('EmailJS error:', error);
        });
});