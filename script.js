//  JavaScript code here
document
  .getElementById("openModalButton")
  .addEventListener("click", function () {
    openModal();
  });

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
