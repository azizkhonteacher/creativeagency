const html = document.querySelector("html");
const dark = document.querySelector(".site__button-btn");

dark.addEventListener("click", () => {
    html.classList.toggle("dark")
})