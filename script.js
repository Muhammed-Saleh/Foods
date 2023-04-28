const icons = document.querySelectorAll(
  ".section01__icons-wrapper .section01__icon"
);

let i = 1;

setInterval(() => {
  i++;
  const icon = document.querySelector(
    ".section01__icons-wrapper .section01__icon--change"
  );
  icon.classList.remove("section01__icon--change");

  if (i > icons.length) {
    icons[0].classList.add("section01__icon--change");
    i = 1;
  } else {
    icon.nextElementSibling.classList.add("section01__icon--change");
  }
}, 3000);
