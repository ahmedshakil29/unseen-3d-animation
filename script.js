const showBtn = document.querySelector(".navBtn");
const topNav = document.querySelector(".top-nav");
imgCard = document.querySelectorAll(".img-card");
imgCard.forEach((element) => {
  element.addEventListener("click", function (e) {
    //remove active class
    imgCard.forEach((el) => {
      el.classList.remove("active");
    });

    element.classList.add("active");
  });
});
showBtn.addEventListener("click", function () {
  if (topNav.classList.contains("showNav")) {
    topNav.classList.remove("showNav");
    showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
  } else {
    topNav.classList.add("showNav");
    showBtn.innerHTML = '<i class = "fas fa-times"></i>';
  }
});

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 0,
    slideShadows: true,
  },
  spaceBetween: 60,
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
