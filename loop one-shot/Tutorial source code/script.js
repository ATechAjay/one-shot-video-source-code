const allBtns = document.querySelectorAll("button"); //NodeList
// console.log(allBtns);

for (let i = 0; i < allBtns.length; i++) {
  allBtns[i].addEventListener("click", function () {
    allBtns[i].style.backgroundColor = "green";
    allBtns[i].textContent = "Clicked!!";
  });
}
// ------------
// Challenge: 6 🎯
// ------------
// for...of
