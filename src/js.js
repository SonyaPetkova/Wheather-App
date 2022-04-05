function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}
function displayTemp(response) {
  console.log(response.data);
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = Math.round(response.data.main.temp);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let dataElement = document.querySelector("#date");
  dataElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "34a4206d301517fba52add27cb8eade5";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Sofia&appid=${apiKey}&units=metric`;

console.log(apiUrl);

axios.get(apiUrl).then(displayTemp);
