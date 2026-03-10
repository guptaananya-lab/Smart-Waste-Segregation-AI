function detectWaste(){

const input = document.getElementById("imageUpload");

if(input.files.length === 0){
document.getElementById("result").innerHTML="Please upload image";
return;
}

const types = ["Plastic Waste","Organic Waste","Metal Waste","Paper Waste"];

const random = types[Math.floor(Math.random()*types.length)];

document.getElementById("result").innerHTML =
"Detected Waste: " + random;
}
