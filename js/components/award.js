document.addEventListener('DOMContentLoaded', () => {
  fetch('components/award.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('award').innerHTML = data;
    });
});

document.addEventListener('DOMContentLoaded', () => {
  fetch('components/award_slide.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('award_slide').innerHTML = data;
    });
});
