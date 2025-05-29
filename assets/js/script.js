document.addEventListener("DOMContentLoaded", function() {
  fetch('assets/includes/header.html')
    .then(res => res.text())
    .then(data => document.getElementById('header').innerHTML = data);

  fetch('assets/includes/footer.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
      document.getElementById('year').textContent = new Date().getFullYear();
    });
});
