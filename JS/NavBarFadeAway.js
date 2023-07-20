// Get the initial scroll position
let lastScrollPosition = window.scrollY;

// Function to handle scroll event
function handleScroll() {
  // Get the current scroll position
  const currentScrollPosition = window.scrollY;

  // Check if scrolling down
  if (currentScrollPosition > lastScrollPosition) {
    // Add the 'fade-out' class to the navbar
    document.querySelector('.NavBar').classList.add('fade-out');
  } else {
    // Remove the 'fade-out' class from the navbar
    document.querySelector('.NavBar').classList.remove('fade-out');
  }

  // Update the last scroll position
  lastScrollPosition = currentScrollPosition;
}

// Attach the 'handleScroll' function to the scroll event
window.addEventListener('scroll', handleScroll);
