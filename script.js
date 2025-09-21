// Clone the slider
let copy = document.querySelector(".slide-group").cloneNode(true);
document.querySelector(".slides").appendChild(copy);
//Swiper js code
var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

let menuList = document.querySelector(".center-nav");
menuList.style.maxHeight = "0px";
function toggleMenu(){
  if(menuList.style.maxHeight == "0px"){
    menuList.style.maxHeight = "300px";
  }
  else{
    menuList.style.maxHeight = "0px";
  }
}