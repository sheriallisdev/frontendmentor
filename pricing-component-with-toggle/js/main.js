const switchBody = document.querySelector(".switch-body");
const monthlyPrice = document.querySelectorAll(".price__monthly");
const annualPrice = document.querySelectorAll(".price__annual");

const togglePrice = () => {
  annualPrice.forEach(el => {
    el.classList.toggle("active");
  });
  monthlyPrice.forEach(el => {
    el.classList.toggle("active");
  });
};

switchBody.addEventListener("click", () => {
  const switchBodyState = switchBody.getAttribute("aria-checked");
  switchBody.setAttribute(
    "aria-checked",
    switchBodyState === "false" ? "true" : "false"
  );
  togglePrice();
});
