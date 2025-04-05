document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("ul a").forEach((link) => {
      link.addEventListener("click", () => {
        document.getElementById("click").checked = false;
      });
    });
  });

  // AOS
  AOS.init({
    offset: 200,
    duration: 1000,
  });