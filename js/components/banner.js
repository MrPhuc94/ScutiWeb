document.addEventListener('DOMContentLoaded', () => {
  fetch('components/banner.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('banner').innerHTML = data;

      let slideIndex = 0;
      const slides = document.querySelectorAll('.slide');
      const dots = document.querySelectorAll('.dot');

      function showSlide(index) {
        if (index >= slides.length) {
          slideIndex = 0;
        } else if (index < 0) {
          slideIndex = slides.length - 1;
        } else {
          slideIndex = index;
        }
        const offset = -slideIndex * 100;
        document.getElementsByClassName(
          'slides'
        )[0].style.transform = `translateX(${offset}%)`;

        // Update active dot
        dots.forEach((dot) => dot.classList.remove('active'));
        dots[slideIndex].classList.add('active');
      }

      function moveSlide(n) {
        showSlide(slideIndex + n);
      }

      function currentSlide(n) {
        showSlide(n);
      }

      // Initialize the slider
      showSlide(slideIndex);

      // add automatic sliding
      setInterval(() => {
        moveSlide(1);
        currentSlide(slideIndex);
      }, 3000);
    });
});
