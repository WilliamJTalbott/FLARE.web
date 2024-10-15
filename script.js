function scrollToElement(targetId, offset = 0) {
    const target = document.getElementById(targetId);
  
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: targetPosition + parseInt(offset),  // Adjust the scroll position
        behavior: "smooth"
      });
    }
  }
  

  // Add event listeners to all buttons with the class 'scroll-btn'
  document.querySelectorAll('.scrollBtn').forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('dataTarget');  // Get target from data attribute
      const offset = this.getAttribute('dataOffset');    // Get offset from data attribute
      scrollToElement(targetId, offset);
    });
  });
  