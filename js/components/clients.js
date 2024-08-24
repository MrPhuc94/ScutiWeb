document.addEventListener('DOMContentLoaded', () => {
  fetch('components/clients.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('clients').innerHTML = data;
    });
});
