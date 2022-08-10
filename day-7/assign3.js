var info={
    name: "Yogita Balyan",
    age:21,
    Address:{City:"Mathura",State:"U.P",pincode:454532},
    Hobbies:["Listening Music","Cooking","Travelling"],
    details:function(){
        return this.name + " from " + this.Address.City;
    },
};
document.write(info.details());
document.body.style.backgroundColor = "skyblue";
document.body.style.color = "red";

document.body.style.fontSize = "100px";
document.body.style.padding ="70px 100px";

