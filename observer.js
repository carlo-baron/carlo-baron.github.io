var fadeTimeouts = {};

function checkVisibility() {
  var elements = document.querySelectorAll('.fade-in');
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var position = element.getBoundingClientRect();

    // If the element is visible in the viewport, add a class that sets opacity to 1
    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('fade-in-visible');
      clearTimeout(fadeTimeouts[element.id]); // Cancel any pending fade-out
    }
    // If the element has gone out of the viewport, remove the class that sets opacity to 1 after a delay
    else {
      var delay = element.getAttribute('data-fade-delay') || 0;
      fadeTimeouts[element.id] = setTimeout(function(element) {
        element.classList.remove('fade-in-visible');
      }, delay, element);
    }
  }
}

function checkScroll() {
  requestAnimationFrame(checkScroll);
  checkVisibility();
}

// Call checkScroll to start the loop
checkScroll();