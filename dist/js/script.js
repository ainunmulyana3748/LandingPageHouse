const btnHamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

btnHamburger.addEventListener("click", () => {
  btnHamburger.classList.toggle("is-active");
  menu.classList.toggle("menu-active");
});

// Feedback
const loadMore = document.querySelector(".load-more-btn");
let jumlahItem = 4;

loadMore.addEventListener("click", () => {
  const box = [...document.querySelectorAll(".feedback-box .box")];
  const btn = document.querySelector(".load-more-btn");
  for (let i = 0; i < jumlahItem + 4; i++) {
    box[i].style.display = "inline-block";
  }

  jumlahItem += 4;

  if (jumlahItem >= box.length) {
    btn.style.display = "none";
  }
});
