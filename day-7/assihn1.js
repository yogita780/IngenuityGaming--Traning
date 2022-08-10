var sum = 0;
while(true){
    var num = parseInt(prompt('Enter the  number '));
    if(num >= 0){
         sum += num;
    }
    else{
        break;
    }
}
document.write("the sum of given numbers is"+"<br>" + sum)
document.body.style.backgroundColor = "pink";
document.body.style.color = "white";
document.body.style.textAlign = "center";
document.body.style.fontSize = "40px";
document.body.style.padding = "150px";
//document.body.style.backgroundImage = "./img2.jpg";


   

