let score = 0;

function detectWaste(){

let wastes = ["Plastic Waste", "Metal Waste", "Organic Waste", "Paper Waste"];

let randomWaste = wastes[Math.floor(Math.random()*wastes.length)];

document.getElementById("result").innerText = "Detected: " + randomWaste;

score = score + 10;

document.getElementById("score").innerText = score;

}
