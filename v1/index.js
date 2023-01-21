const openButton = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factList = document.querySelectorAll(".fact");

factList.innerHTML = "";
openButton.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
  } else {
    form.classList.add("hidden");
  }
});
