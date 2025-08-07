const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O  que voce vai fazer ao terminar a escola?",
        alternativas: [
            {
                texto: "Ainda não sei",
                afirmacao: "Não tenho ideia do que fazer"
            },
            {
                texto: "já tenho certeza do que fazer",
                afirmacao: "Eu já sei o que vou fazer"
            }
        ]
    },
    {
        enunciado: "E se você pudesse sair do pais, voce iria?",
        alternativas: [
            {
                texto: "Não, eu amo o Brasil",
                afirmacao: "ainda sim, nunca sairia do meu Brasil"
            },
            {
                texto: "Sim, eu quero sair o quanto antes,",
                afirmacao: "ainda sim, meu principal objetivo é sair do pais"
            }
        ]
    },
    {
        enunciado: "Você fala ingles?",
        alternativas: [
            {
                texto: "sim, sou bilingue",
                afirmacao: "Pelo menos eu já falo ingles"
            },
            {
                texto: "não tenho ideia de como se fala",
                afirmacao: "e também eu não sei falar inglês"
            }
        ]
    },
    {
        enunciado: "voce acredita no sentido da vida?",
        alternativas: [
            {
                texto: "não, isso é piada",
                afirmacao: "e também eu acredito que nos estamos aqui apenas para estar, sem nenhum propósto"
            },
            {
                texto: "Eu acredito sim, estamos por uma razão maior",
                afirmacao: "e também eu acredito que nos estamos aqui por uma razão maior que nossa existencia"
            }
        ]
    },
    {
        enunciado: "Você tem medo do seu futuro?",
        alternativas: [
            {
                texto: "sim, sinto muita ansiedade",
                afirmacao: "e por conta disso, sinto muita ansiedade em relação ao meu futuro"
            },
            {
                texto: "Não, acredito que tudo tem seu tempo",
                afirmacao: " e por conta disso, sinto muita tranquilidade em relação ao meu futuro"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();