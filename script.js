import {
    easy_questions,
    medium_questions,
    hard_questions,
} from "./database.js";

// GAME ELEMENTS
let points = 0;
let dificulty = 1;
let questionNumber = 0;
// 1 - Easy
// 2 - Medium
// 3 - Hard


// HTML ELEMENTS
let easytext = document.getElementById("easy");
let mediumtext = document.getElementById("medium");
let hardtext = document.getElementById("hard");

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

option_1.addEventListener("click", () => verifyQuestion('option_1'));
option_2.addEventListener("click", () => verifyQuestion('option_2'));
option_3.addEventListener("click", () => verifyQuestion('option_3'));
option_4.addEventListener("click", () => verifyQuestion('option_4'));

function loadQuestion() {
    questionNumber++;
    let questionArray;

    changeQuestionDificulty();
    // checkRemainingQuestions();

    if (dificulty == 1) {
        questionArray = easy_questions;
    } else if (dificulty == 2) {
        questionArray = medium_questions;
    } else {
        questionArray = hard_questions;
    };

    let questionLength = questionArray.length - 1;
    // Exemplo:
    // 5 (total de questões no array escolhido) - 1 = 4
    // desse jeito iguala com a lógica das posições
    // 0 = 1º, 1 = 2º

    question_title.innerText = "Question " + questionNumber;
    question.innerText = questionArray[questionLength].question_title;

    if (questionArray[questionLength].question_image) {
        question_image.src = questionArray[questionLength].question_image;
    } else {
        question_image.src = "";
    };

    option_1p.innerText = questionArray[questionLength].option_1;
    option_2p.innerText = questionArray[questionLength].option_2;
    if (questionArray[questionLength].option_3) {
        option_3p.innerText = questionArray[questionLength].option_3;
        option_4p.innerText = questionArray[questionLength].option_4;

        option_3.style = "";
        option_4.style = "";
        option_1.style = "";
        option_2.style = "";
        return;
    };

    // CSS manipulation if there are only 2 options
    option_3.style = "display: none;";
    option_4.style = "display: none;";

    option_1.style = "border-radius: 0;height: 100%";
    option_2.style = "border-radius: 0;height: 100%";
};

loadQuestion(); // debug

function correctAnswer() {
    points++;
    console.log("Correct answer! +10 points");
};

function incorrectAnswer() {
    points--;
    console.log("Incorrect answer! -10 points");
};

function changeQuestionDificulty() {
    if ((points <= 3) ^ ((medium_questions.length == 0) || (hard_questions.length == 0))) {
        // esse medium_question.length bla bla bla foi a lógica que
        // tentei pensar para resolver o problema
        dificulty = 1;
        easytext.innerText = "> EASY <";
        mediumtext.innerText = "MEDIUM";
        hardtext.innerText = "HARD";
    } else if (points > 3 && points <= 6) {
        dificulty = 2;
        easytext.innerText = "EASY";
        mediumtext.innerText = "> MEDIUM <";
        hardtext.innerText = "HARD";
    } else {
        dificulty = 3;
        easytext.innerText = "EASY";
        mediumtext.innerText = "MEDIUM";
        hardtext.innerText = "> HARD <";
    };
};

function verifyQuestion(option) {
    let questionLength;

    switch (dificulty) {
        case 1:
            questionLength = easy_questions.length - 1;

            if (option == easy_questions[questionLength].correct_option) {
                correctAnswer();
            } else {
                incorrectAnswer();
            };

            easy_questions.pop();
            console.log(easy_questions);
            loadQuestion();

            break;
        case 2:
            questionLength = medium_questions.length - 1;

            if (option == medium_questions[questionLength].correct_option) {
                correctAnswer();
            } else {
                incorrectAnswer();
            };

            medium_questions.pop();
            console.log(medium_questions);
            loadQuestion();

            break;
        default:
            questionLength = hard_questions.length - 1;

            if (option == hard_questions[questionLength].correct_option) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }

            hard_questions.pop();
            loadQuestion();

            break;
    }
}