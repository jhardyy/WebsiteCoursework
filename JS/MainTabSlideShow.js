//create a variable called slideIndex and assign it the value of 0.
let slideIndex = 0;
//call the function showSlides.
showSlides();

//create a function called showSlides.
function showSlides() {
    //create a variable called i
    let i;
    //create a variable called slides and assign it to the elements that have the class name 'MySlides'.
    let slides = document.getElementsByClassName("mySlides");
    //create a variable called dots assign it to the elements that have the class name 'dot'.
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    //Change the image ever 5 seconds.
    setTimeout(showSlides, 5000);
}