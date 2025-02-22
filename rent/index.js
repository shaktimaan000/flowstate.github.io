document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    const toast = document.getElementById('toast');
    toast.style.display = 'block';
    
    // Reset form
    this.reset();
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      toast.style.display = 'none';
    }, 3000);
  });