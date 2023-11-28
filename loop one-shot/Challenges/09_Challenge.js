const size = 4;

for (let i = 1; i <= size; i++) {
  let spaces = "";
  let stars = "";

  let j = 1,
    k = 1;

  while (j <= size - i) {
    spaces += " ";
    j++;
  }

  while (k <= i) {
    spaces += "*";
    k++;
  }

  console.log(spaces + stars);
}
