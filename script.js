let score = 0;
let detected = false;

function saveUser(){

let name = document.getElementById("username").value;

if(name===""){
alert("Please enter your name");
return;
}

localStorage.setItem("username",name);

window.location.href = "detect.html";

}

function detectWaste(){

let file = document.getElementById("imageUpload").files[0];

if(!file){
alert("Upload image first");
return;
}

if(detected){
alert("Already detected. Upload new image.");
return;
}

let wasteTypes = [
"Plastic Waste",
"Metal Waste",
"Organic Waste",
"Recyclable Waste"
];

let result = wasteTypes[Math.floor(Math.random()*wasteTypes.length)];

score += 10;

document.getElementById("result").innerText =
"Detected: " + result;

document.getElementById("score").innerText =
"Points: " + score;

detected = true;

}

function resetDetect(){
detected = false;
}
