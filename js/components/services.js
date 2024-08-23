document.addEventListener('DOMContentLoaded', () => {
  fetch('components/services.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('services').innerHTML = data;
    });
});
