function updateTime() {
  //Nairobi
  let nairobi = document.querySelector("#nairobi");
  if (nairobi) {
    let nairobiDateElement = nairobi.querySelector(".date");
    let nairobiTimeElement = nairobi.querySelector(".time");
    let nairobiTime = moment().tz("Africa/Nairobi");
    nairobiDateElement.innerHTML = nairobiTime.format("dddd Do YYYY");
    nairobiTimeElement.innerHTML = `${nairobiTime.format(
      "h:mm:ss"
    )} <small>${nairobiTime.format("A")}</small>`;
  }

  //Kigali

  let kigali = document.querySelector("#kigali");
  if (kigali) {
    let kigaliDateElement = kigali.querySelector(".date");
    let kigaliTimeElement = kigali.querySelector(".time");
    let kigaliTime = moment().tz("Africa/Kigali");
    kigaliDateElement.innerHTML = kigaliTime.format("dddd Do YYYY");
    kigaliTimeElement.innerHTML = `${kigaliTime.format(
      "h:mm:ss"
    )} <small>${kigaliTime.format("A")}</small>`;
  }

  //Lagos
  let lagos = document.querySelector("#lagos");
  if (lagos) {
    let lagosDateElement = lagos.querySelector(".date");
    let lagosTimeElement = lagos.querySelector(".time");
    let lagosTime = moment().tz("Africa/Lagos");
    lagosDateElement.innerHTML = lagosTime.format("dddd Do YYYY");
    lagosTimeElement.innerHTML = `${lagosTime.format(
      "h:mm:ss"
    )} <small>${lagosTime.format("A")}</small>`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
    </div>
  `;
}
updateTime();
setInterval(updateTime, 1000);
let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
