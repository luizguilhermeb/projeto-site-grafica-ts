function menuShow() {
    var menu = document.getElementById("nav-bar-mobile");
    if (menu.style.display !== "block") {
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

var links = document.querySelectorAll("#nav-bar-mobile a");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", menuShow);
}

window.addEventListener("resize", checkScreenSize);
