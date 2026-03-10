let score = 0;

function detectWaste(){

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
