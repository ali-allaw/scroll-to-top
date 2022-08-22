let up = document.querySelector(".up");
// window.onscroll = function () {
//     if (this.scrollY >= 1000) {
//         up.style.display = "block"
//     } else {
//         up.style.display = "none"
//     }
// };

window.onscroll = function () {
    // if (window.scrollY >= 1000) {
    //     up.classList.add("show")
    // } else {
    //     up.classList.remove("show")
    // }
    window.scrollY >= 1000 ? up.classList.add("show") : up.classList.remove("show")
}
up.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})