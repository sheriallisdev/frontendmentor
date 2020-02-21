const switchBody = document.querySelector(".switch-body");
const monthlyPrice = document.querySelector(".price__monthly");
const annualPrice = document.querySelector(".price__annual");

switchBody.addEventListener("click", () => {
  const switchBodyState = switchBody.getAttribute("aria-checked");
  switchBody.setAttribute(
    "aria-checked",
    switchBodyState === "false" ? "true" : "false"
  );
});
