// SELECTORS
const openModalBtn = document.querySelector(".product-card-buy-button");
const closeModalBtn = document.querySelectorAll(".btn");
const modalWindow = document.querySelector(".product-card-buy-container");
const product = document.querySelector(".product-card");

openModalBtn.addEventListener("click", function () {
  modalWindow.classList.add("show");
  modalWindow.style.top = "50%";
  product.style.display = "none";
});

for (let i of closeModalBtn) {
  i.addEventListener("click", function () {
    modalWindow.classList.remove("show");
    modalWindow.style.top = "-50%";
    product.style.display = "flex";
  });
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modalWindow.classList.remove("show");
    modalWindow.style.top = "-50%";
    product.style.display = "flex";
  }
});
