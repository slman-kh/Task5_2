fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((d) => {
    const flagsDropdown = document.getElementById("flagsDropdown");

    d.forEach((c) => {
      const flag = c.flags.png;
      const cCode = c.cca2;
      const Item = document.createElement("li");
      Item.classList.add("dropdown-item");
      Item.innerHTML = `<img src="${flag}" alt="${c.name.common}" class="flag"> ${cCode}`;
      flagsDropdown.appendChild(Item);
    });
  });
var select_Option = document.getElementById("dropdownMenuButton").value;
document.getElementById("flagsDropdown").innerText = select_Option;

fetch("https://dummyjson.com/products")
  .then(function (result) {
    return result.json();
  })
  .then(function (result) {
    console.log(result);
    display(result);
  });
const card = document.querySelector(".products");
function display(result) {
  for (let index = 0; index < 5; index++) {
    const element = result[index];
  }
}
