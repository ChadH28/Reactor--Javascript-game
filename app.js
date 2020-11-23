// to measure the time it takes for a user to click
var start = new Date().getTime(); // declaring variable called start to get the current time

// to measure the time it takes for a shape to appear
function shapeAppear() {
    var top = Math.random() * 400;
    var left = Math.random() * 1000;
    var width = (Math.random() * 300) + 25;

    if (Math.random() > 0.5) {
        document.getElementById('shape').style.borderRadius = '50%'
    } else {
        document.getElementById('shape').style.borderRadius = '0%'
    }
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.display = "block";
    document.getElementById("shape").style.backgroundColor = RandomColor()
    start = new Date().getTime();
}
// creating a delay
function afterDelay() {
    setTimeout(shapeAppear, Math.random() * 1000);
}

afterDelay()

document.getElementById("shape").onclick = function () {
    document.getElementById("shape").style.display = "none";
    document.getElementById("container").style.backgroundColor = RandomColor() ;
    var end = new Date().getTime(); // declaring variable called end to get that instant in time to measure the difference between the two times
    var timeTaken = (end - start) / 1000; // finding the difference || dividing by 1000 to get time in seconds (its currently in milliseconds)
    timeTaken = Math.round(timeTaken * 100) / 100; // rounding off to 2 decimal places
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";

    afterDelay();
};

// getting a random color
function RandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

