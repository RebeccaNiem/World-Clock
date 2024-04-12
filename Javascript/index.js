function updateTime() {
  //Auckland
  let AucklandElement = document.querySelector("#Auckland");
  let AucklandDateElement = AucklandElement.querySelector(".date");
  let AucklandTimeElement = AucklandElement.querySelector(".time");

  let AucklandTime = moment().tz("NZ");

  AucklandDateElement.innerHTML = AucklandTime.format("MMM Do YYYY");
  AucklandTimeElement.innerHTML = AucklandTime.format(
    "h:mm:ss[<small>] A [</small>]"
  );

  //Paris
  let ParisElement = document.querySelector("#Paris");
  let ParisDateElement = ParisElement.querySelector(".date");
  let ParisTimeElement = ParisElement.querySelector(".time");

  let ParisTime = moment().tz("Europe/Paris");

  ParisDateElement.innerHTML = ParisTime.format("MMM Do YYYY");
  ParisTimeElement.innerHTML = ParisTime.format(
    "h:mm:ss[<small>] A [</small>]"
  );

  //Sweden
  let StockholmElement = document.querySelector("#Stockholm");
  let StockholmDateElement = StockholmElement.querySelector(".date");
  let StockholmTimeElement = StockholmElement.querySelector(".time");

  let StockholmTime = moment().tz("Europe/Stockholm");

  StockholmDateElement.innerHTML = StockholmTime.format("MMM Do YYYY");
  StockholmTimeElement.innerHTML = StockholmTime.format(
    "h:mm:ss[<small>] A [</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
