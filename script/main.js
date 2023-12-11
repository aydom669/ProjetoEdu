
// variaveis

const mainContainer = document.querySelector(".main");
const btnGerador = document.getElementById("btnGerador");
const telaGerador = document.getElementById("telaGerador");
const inputSequencia = document.querySelector('input[type="text"]');


// variaveis tela Desconto
const telaDesconto = document.querySelector(".Teladesconto");
const telaDescontoBtn = document.querySelector(".containerCorfimacao__btn");
const teladescontoText = document.getElementById('Teladesconto');

// ==================================

// ======================================

// função sorteia sequencia

btnGerador.addEventListener("click", () => {
  // Sequências desejadas
  const sequencias = ["1586", "5484", "2562", "2547"];

  // Sortear aleatoriamente uma sequência do array
  const indiceSorteado = Math.floor(Math.random() * sequencias.length);
  const sequenciaSorteada = sequencias[indiceSorteado];

  telaGerador.innerHTML = sequenciaSorteada;
});

// =============================================

function calcularDesconto(sequenciaDigitada) {
  const sequencias = ["1586", "5484", "2562", "2547"];
  const porcentagensDesconto = [5 ,10, 15, 20];
  const indexSequenciaSorteada = sequencias.indexOf(sequenciaDigitada);

  if (indexSequenciaSorteada !== -1) {
    return porcentagensDesconto[indexSequenciaSorteada];
  } else {
    return null;
  }
}

document.querySelector('.form').addEventListener('submit', function(event) {
  event.preventDefault();
  const sequenciaDigitada = inputSequencia.value;
  const desconto = calcularDesconto(sequenciaDigitada);

  if (desconto !== null) {
    mainContainer.classList.add("hidden");
    telaDesconto.classList.add("active");
    teladescontoText.textContent = `Parabéns! Você obteve um desconto de ${desconto}% na próxima compra!`;
  } else {
    alert('Sequência inválida. Por favor, insira uma sequência válida.');
  }
});


