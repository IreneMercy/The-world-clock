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

  //london

  let london = document.querySelector("#london");
  if (london) {
    let londonDateElement = london.querySelector(".date");
    let londonTimeElement = london.querySelector(".time");
    let londonTime = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonTime.format("dddd Do YYYY");
    londonTimeElement.innerHTML = `${londonTime.format(
      "h:mm:ss"
    )} <small>${londonTime.format("A")}</small>`;
  }

  //sydney
  let sydney = document.querySelector("#sydney");
  if (sydney) {
    let sydneyDateElement = sydney.querySelector(".date");
    let sydneyTimeElement = sydney.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyTime.format("dddd Do YYYY");
    sydneyTimeElement.innerHTML = `${sydneyTime.format(
      "h:mm:ss"
    )} <small>${sydneyTime.format("A")}</small>`;
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
    <br>
    <a href="index.html">Back to Cities</a>
  `;
}
updateTime();
setInterval(updateTime, 1000);
let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
