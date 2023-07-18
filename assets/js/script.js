function menuShow() {
    var menu = document.getElementById("nav-bar-mobile");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
}

function checkScreenSize() {
    var menu = document.getElementById("nav-bar-mobile");
    if (window.innerWidth >= 650) {
      menu.style.display = "none";
    }
}

window.addEventListener("resize", checkScreenSize);
