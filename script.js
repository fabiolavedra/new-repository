var cities = document.querySelectorAll(".city");
console.log("city is:", cities);

cities.forEach((city) => {
  city.addEventListener("click", () => {
    alert("Loading weather report for " + city.innerText);
  });
});

function accept() {
  var cookiesTable = document.querySelector(".cookies");
  console.log("cookie table:", cookiesTable);
  cookiesTable.remove();
}

function changeTemp(element) {
  const unit = element.value;
  const tempValues = document.querySelectorAll(".temp");

  tempValues.forEach((value) => {
    const tempdegrees = parseInt(value.innerText);
    if (unit == "f") {
      const farenheit = Math.round((tempdegrees * 9) / 5 + 32);
      value.innerText = farenheit + "°F";
    } else if (unit == "c") {
      const celsius = Math.round(((tempdegrees - 32) * 5) / 9);
      value.innerText = celsius + "°";
    }
  });
}
