window.addEventListener('scroll', function() {
    var scrollPos = window.scrollY;
    var header = document.querySelector('.scroll-heading');
  
    // You can adjust the factors to control the rate of size reduction
    var newSize = 36 - scrollPos * 0.02; // Adjust the scroll factor as needed
  
    // Limit the minimum font size to a reasonable value
    newSize = Math.max(newSize, 18); // Adjust the minimum font size as needed
  
    header.style.fontSize = newSize + 'px';
  });
  