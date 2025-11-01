// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.querySelector("ul").classList.toggle("active");
  menuToggle.classList.toggle("open");
});

// Product Modal Logic
const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const sizeSelect = document.getElementById("sizeSelect");
const colorSelect = document.getElementById("colorSelect");
const buyBtn = document.getElementById("buyBtn");

let selectedProduct = "";

function openDetails(name, description, sizes, colors) {
  selectedProduct = name;
  modalTitle.textContent = name;
  modalDescription.textContent = description;

  // Populate dropdowns
  sizeSelect.innerHTML = sizes.map((s) => `<option value="${s}">${s}</option>`).join("");
  colorSelect.innerHTML = colors.map((c) => `<option value="${c}">${c}</option>`).join("");

  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

// Buy Now Button
buyBtn.addEventListener("click", () => {
  const size = sizeSelect.value;
  const color = colorSelect.value;

 
  const baseURL = "https://forms.gle/b9EhraRGJMs74Nf6A?";
  const params = new URLSearchParams({
    "entry.1234567890": selectedProduct, // Product name field
    "entry.0987654321": size,            // Size field
    "entry.1122334455": color            // Color field
  });

  const formURL = baseURL + params.toString();
  window.open(formURL, "_blank");
});

// Close modal if user clicks outside content
window.onclick = (e) => {
  if (e.target == modal) closeModal();
};
