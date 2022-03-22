const modal = document.querySelector(".modal-overlay");
const closeModal = document.querySelector(".close-btn");
const openModal = document.querySelector(".modal-btn");

openModal.addEventListener("click", function () {
  modal.classList.add("open-modal");
  openModal.classList.add("hidden");
});
closeModal.addEventListener("click", function () {
  modal.classList.remove("open-modal");
  openModal.classList.remove("hidden");
});
