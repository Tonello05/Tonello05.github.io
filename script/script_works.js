var works = document.getElementById("projects");

var op = 0.1
var timer = setInterval(function () {
    if (op >= 1){
        clearInterval(timer);
    }
    works.style.opacity = op;
    works.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op += op * 0.1;
}, 50);