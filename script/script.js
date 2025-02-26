var main_page = document.getElementById("main-page");
var loading = document.getElementById("title");
var loading_div = document.getElementById("title");

var name_loading = document.getElementById("name_loading");
var portfolio_loading = document.getElementById("portfolio_loading");

main_page.style.opacity = 0;

setTimeout(() => {
  loading_div.remove();
  var op = 0.1;  // initial opacity
  main_page.style.display = 'block';
  var timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);
      }
      main_page.style.opacity = op;
      main_page.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
  }, 30);
}, 3000);

setTimeout(() => {
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
      if (op <= 0){
          clearInterval(timer);
      }
      name_loading.style.opacity = op;
      name_loading.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
  }, 50);

  var op = 1;  // initial opacity
  var timer_1 = setInterval(function () {
    if (op <= 0){
        clearInterval(timer_1);
    }
    portfolio_loading.style.opacity = op;
    portfolio_loading.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op -= op * 0.1;
  }, 50);
}, 1000);

