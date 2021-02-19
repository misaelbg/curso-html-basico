let simbolo = '';
let valorAtual = 0;
let proxValor = 0;
let textoDoPainel = 0;
let tamanhoDoTexto = 65;
let totalCaracteres = 0;

function painel() {
    return window.document.getElementById('texto')
}

function alterarValorPainel(novoValor) {
    const painelTexto = painel()
    reduzirFonte()
    painelTexto.textContent = novoValor
    textoDoPainel = novoValor
    
}

function addValor(valor) {
    let novoValor = 0;
    
    if(valorAtual) {

        if (simbolo){
            if(proxValor) {
                proxValor = String(proxValor) + String(valor)
            }else {
                proxValor = valor
            }
            novoValor = String(valorAtual) + simbolo + String(proxValor) 
        }else {

            valorAtual = String(valorAtual, valor) + String(valor)
            novoValor = valorAtual 
        } 
        
    }else {

        valorAtual = valor
        novoValor = valorAtual 
    }

    alterarValorPainel(novoValor)
}

function calcular() {
    let novoValor = 0;

    if(simbolo === '÷') {
        novoValor = dividir(valorAtual, proxValor)

    }else if (simbolo === '+') {
        novoValor = somar(valorAtual, proxValor)

    }else if (simbolo === 'x') {
        novoValor = multiplicar(valorAtual, proxValor)

    }else if (simbolo === '-') {
        novoValor = subtrair(valorAtual, proxValor)
    }else if (simbolo === '%') {
        novoValor = porcentagem(valorAtual, proxValor)
    }

    alterarValorPainel(novoValor)
    simbolo = ''
    proxValor = 0;
    valorAtual = novoValor;
}


function addSimbolo(novoSimbolo) {
    const novoTexto = String(textoDoPainel) + novoSimbolo

    if(!simbolo) {
        simbolo = novoSimbolo
        alterarValorPainel(novoTexto)
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
    alterarValorPainel(0)
    proxValor = 0;
}

function subtrair(x, y) {
    return Number(x) - Number(y);
}

function multiplicar(x, y) {
    return Number(x) * Number(y);
}

function porcentagem(x, y) {
    return (100 * Number(x)) / Number(y);
}

function removerUltimoValor() {
    const textoPainel = painel()

    if (textoDoPainel.length < 2) {
        resetar()
    } else {
        textoDoPainel = textoDoPainel.slice(0, -1)
        textoPainel.textContent = textoDoPainel
    }

}
function reduzirFonte() {
    totalCaracteres += 1

    if (textoDoPainel.length >= 6) {
        tamanhoDoTexto = tamanhoDoTexto - 7;
        const textoPainel = painel()
        textoPainel.style = `font-size: ${tamanhoDoTexto}px;`
    }
}

