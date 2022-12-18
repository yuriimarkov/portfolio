const navBtn = document.querySelector('.js-nav-btn-holder');
const header = document.querySelector('.js-header');


navBtn.addEventListener("click", () => {
  header.classList.toggle("active");
});