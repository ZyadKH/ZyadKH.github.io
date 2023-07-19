
// Wait for the DOM content to load before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const navBar = document.querySelector('.NavBar');
  
    function handleScroll() {
      if (window.scrollY > 100) {
        navBar.classList.add('fade-out');
      } else {
        navBar.classList.remove('fade-out');
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  });
  