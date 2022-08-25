var canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.fillStyle = "red";

ctx.fillRect(50,50,150,100);
ctx.strokeStyle = "blue";
ctx.strokeRect(250,50,150,100);
