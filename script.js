let score = 0;
let detected = false;

function detectWaste(){

let file = document.getElementById("imageUpload").files[0];

if(!file){
alert("Please upload an image first");
return;
}

if(detected){
alert("Image already detected. Upload a new image.");
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
