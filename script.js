document.querySelectorAll('.nav-a-container a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
  
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust offset for better alignment
                behavior: 'smooth'
            });
        }
    });
  });

