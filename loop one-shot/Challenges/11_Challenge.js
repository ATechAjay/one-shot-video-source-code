const size = 4;

// Upper part of the diamond pattern
for (let i = 1; i <= size; i++) {
  let spaces = "";
  let stars = "";

  for (let j = 1; j <= size - i; j++) {
    spaces += " ";
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    stars += "*";
  }

  console.log(spaces + stars);
}

// Lower part of the diamond pattern
for (let i = size - 1; i >= 1; i--) {
  let spaces = "";
  let stars = "";

  for (let j = 1; j <= size - i; j++) {
    spaces += " ";
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    stars += "*";
  }

  console.log(spaces + stars);
}
