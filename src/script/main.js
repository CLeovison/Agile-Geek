function Modal() {
  const images = document.querySelectorAll(".pos-contents > img");
  const openImage = document.querySelector(".open-img");
  const blankImage = document.querySelector(".open-img > img");
  const closeImage = document.querySelector(".close-img")

  images.forEach((image) => {
    image.addEventListener("click", (eve) => {
      openImage.classList.toggle('active');
      blankImage.src = eve.target.src
   
    });
  });


  closeImage.addEventListener('click', ()=>{
    openImage.classList.remove('active')
  })

  window.addEventListener('keydown', function(event){
    if(event.key === 'Escape'){
        openImage.classList.remove('active');
    }
} )
}

Modal();

// Lazy Loading
// Skeleton
// Page Tranisition
// Intersection Observer
// Pre-Loader
