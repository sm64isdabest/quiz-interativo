import {
    easy_questions,
    medium_questions,
    hard_questions,
} from "./database.js";

// GAME ELEMENTS
let points = 0;
let dificulty = 1;
let gameIsRunning = 1;
let questionNumber = 1;
// 1 - Easy
// 2 - Medium
// 3 - Hard

// HTML ELEMENTS
let question_title = document.getElementById("question_title");
let question = document.getElementById("question");

let question_image = document.getElementById("question_image");

// op1
let option_1 = document.getElementById("option_1");
let option_1p = option_1.querySelector('p');
// op2
let option_2 = document.getElementById("option_2");
let option_2p = option_2.querySelector('p');
// op 3
let option_3 = document.getElementById("option_3");
let option_3p = option_3.querySelector('p');
// op 4
let option_4 = document.getElementById("option_4");
let option_4p = option_4.querySelector('p');


function loadQuestion() {
    let questionArray;

    if (dificulty == 1) {
        questionArray = easy_questions;
    } else if (dificulty == 2) {
        questionArray = medium_questions;
    } else {
        questionArray = hard_questions;
    }

    question_title.innerText = "Question " + questionNumber;
    question.innerText = questionArray[questionNumber].question_title;

    if (questionArray[questionNumber].question_image) {
        question_image.src = questionArray[questionNumber].question_image;
    } else {
        question_image.src = "";
    }

    option_1p.innerText = questionArray[questionNumber].option_1;
    option_2p.innerText = questionArray[questionNumber].option_2;
    if (questionArray[questionNumber].option_3) {
        option_3p.innerText = questionArray[questionNumber].option_3;
        option_4p.innerText = questionArray[questionNumber].option_4;
        return;
    }
}

loadQuestion() // debug

function correctAnswer() {
    points++;
}

function incorrectAnswer() {
    points--;
}

function changeQuestionDificulty() {
    if (points <= 3) {
        dificulty = 1;
    } else if (points > 3 && points <= 6) {
        dificulty = 2;
    } else {
        dificulty = 3;
    }
}

function verifyQuestion(option) {
    switch (dificulty) {
        case 1:
            if (option == easy_questions.correctAnswer) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }

            break;
        case 2:
            if (option == medium_questions.correctAnswer) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }

            break;
        default:
            if (option == hard_questions.correctAnswer) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }

            break;
    }
}
