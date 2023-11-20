let index = 1;
showSlides(index);

function slideadd(n) {
  showSlides(index += n);
}

function current_slide(n) {
  showSlides(index = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots= document.getElementsByClassName("demo");
  let text =document.getElementById("caption");
  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "block";
  dots[index-1].className += " active";
  text.innerHTML = dots[index-1].alt;
}