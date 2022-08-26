const API_URL = "https://api.covid19api.com/summary";
async function getApiData(url) {
  console.log(
    "We are good to go to call API using Fetch with Async and await "
  );
//   async function getApiData(API_URL);
//   console.log("3e");
  var data = await fetch(url);
//   console.log("3e")
  var result = await data.json();
//   fun(result);
// }
displayData(result);

// function fun(r){
//   var select1=document.getElementById("mySelect");
//   for(var i=0;i<195;i++){
//     var option=document.createElement("option");
//     option.innerText=r.Countries[i].Country;
//     select1.appendChild(option);
//   }
}
var i=77;

getApiData(API_URL);
// function myFunction(){
//   var x = document.getElementById("mySelect").selectedIndex;

  // fetch(API_URL.then(val) => {return val.json();}).then((res)=>displayData(res.Countries[x])).catch((err)=>console.log)
// }




function displayData(serverData) {
    console.log(serverData)
    document.getElementById("gp1").innerHTML= "Country Name :"+"" + serverData.Countries[i].Country;
    document.getElementById("gp2").innerHTML= "New Confirmed Cases :"+"" + serverData.Countries[i].NewConfirmed; 
    document.getElementById("gp3").innerHTML= "Total Confirmed Cases :"+"" + serverData.Countries[i].TotalConfirmed; 
    document.getElementById("gp4").innerHTML= "Today Deaths :"+"" + serverData.Countries[i].NewDeaths; 
    document.getElementById("gp5").innerHTML= "Total Deaths :"+"" + serverData.Countries[i].TotalDeaths; 
    document.getElementById("gp6").innerHTML= "Today Recovered  :"+"" + serverData.Countries[i].NewRecovered; 
    document.getElementById("gp7").innerHTML= "Total Recovered :"+"" + serverData.Countries[i].TotalRecovered;
    document.getElementById("gp8").innerHTML= "Today Date  :"+"" + serverData.Countries[i].Date;
}
