const articleBtn = document.querySelector(".article-btn");
const resetBtn = document.querySelector(".reset");

let clicks = localStorage.getItem("clicks");
const clickCounter = () => {
  clicks++;
  localStorage.setItem("clicks", clicks);
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
  showClicks.textContent = clicksNumber + " times";
  const resetClicks = () => {
    clicks = 0;
    localStorage.setItem("clicks", clicks);
    showClicks.textContent = "0 times";
    resetBtn.classList.add("hide-reset");
  };
  resetBtn.addEventListener("click", resetClicks);
};

const hideResetBtn = () => {
  if (clicks < 5) {
    resetBtn.classList.add("hide-reset");
  } else {
    resetBtn.classList.remove("hide-reset");
  }
};

articleBtn.addEventListener("click", clickCounter);
articleBtn.addEventListener("click", toggleModal);
articleBtn.addEventListener("click", hideResetBtn);
