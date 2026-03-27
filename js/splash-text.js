const splashes = [
    "Olá!!",
    "O quiz mais difícil do mundo",
    "Alberlan, o erro NÃO estava na linha 137",
    "melhor turma de engenharia de software",
    "salvee 😁",
    "Boa tarde (ou bom dia, ou boa noite)!",
    "Veja meu perfil do GitHub!",
    "[Insira um texto legal]",
    "Você sabia que esse textinho amarelo é aleatório?",
    "UNIFAN melhor faculdade! (quero desconto na mensalidade agora)",
    "javascript é bom demaise",
];

let splash_text = document.getElementById("splash_text");
let splash_style = splash_text.style;

let minimum = 0;
let maximum = splashes.length - 1;

let random_number = Math.floor(Math.random() * (maximum - minimum) + minimum);
splash_text.innerText = splashes[random_number];

// from the about section
let close_button = document.getElementById("close_button");

close_button.addEventListener("click", () => {
    random_number = Math.floor(Math.random() * (maximum - minimum) + minimum);
    splash_text.innerText = splashes[random_number];
});

let count = 0;
let runState = 0;

setInterval(counter, 1000);
function counter() {
    count++;

    if (splash_style.animationPlayState == "running") {
        // anim is running
        runState = 1;
    } else {
        // anim is paused
        runState = 0;
    };

    if (count % 5 == 0) {
        switch (runState) {
            case 1:
                splash_style.animationPlayState = "paused";
                break;
            case 0:
                splash_style.animationPlayState = "running";
                break;
        };
    };
};