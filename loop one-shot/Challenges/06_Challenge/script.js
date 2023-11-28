const allBtns = document.querySelectorAll("button"); //NodeList
// console.log(allBtns);

for (const elem of allBtns) {
  elem.addEventListener("click", function () {
    elem.style.backgroundColor = "green";
    elem.textContent = "Clicked!!";
  });
}
