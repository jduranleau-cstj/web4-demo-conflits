const images = document.querySelectorAll("img")

for (const image of images) {
    image.addEventListener("click", e => {
        if (image.classList.contains("active")) {
            image.classList.remove("active")
        } else {
            for (const autre_image of images) {
                autre_image.classList.remove("active")
            }
            image.classList.add("active")
        }
        
    })
}