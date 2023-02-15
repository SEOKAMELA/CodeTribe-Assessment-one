window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (window.scrollY > 0) {
      header.style.height = "30px"; /* set the new height of the header */
    } else {
      header.style.height = "50px"; /* set the original height of the header */
    }
  });


// this javascript code will be used on the following iteation, or iteration where JS is permitted
/* header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: grey;
  box-shadow: 0 0 5px #dddddd;
  z-index: 100;
  transition: height 0.3s ease-in-out;
}

.logo {
  font-size: 2rem;
  font-weight: bold;
  color: #333333;
}

nav ul {
  display: flex;
  list-style: none;
}

nav li {
  margin-right: 1rem;
}

nav li:last-child {
  margin-right: 0;
}

nav a {
  color: #333333;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
}

.content {
  padding-top: 80px; 
} */
