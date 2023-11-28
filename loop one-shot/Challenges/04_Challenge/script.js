const userData = [
  { id: 111, user: "Ajay", userAddress: "Patna" },
  { id: 112, user: "DK", userAddress: "Surat" },
  { id: 113, user: "RK", userAddress: "Siwan" },
];

let data = "";
for (const key in userData) {
  data += ` <tr>
                  <td>${userData[key].id}</td>
                  <td>${userData[key].user}</td>
                  <td>${userData[key].userAddress}</td>
                </tr>`;
}

document.querySelector(".dynamic").insertAdjacentHTML("beforebegin", data);
