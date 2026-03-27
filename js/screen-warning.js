let screen_warning = document.getElementById("screen_warning").style;
let phone_icon = document.querySelector("#screen_warning i");

let menu = document.getElementById("menu").style;
let about = document.getElementById("about").style;
let play_area = document.getElementById("play_area").style;

setInterval(checkOrientation, 1000);
function checkOrientation() {
    switch (screen.orientation.type) {
        case "portrait-secondary":
        case "portrait-primary":
            screen_warning.display = "flex";
            phone_icon.style = "animation-play-state: running;";
            
            break;
        default:
            screen_warning.display = "none";
            phone_icon.style = "animation-play-state: paused;";

            break;
    }
}