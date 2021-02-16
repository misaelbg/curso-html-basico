let simbolo = '';
let valorAtual = 0;

function addValor(valor) {
  // armazenar o objeto do texto do painel, buscando pelo ID
  const textoPainel = window.document.getElementById('texto')
  let novoValor = 0;

  // se existe o valor atual no painel
  if (valorAtual) {

    // se existe o simbolo selecionado
    if (simbolo) {

      // se simbolo selecionado é igual a divisão
      if (simbolo === '÷') {
        // faz o calculo com base no simbolo selecionado
        novoValor = dividir(valorAtual, valor)
      // se simbolo selecionado é igual a adição
      } else if(simbolo === '+') {
        // faz o calculo com base no simbolo selecionado
        novoValor = somar(valorAtual, valor)
      }

    // do contrario, se não existir um simbolo selecionado
    } else {
      // junta o valor atual com o novo valor passado
      novoValor = String(valorAtual) + String(valor)
    }
  // se não existir um valor atual ou for igual a 0
  } else {
    // o novo valor é igual o valor que ele acabou de selecionar
    novoValor = valor
  }

  // exibe o novo valor no painel
  textoPainel.textContent = novoValor
  // armazena o novo valor na variavel valor atual para ser utilizado posteriormente
  valorAtual = novoValor
}

function addSimbolo(novoSimbolo) {
  // armazenar o objeto do texto do painel, buscando pelo ID
  const textoPainel = window.document.getElementById('texto')
  const textoAtual = textoPainel.textContent
  const novoTexto = String(textoAtual) + novoSimbolo

  if (!simbolo) {
    simbolo = novoSimbolo
    textoPainel.textContent = novoTexto
  }
}

function dividir(x, y) {
  return Number(x) / Number(y);
}

function somar(x, y) {
  return Number(x) + Number(y);
}

function resetar() {
  simbolo = '';
  valorAtual = 0;
  const textoPainel = window.document.getElementById('texto');
  textoPainel.textContent = 0;
}