const burger = document.querySelector(".burger");
const mobi = document.querySelector(".mobi");

burger.addEventListener("click", () => {
    mobi.classList.toggle("active");
});
