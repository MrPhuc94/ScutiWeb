document.addEventListener('DOMContentLoaded', () => {
  fetch('components/clients.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('clients').innerHTML = data;
    });
});


document.addEventListener('DOMContentLoaded', () => {
  fetch('components/clients_slide.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('clients_slide').innerHTML = data;
    });
});
