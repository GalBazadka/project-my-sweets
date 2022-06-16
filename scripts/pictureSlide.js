let imgCounter = 0;
carousel();
function carousel() {
    const images = document.getElementsByClassName("mySlides");
    for (let i = 0 ; i < images.length; i++) {
        images[i].style.display = "none";
    }
        imgCounter++;
        if (imgCounter > images.length) {
            imgCounter = 1;
        }
    images[imgCounter-1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 2 seconds
}

imgCounter = 0;
carousel();
function carousel() {
    const images = document.getElementsByClassName("mySlidesSmall");
    for (let i = 0 ; i < images.length; i++) {
        images[i].style.display = "none";
    }
        imgCounter++;
        if (imgCounter > images.length) {
            imgCounter = 1;
        }
    images[imgCounter-1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 2 seconds
}

