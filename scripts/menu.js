function openMenu() {
    const menu = document.getElementById("myLinks");
    const hamburger = document.getElementsByClassName("hamburgerImg");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
        hamburger.style.position = "absolute";
        hamburger.style.top = "50px";
        document.getElementsByClassName("hamburgerImg").style.position = "absolute";
        document.getElementsByClassName("hamburgerImg").style.top = "-150px";
    }
}
