let score = 0;

function saveUser(){

let name=document.getElementById("username").value;

if(name==""){
alert("Please enter name");
return;
}

localStorage.setItem("username",name);

window.location.href="detect.html";

}

function detectWaste(){

let file=document.getElementById("imageUpload").files[0];

if(!file){

alert("Upload image first");

return;

}

let wasteTypes=[
"Plastic Waste",
"Metal Waste",
"Organic Waste",
"Recyclable Waste"
];

let result=wasteTypes[Math.floor(Math.random()*wasteTypes.length)];

score+=10;

document.getElementById("result").innerText=
"Detected: "+result;

document.getElementById("score").innerText=
"Points: "+score;

}
