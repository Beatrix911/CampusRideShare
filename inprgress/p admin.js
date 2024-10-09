document.addEventListener('DOMContentLoaded', function() {
    // Navigation active state
    const navLinks = document.querySelectorAll('.admin-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Track Now button functionality
    const trackButtons = document.querySelectorAll('.btn-primary');
    trackButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Tracking functionality to be implemented');
        });
    });

    // Edit price button functionality
    const editButtons = document.querySelectorAll('.btn-secondary');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Price editing functionality to be implemented');
        });
    });
});
