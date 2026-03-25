const splashes = [
    "Olá!!",
    "O quiz mais difícil do mundo",
    "Alberlan, o erro NÃO estava na linha 137",
    "melhor turma de engenharia de software",
    "😁",
    "Boa tarde (ou bom dia, ou boa noite)!",
    "Veja meu perfil do GitHub!",
    "[Insira um texto legal]",
    "Você sabia que esse textinho amarelo é aleatório?",
    "UNIFAN melhor faculdade! (quero desconto na mensalidade agora)",
];

let splash_text = document.getElementById("splash_text");

let minimum = 0;
let maximum = splashes.length - 1;

let random_number = Math.floor(Math.random() * (maximum - minimum) + minimum);

splash_text.innerText = splashes[random_number];