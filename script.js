function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }
  
  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }
  
  
  let slideIndex = 0;
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  
  function showSlide(index) {
      if (index >= totalSlides) {
          slideIndex = 0;
      } else if (index < 0) {
          slideIndex = totalSlides - 1;
      } else {
          slideIndex = index;
      }
      const offset = -slideIndex * 100;
      slides.style.transform = `translateX(${offset}%)`;
  }
  
  function moveSlide(n) {
      showSlide(slideIndex + n);
  }
  
  function autoPlay() {
      moveSlide(1);
      setTimeout(autoPlay, 3000); // Change image every 3 seconds
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
      autoPlay();
  });
  
  
  
  