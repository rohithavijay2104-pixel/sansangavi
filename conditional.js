//if else condition
// if else condition

var light = "green"


if (light == "green") {
    console.log("Go!");
}
else if (light == "Yellow") {
    console.log("Wait");
}
else if (light == "Red") {
    console.log("stop");
}
else {
    console.log("Invalid light color");
}
console.log("outside If");


//switch condition
var signal = "green"
switch(signal){
case "green":
    console.log("go!");
    break;

    case "yellow":
    console.log("wait!");
    break;

    case "red":
        console.log("stop!");
        break;
        default:
            console.log("invalid signal color")
}
