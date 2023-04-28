function modoEscuro() {
    document.getElementById("body").className = "modo_escuro"
  }

  function modoBordo() {
    document.getElementById("body").className = "modo_bordo"
  }

  function modoNoite() {
    document.getElementById("body").className = "modo_noite"
  }
  // Definindo as perguntas e respostas
const questions = [
  { question: "Qual é a uva mais utilizada para a produção de vinho tinto?", answer: "Cabernet Sauvignon" },
  { question: "Qual é a uva mais utilizada para a produção de vinho branco?", answer: "Chardonnay" },
  { question: "Em que país está localizada a região vinícola de Barolo?", answer: "Itália" },
  { question: "Qual é a diferença entre um vinho seco e um vinho suave?", answer: "O teor de açúcar residual" },
  { question: "O que é um vinho espumante?", answer: "Um vinho com gás carbônico dissolvido" },
  { question: "Qual é a temperatura ideal para servir um vinho branco?", answer: "Entre 8°C e 12°C" },
  { question: "Qual é a temperatura ideal para servir um vinho tinto?", answer: "Entre 16°C e 18°C" },
  { question: "O que significa a expressão 'corpo' em relação ao vinho?", answer: "A sensação de peso e textura na boca" },
  { question: "O que é um vinho de guarda?", answer: "Um vinho que melhora com o envelhecimento" },
  { question: "Qual é o tipo de vinho produzido na região do Douro, em Portugal?", answer: "Vinho do Porto" }
];
// Variável para armazenar a pontuação do usuário
let score = 0;

// Loop para apresentar as perguntas
for (let i = 0; i < questions.length; i++) {
  // Perguntando ao usuário e armazenando a resposta
  const userAnswer = prompt(questions[i].question);

  // Verificando se a resposta está correta e atualizando a pontuação
  if (userAnswer.toLowerCase() === questions[i].answer.toLowerCase()) {
    alert("Resposta correta!");
    score++;
  } else {
    alert("Resposta incorreta.");
  }
}

// Mostrando a pontuação final ao usuário
alert(`Quiz finalizado! Sua pontuação foi ${score} de ${questions.length}.`);
