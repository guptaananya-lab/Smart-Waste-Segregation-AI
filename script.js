let score = 0;

function detectWaste(){

let wasteTypes = [
"Plastic Waste",
"Metal Waste",
"Organic Waste",
"Paper Waste"
];

let randomWaste = wasteTypes[Math.floor(Math.random()*wasteTypes.length)];

document.getElementById("result").innerText = randomWaste;

score += 10;

document.getElementById("score").innerText = score;

}
