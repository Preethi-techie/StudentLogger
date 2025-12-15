
const checkAuth = () => {
    const tokenValue = sessionStorage.getItem("user");
    if (tokenValue) {
        console.log("verified")
    } else {
        location.href = "/public/pages/login.html";
    }
}
window.addEventListener("load", checkAuth);