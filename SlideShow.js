var slideIndex1 = 1;
showDivs1(slideIndex1);

function plusDivs1(n) {
  showDivs1(slideIndex1 += n);
}

function showDivs1(n) {
  var i;
  var y = document.getElementsByClassName("mySlides1");
  if (n > y.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = y.length}
  for (i = 0; i < y.length; i++) {
     y[i].style.display = "none";
  }
  y[slideIndex1-1].style.display = "block";
}
