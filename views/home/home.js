fetch('../header/header.html')
.then(response => response.text())
.then(data => {
  document.querySelector('#header').innerHTML = data;
});


fetch('../footer/footer.html')
.then(response => response.text())
.then(data => {
document.querySelector('#footer').innerHTML = data;
});