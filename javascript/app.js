//Nairobi
function updateNairobi(){
    let nairobi = document.querySelector("#nairobi");
    let nairobiDateElement = nairobi.querySelector(".date");
    let nairobiTimeElement = nairobi.querySelector(".time");
    let nairobiTime = moment().tz("Africa/Nairobi");
    nairobiDateElement.innerHTML = nairobiTime.format("dddd Do YYYY");
    nairobiTimeElement.innerHTML = `${nairobiTime.format(
      "h:mm:ss"
    )} <small>${nairobiTime.format("A")}</small>`;
}
setInterval(updateNairobi, 1000)

//Kigali

function updateKigali(){
    let kigali = document.querySelector("#kigali");
    let kigaliDateElement = kigali.querySelector(".date");
    let kigaliTimeElement = kigali.querySelector(".time");
    let kigaliTime = moment().tz("Africa/Kigali");
    kigaliDateElement.innerHTML = kigaliTime.format("dddd Do YYYY");
    kigaliTimeElement.innerHTML = `${kigaliTime.format(
      "h:mm:ss"
    )} <small>${kigaliTime.format("A")}</small>`;
}
setInterval(updateKigali, 1000)

//Lagos
function updateLagos(){
    let lagos = document.querySelector("#lagos");
    let lagosDateElement = lagos.querySelector(".date");
    let lagosTimeElement = lagos.querySelector(".time");
    let lagosTime = moment().tz("Africa/Lagos");
    lagosDateElement.innerHTML = lagosTime.format("dddd Do YYYY");
    lagosTimeElement.innerHTML = `${lagosTime.format(
      "h:mm:ss"
    )} <small>${lagosTime.format("A")}</small>`;
}
setInterval(updateLagos, 1000)
