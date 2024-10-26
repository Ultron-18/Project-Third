let x = true;
document.getElementById ("demo").innerHTML = x || false;

let isLearning = true;
if (isLearning) {
    console.log("keep it up!");
} else {
    console.log("pretty sure you are learning....");
}

let firstvariable;
let seconvariable = "";
let thirdvariable = 1;
let secretvariable = "Shh!";

if (firstvariable) {
    console.log("first");
} else if (firstvariable || seconvariable) {
    console.log("second");
} else if (firstvariable || thirdvariable) {
    console.log("third");
} else {
    console.log("fourth");
}

let engineIndicatorLight = "red blinking";
if (engineIndicatorLight === "green") {
    console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
    console.log("engines are preparing to start");
} else {
    console.log("engines are off");
}

let crewReady = "spaceSuitsOn && shuttleCabinReady";
if (crewReady = "spaceSuitsOn && shuttleCabinReady") {
    console.log("Crew is Ready")
} else {
  console.log("Crew Not Ready")  
} 

let computerStatusCode = 200;
if (computerStatusCode = 200) {
    console.log("please stand by. Computer is rebooting.");
} else if (computerStatusCode = 400) {
    console.log("Success! Computer Online!");
} else {
    console.log("ALERT: Computer Offline!");
}

let shuttleSpeed = 15000;
if (shuttleSpeed > 17500) {
    console.log(" ALERT: Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
    console.log("ALERT: Cannot maintain orbit!");
} else {
    console.log("Stable Speed");
}

const stdmark ={
    David   :"80",
    Vinoth  :"77",
    Divya   :"88",
    Ishitha :"95",
    Thomas  :"68",  
};



if( stdmark < 60){
    console.log("F");
}
else if(stdmark < 70){
    console.log("D");
}
else if(stdmark < 80){
    console.log("C");
}
else if(stdmark < 90){
    console.log("B");
}
else {
    console.log("A");
};