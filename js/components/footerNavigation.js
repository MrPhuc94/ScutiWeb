document.addEventListener('DOMContentLoaded', () => {
  fetch('components/footerNavigation.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('footerNavigation').innerHTML = data;
    });
});

