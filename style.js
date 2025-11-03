/* ===========================
   MOBILE MENU TOGGLE
=========================== */
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");
  const navList = navbar.querySelector("ul");

  if (menuToggle && navList) {
    menuToggle.addEventListener("click", () => {
      navList.classList.toggle("active");
      menuToggle.classList.toggle("open");
    });
  }

  /* ===========================
     PRODUCT MODAL LOGIC
  =========================== */
  const modal = document.getElementById("productModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const sizeSelect = document.getElementById("sizeSelect");
  const colorSelect = document.getElementById("colorSelect");
  const buyBtn = document.getElementById("buyBtn");

  let selectedProduct = "";

  // Open modal
  window.openDetails = function (name, description, sizes = [], colors = []) {
    if (!modal || !modalTitle || !modalDescription) return;

    selectedProduct = name;
    modalTitle.textContent = name;
    modalDescription.textContent = description;

    sizeSelect.innerHTML = sizes
      .map((s) => `<option value="${s}">${s}</option>`)
      .join("");
    colorSelect.innerHTML = colors
      .map((c) => `<option value="${c}">${c}</option>`)
      .join("");

    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent scroll when modal is open
  };

  // Close modal
  window.closeModal = function () {
    if (modal) modal.style.display = "none";
    document.body.style.overflow = "auto";
  };

  // Close modal when clicking outside content
  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Buy Now button
  if (buyBtn) {
    buyBtn.addEventListener("click", () => {
      const size = sizeSelect ? sizeSelect.value : "";
      const color = colorSelect ? colorSelect.value : "";

      const baseURL = "https://forms.gle/b9EhraRGJMs74Nf6A?";
      const params = new URLSearchParams({
        "entry.1234567890": selectedProduct, // Product name field
        "entry.0987654321": size,            // Size field
        "entry.1122334455": color,           // Color field
      });

      const formURL = baseURL + params.toString();
      window.open(formURL, "_blank");
    });
  }

  /* ===========================
     SCROLL NAV EFFECT (Optional)
  =========================== */
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
