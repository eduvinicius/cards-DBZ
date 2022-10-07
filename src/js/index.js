const images = document.querySelectorAll(".card");
const arrowBack = document.getElementById("btn-back");
const arrowNext = document.getElementById("btn-next");

var currentlyImage = 0;

const hideImages = () => {
    images.forEach((image) => {
        image.classList.remove("select")
    })       
};

const selectImage = () => {
    images[currentlyImage].classList.add("select")
};

arrowBack.addEventListener("click", (event) => {
    event.preventDefault();
    if(currentlyImage !== 0) {
        currentlyImage--;
    } 
    
    hideImages();
    selectImage();
});

arrowNext.addEventListener("click", (event) => {
    event.preventDefault();
    if(currentlyImage !== images.length - 1) {
        currentlyImage++
    }

    hideImages();
    selectImage();
});

