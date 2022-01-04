// 刪除訂單
const deleteModal = document.querySelector("#deleteModal");
const deleteModalText = document.querySelector("#deleteModalText");

// console.log(deleteModal);

deleteModal.addEventListener("show.bs.modal", function (event) {
  const button = event.relatedTarget;
  console.log(button);
  const orderId = button.dataset.bsOrderId;
  console.log(orderId);
  deleteModalText.textContent = orderId;
});

// 選單操作
const allItem = document.querySelector("#allItem");
const stayItem = document.querySelector("#stayItem");
const endItem = document.querySelector("#endItem");
const payItem = document.querySelector("#payItem");

allItem.addEventListener("click", function (item) {
  allItem.classList.add("active");
  stayItem.classList.remove("active");
  endItem.classList.remove("active");
  payItem.classList.remove("active");
});
stayItem.addEventListener("click", function (item) {
  allItem.classList.remove("active");
  stayItem.classList.add("active");
  endItem.classList.remove("active");
  payItem.classList.remove("active");
});
endItem.addEventListener("click", function (item) {
  allItem.classList.remove("active");
  stayItem.classList.remove("active");
  endItem.classList.add("active");
  payItem.classList.remove("active");
});
payItem.addEventListener("click", function (item) {
  allItem.classList.remove("active");
  stayItem.classList.remove("active");
  endItem.classList.remove("active");
  payItem.classList.add("active");
});
