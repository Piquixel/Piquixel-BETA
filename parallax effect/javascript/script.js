function videoMenu() {
    var menuVideo = document.getElementById("menu-video");
    var menu = document.getElementById("menu");
    menuVideo.style.transform = "translate(-50%,-50%) scale(1)";
    menu.style.opacity = "1";
    menu.style.zIndex = "2";
    menuVideo.style.opacity = "1";
    menuVideo.style.transformOrigin = "top";
}

function quitVideo() {
    document.getElementById("menu-video").style.transform = "translate(-50%,-50%) scale(0)";
    document.getElementById("menu").style.opacity = "0";
    document.getElementById("menu").style.zIndex = "-1";
    document.getElementById("menu-video").style.opacity = "0";
    document.getElementById("menu-video").style.transformOrigin = "bottom";
}

function select() {
    document.getElementById("li1").classList.add("selected");
}

function plus() {
    document.getElementById("plus-menu").style.transform = "scaleY(1)";
    document.getElementById("plus-menu").style.opacity = "1";
}

function plusFerme() {
    document.getElementById("plus-menu").style.transform = "scaleY(0)";
    document.getElementById("plus-menu").style.opacity = "0";
}