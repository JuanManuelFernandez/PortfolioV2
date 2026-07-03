const btnMenu = document.getElementById("BtnMenu");
const nav = document.getElementById("ListaNav");

btnMenu.addEventListener("click", () => {
    nav.classList.toggle("Activa");
});

nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("Activa");
    });
});