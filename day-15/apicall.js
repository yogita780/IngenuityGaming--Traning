// XHR
//fetch()
// Third party package(Axios)

const API_URL ="https://jsonplaceholder.typicode.com/users";
function getApiData(url)
{
    console.log("we wre good to call API XHR");

    return new Promise((resolve,reject) =>{
        //create an instance of XHR

        var request = new XMLHttpRequest();
        request.open("GET", url);
        request.send();

        request.onload =()=> {
            console.log(request);
            if(request.status ===  200){
                resolve(request.response);
            }
            else{
                reject("data not found");
            }


        };
    });
}
getApiData(API_URL)
.then((val) => {console.log(JSON.parse(val));
    displayData(JSON.parse(val))
})
.catch((err) => console.log("Error" + err));


function displayData(serveData){
    // console.log(serveData);


    for ( var user of serveData){
let newtr = document.createElement("tr");

let newtd1 = document.createElement("td");
let newtd2 = document.createElement("td");
let newtd3 = document.createElement("td");
let newtd4 = document.createElement("td");

newtd1.innerText = "" +user.id;
newtd1.innerText = "" +user.Name;
newtd1.innerText = "" +user.Email;
newtd1.innerText = "" +user.phone;

newtr.appendChild(newtd1);
newtr.appendChild(newtd2);
newtr.appendChild(newtd3);
newtr.appendChild(newtd4);


document.getElementById("myTable").appendChild(newtr);


    }
}
