(function() {
  var menuBurguer = document.querySelector(".js-menu-toggle");
  var menu = document.querySelector(".js-menu");

  menuBurguer.addEventListener("click", function(event) {
    var menuOpen = menu.classList.contains("is-open");
    var menuStatus = !menuOpen;

    menuBurguer.setAttribute("aria-expanded", menuStatus);
    menu.classList.toggle("is-open");
  });
})();
