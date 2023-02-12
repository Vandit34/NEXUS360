document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

if (window.location.href.includes("#")) {
  window.scrollTo(0, 0);
}
window.onload = function () {
  // Check if the current position is not at the top of the page
  if (window.pageYOffset > 0) {
    // Scroll to the top of the page smoothly
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
};
