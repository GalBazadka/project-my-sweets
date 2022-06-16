function openMenu() {
    const menu = document.getElementById("myLinks");
    const hamburger = document.querySelector("img[src='picture/hamburger.png']");
    const close = document.querySelector("img[src='picture/closeBlueBig.png']");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        hamburger.style.top = "70px";

    } else {
        menu.style.display = "block";
        hamburger.style.top = "-130px";

    }
}
