window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (window.scrollY > 0) {
      header.style.height = "30px"; /* set the new height of the header */
    } else {
      header.style.height = "50px"; /* set the original height of the header */
    }
  });
