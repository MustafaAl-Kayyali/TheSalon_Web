let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // تغيير الصورة كل 3 ثوانٍ
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    showSlides();
}
function currentSlide(n) {
    slideIndex = n;
    showSlides();
}
