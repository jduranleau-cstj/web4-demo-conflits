const images = document.querySelectorAll("img")

for (const image of images) {
    image.addEventListener("click", e => {
        // <img class="">
        image.classList.toggle("active")
    })
}