const articleBtn = document.querySelector(".article-btn");

let clicks = localStorage.getItem("clicks");
const clickCounter = () => {
  clicks++;
  localStorage.setItem("clicks", clicks);
  console.log(clicks);
};

const toggleModal = () => {
  const modal = document.querySelector(".modal");
  const hideBtn = document.querySelector(".hide-modal");
  const darker = document.querySelector(".darker");
  modal.classList.add("show-modal");
  darker.classList.add("darker-active");

  const hideModalBtn = () => {
    modal.classList.remove("show-modal");
    darker.classList.remove("darker-active");
  };

  hideBtn.addEventListener("click", hideModalBtn);
  darker.addEventListener("click", hideModalBtn);

  showClicksNumber();
};

const showClicksNumber = () => {
  const showClicks = document.querySelector(".clicks-number");
  const clicksNumber = localStorage.getItem("clicks");
  showClicks.textContent = clicksNumber + ' times';
};

articleBtn.addEventListener("click", clickCounter);
articleBtn.addEventListener("click", toggleModal);
