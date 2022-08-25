const API_URL = "https://api.covid19api.com/summary";
async function getApiData(url) {
  console.log(
    "We are good to go to call API using Fetch with Async and await "
  );
  var data = await fetch(url);
  var result = await data.json();
  displayData(result);
}
var i=77
getApiData(API_URL);

function displayData(serverData) {
    console.log(serverData)
    document.getElementById("gp1").innerText = "" + serverData.Countries[i].Country;
    document.getElementById("gp2").innerText = "" + serverData.Countries[i].NewConfirmed; 
    document.getElementById("gp3").innerText = "" + serverData.Countries[i].TotalConfirmed; 
    document.getElementById("gp4").innerText = "" + serverData.Countries[i].NewDeaths; 
    document.getElementById("gp5").innerText = "" + serverData.Countries[i].TotalDeaths; 
    document.getElementById("gp6").innerText = "" + serverData.Countries[i].NewRecovered; 
    document.getElementById("gp7").innerText = "" + serverData.Countries[i].TotalRecovered;
    document.getElementById("gp8").innerText = "" + serverData.Countries[i].Date;
}
