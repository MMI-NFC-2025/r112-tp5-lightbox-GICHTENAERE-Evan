const lightBox = document.querySelector("#lightbox");
const images = document.querySelectorAll("img"); // ou la classe/sélecteur de vos images

images.forEach(img => {
    img.addEventListener("click", () => {
        lightBox.showModal();
    });
});

// Pour fermer la lightbox
lightBox.addEventListener("click", () => {
    lightBox.close();
});
