
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

let sequenciaGerada = localStorage.getItem('sequenciaGerada');

btnGerador.addEventListener("click", () => {
  if (!sequenciaGerada) {
    // Sequências desejadas
    const sequencias = ["1586", "5484", "2562", "2547"];

    // Sortear aleatoriamente uma sequência do array
    const indiceSorteado = Math.floor(Math.random() * sequencias.length);
    const sequenciaSorteada = sequencias[indiceSorteado];

    telaGerador.innerHTML = sequenciaSorteada;
    sequenciaGerada = true;

    btnGerador.disabled = true; // Desabilita o botão após a geração da sequência

    // Salva no localStorage que a sequência foi gerada
    localStorage.setItem('sequenciaGerada', true);
  }
});


// =============================================

// CalculaDEsconto

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

// ===========================================

// mostra na tela o desconto obtido

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

// =========================================

// cronometro de expiração da promoção

// Função para atualizar o cronômetro
function atualizarCronometro() {
  const dataAtual = new Date();
  const dataExpiracao = new Date(dataAtual.getTime() + 25 * 24 * 60 * 60 * 1000); // 25 dias em milissegundos

  const diff = dataExpiracao - dataAtual;

  if (diff <= 0) {
    document.getElementById("tempoRestante").style.color = "red";
    document.getElementById("tempoRestante").textContent = "Expirado!";
    return; // Se expirou, não atualiza mais o cronômetro
  }

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diff % (1000 * 60)) / 1000);

  const tempoRestante = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  document.getElementById("tempoRestante").textContent = tempoRestante;

  setTimeout(atualizarCronometro, 1000); // Atualiza o cronômetro a cada segundo
}

// Inicia o cronômetro
atualizarCronometro();


// ===========================================


