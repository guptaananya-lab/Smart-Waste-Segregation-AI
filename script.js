let score = 0;

function detectWaste(){

let wasteTypes = [
"Plastic Waste",
"Metal Waste",
"Recyclable Waste",
"Organic Waste"
];

let randomWaste = wasteTypes[Math.floor(Math.random()*wasteTypes.length)];

score = score + 10;

document.getElementById("result").innerText =
"Detected: " + randomWaste;

document.getElementById("points").innerText =
"Points: " + score;
}
