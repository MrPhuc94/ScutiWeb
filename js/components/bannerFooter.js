document.addEventListener('DOMContentLoaded', () => {
  fetch('components/bannerFooter.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('bannerFooter').innerHTML = data;
    });
});
