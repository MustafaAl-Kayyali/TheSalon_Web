let slideIndex = 1;
showSlides(slideIndex);

// Function to handle slide changes
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to set the slide based on dot click
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to show slides and update dots
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    
    // Loop back to first slide if beyond the last slide
    if (n > slides.length) {slideIndex = 1}
    // Loop back to the last slide if before the first slide
    if (n < 1) {slideIndex = slides.length}
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Remove "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show the current slide
    slides[slideIndex-1].style.display = "block";  
    
    // Add "active" class to the current dot
    dots[slideIndex-1].className += " active";
}

// Initialize dots dynamically based on the number of slides
document.addEventListener("DOMContentLoaded", function() {
    // Set the initial active dot
    showSlides(slideIndex);
});
