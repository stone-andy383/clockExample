/*
 * Javascript tutorial - creating an analog clock using javascript to update the clock arms
 */


 // Create constsants for the arms
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// Variables for the grabbing the date and time
var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

// Set the intial arm positions based on the current time
let hrPosition = (hr*360/12) + (min*(360/60)/12);
let minPosition = (min*360/60) + (sec*(360/60)/60);
let secPosition = sec*360/60;

// Use function to update the positions and make the transformation on the clock hands
function runTheClock() {
    // Only add update, if changes back to 0, css transform function will make the clock hand go in reverse
    hrPosition = hrPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;
    
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

// Run the clock function to update the time every second
var interval = setInterval(runTheClock, 1000);