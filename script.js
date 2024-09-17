let slideIndex = 0;
showSlides(); // Call the function to display the first slide

// Function to show slides
function showSlides() {
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remove the active class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Increment the slide index and loop back to 0 if necessary
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  // Display the current slide and add the "active" class to the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  
  // Change slide every 7 seconds
  setTimeout(showSlides, 7000);
}

// Function to move to a specific slide
function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

// Function to move to the next or previous slide
function plusSlides(n) {
  slideIndex += n;
  if (slideIndex > document.getElementsByClassName("slides").length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = document.getElementsByClassName("slides").length;
  }
  showSlides();
}
