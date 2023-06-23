const ApiKey = "8fbc23ecdc161951dff46f68228aa254";

const input = document.querySelector("input");
const cityName = input.value;
const button = document.querySelector("button");

const generateReport = async () => {
  try {
    weatherReport.innerHTML = "";
    
    const urlnew = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${ApiKey}`;
    console.log(url);
    const response = await fetch(url);
    var datadisplay = await response.json();
    console.log(datadisplay);
  } catch {
    console.log(Error);
  }


};
button.addEventListener("click", generateReport);
