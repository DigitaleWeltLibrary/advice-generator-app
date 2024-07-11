const url = "https://api.adviceslip.com/advice";
const advice = document.querySelector("#advice");
const adviceid = document.querySelector("#adviceid");
const btn = document.querySelector("#btn");

window.addEventListener("load", () => fetchdata());
btn.addEventListener("click", () => fetchdata());

async function fetchdata() {
  var apidata = await fetch(url);
  var data = await apidata.json();

  adviceid.innerHTML = `Advice #${data.slip.id}`;
  advice.innerHTML = data.slip.advice;

}
