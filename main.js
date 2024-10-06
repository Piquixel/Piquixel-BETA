var frienav = document.querySelector('.frienav');
var close = document.querySelector('#close');
var sofri = document.querySelector('#sofri');

sofri.onclick = function () {
    if (frienav.style.right === '-5px') {
        frienav.style.right = '-277px';
        frienav.style.opacity = '0';
        frienav.style.visibility = 'hidden';
        frienav.style.transition = 'right .3s, opacity .3s, visibility .3s';
    } else {
        frienav.style.right = '-5px';
        frienav.style.opacity = '1';
        frienav.style.visibility = 'visible';
    }
}

close.onclick = function () {
    frienav.style.right = '-277px';
    frienav.style.opacity = '0';
    frienav.style.visibility = 'hidden';
}

/* frienav.onclick = function () {
    if (menu.style.width === '250px') {
        menu.style.width = '0';
        arrow.style.left = '0';
        arrow.style.transitionDelay = '.1s';
        close.style.left = '-100px';
        close.style.transitionDelay = '.1s';
    } else {
        menu.style.width = '250px';
        arrow.style.left = '-100px';
        arrow.style.transitionDelay = '0';
        close.style.left = '3px';
        close.style.transitionDelay = '0';
    }
} */