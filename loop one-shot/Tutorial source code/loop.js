let a = 8;
console.log(a++); // 8
console.log(a); // 9
console.log(++a); // 10
console.log(a++); // 10
console.log(a); //11

console.log(a--); // 8
console.log(a); // 7
console.log(--a); // 6
console.log(a); // 6
console.log(a--); //6
console.log(a); //5

console.log("*");

// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18
// 2 x 10 = 20

let i = 1;
while (i <= 10) {
  console.log(`2 x ${i} = ${2 * i}`);
  i++;
}

// ------------
// Challenge 🎯
// ------------
// 2 x 10 = 20
// 2 x 9 = 18
// 2 x 8 = 16
// 2 x 7 = 14
// 2 x 6 = 12
// 2 x 5 = 10
// 2 x 4 = 8
// 2 x 3 = 6
// 2 x 2 = 4
// 2 x 1 = 2

let i = 1;
do {
  console.log(`2 x ${i} = ${2 * i}`);
  i++;
} while (i <= 10);

// ------------
// Challenge 🎯
// ------------
// 2 x 10 = 20
// 2 x 9 = 18
// 2 x 8 = 16
// 2 x 7 = 14
// 2 x 6 = 12
// 2 x 5 = 10
// 2 x 4 = 8
// 2 x 3 = 6
// 2 x 2 = 4
// 2 x 1 = 2

let i = 1;
for (let i = 1; i <= 20; i++) {
  i % 2 === 0 ? console.log(i) : null;
}

// ------------
// Challenge: 3 🎯
// ------------
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19

const object = {
  firstName: "Ajay",
  lastName: "Yadav",
  fullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(object.firstName);
console.log(object.lastName);
console.log(object.fullName());
console.log(typeof object.fullName);
for (const key in object) {
  console.log(key);
  object[key];
  console.log(object[key]);
  console.log(`${key}: ${object[key]}`);
  if (typeof object[key] === "function") {
    console.log(object[key]());
  } else {
    console.log(object[key]);
  }
  typeof object[key] === "function"
    ? console.log(object[key]())
    : console.log(object[key]);
}
// firstName: Ajay
// lastName: Yadav
// fullName: Ajay Yadav

// ------------
// Challenge: 4 🎯
// ------------
// const userData = [
//   { id: 111, user: "Ajay", address: "Patna" },
//   { id: 112, user: "DK", address: "Surat" },
//   { id: 113, user: "RK", address: "Siwan" },
// ];

const arr = [10, 20, 30, 40, 50];

for (const item of arr) {
  console.log(item);
}

// ------------
// Challenge: 5 🎯
// ------------
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// OUTPUT:
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18
// 2 x 10 = 20

for (let i = 1; i <= 5; ) {
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    // row = row + '* '
    row += "* ";
  }
  console.log(row);
}

for (let roti = 1; roti <= 10; roti++) {
  if (roti < 4) {
    console.log("Want more roti than", roti);
  } else if (roti === 4) {
    console.log(`${roti} rotis are enough for me :)`);
    break;
  } else console.log(roti);
}
console.log("first");

for (let roti = 1; roti <= 10; roti++) {
  if (roti === 4) {
    console.log("I'll take only:", roti);
    continue;
  }
  console.log(roti);
}

const star = "* ".repeat(5);
console.log(star);

let str1 = "Aj";
let str2 = "ay";

console.log(str1 + str2);

const size = 4;

for (let i = 1; i <= size; i++) {
  let two = "2 ".repeat(i);
  console.log(two);
}

const size = 4;

for (let i = 1; i <= size; i++) {
  let spaces = " ".repeat(size - i);
  let stars = "*".repeat(i);

  console.log(spaces + stars);
}

const size = 4;

for (let i = 1; i <= size; i++) {
  let space = " ".repeat(size - i);
  let star = "*".repeat(2 * i - 1);
  console.log(space + star);
}

for (let i = size - 1; i >= 1; i--) {
  let space = " ".repeat(size - i);
  let star = "*".repeat(2 * i - 1);
  console.log(space + star);
}
