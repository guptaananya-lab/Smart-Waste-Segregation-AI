let score = 0;

function detectWaste(){

let result = document.getElementById("result");

let categories = ["Plastic","Metal","Paper","Organic"];

let random = categories[Math.floor(Math.random()*categories.length)];

score += 10;

result.innerHTML = "Detected Waste: " + random + " | Score: " + score;

}
