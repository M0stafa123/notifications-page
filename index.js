let notf = document.querySelectorAll(".body > div");
let unread = document.querySelector(".number");
let markAll = document.querySelector(".all-read");
let count = 0;
notf.forEach((e) => {
  if (e.classList.contains("unread")) {
    count += 1;
  }
});
unread.innerHTML = count;
markAll.addEventListener("click", function () {
  count = 0;
  notf.forEach((e) => {
    if (e.classList.contains("unread")) {
      e.classList.remove("unread");
    }
  });
  unread.innerHTML = count;
});
