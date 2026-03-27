import { loadQuestion } from "./game.js";

// HTML div "sections"
const menu = document.getElementById("menu");
const about = document.getElementById("about");
const play_area = document.getElementById("play_area");

// HTML BUTTONS
const play_button = document.getElementById("play_button");
const about_button = document.getElementById("about_button");

// (close button found inside the about section)
const about_close = document.getElementById("close_button");

play_button.addEventListener("click", () => {
    menu.style = "display: none;";
    play_area.style = "display: flex;";

    loadQuestion();
});

about_button.addEventListener("click", () => {
    menu.style = "display: none;";
    about.style = "display: flex;";
});

about_close.addEventListener("click", () => {
    menu.style = "display: flex;";
    about.style = "display: none;";
});