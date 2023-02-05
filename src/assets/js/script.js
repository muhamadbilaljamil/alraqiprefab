function toggleMobileMenu(menu) {
    let menus = document.getElementById("mobile-menus-list").classList.toggle("open");
    let burger = menu.classList.toggle("open");
   menus.classList.toggle("open");
}