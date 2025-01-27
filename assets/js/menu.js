function filterMenu(category) {
  const menuItems = document.querySelectorAll(".menu-item");
  if (category === "all") {
    menuItems.forEach((item) => item.classList.add("active"));
  } else {
    menuItems.forEach((item) => {
      if (item.classList.contains(category)) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
}
