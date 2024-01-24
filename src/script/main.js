function Modal() {
  const images = document.querySelectorAll(".pos-contents > img");
  const openImage = document.querySelector(".open-img");
  const blankImage = document.querySelector(".open-img > img");
  const closeImage = document.querySelector(".close-img");
  const hiddenImage = document.querySelector(".hidden-img");
  images.forEach((image) => {
    image.addEventListener("click", (eve) => {
      openImage.classList.toggle("active");
      blankImage.src = eve.target.src;

      image.style.display = "block";
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    });
  });

  closeImage.addEventListener("click", () => {
    openImage.classList.remove("active");
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  });
  hiddenImage.addEventListener("click", () => {
    openImage.classList.remove("active");
  });

  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      openImage.classList.remove("active");
    }
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  });
}

Modal();

// Lazy Loading
// Skeleton
// Page Tranisition
// Intersection Observer
// Pre-Loader
