let simbolo = '';
let valorAtual = 0;
let proxValor = 0;

function addValor(valor) {

    const paineltexto = window.document.getElementById('texto')
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

    paineltexto.textContent = novoValor
}

function calcular () {
    const paineltexto = window.document.getElementById('texto')
    let novoValor = 0;

    if (simbolo === '÷') {

        novoValor = dividir(valorAtual, proxValor)

    } else if(simbolo === '+') {

        novoValor = somar(valorAtual, proxValor)

    }else if (simbolo === 'x') {
        novoValor = multiplicar(valorAtual, proxValor)
    }else if (simbolo === '-') {
        novoValor = subtrair(valorAtual, proxValor)
    }

    paineltexto.textContent = novoValor
    valorAtual = novoValor 

}

function addSimbolo (novoSimbolo) {
    const paineltexto = window.document.getElementById('texto')
    const textoAtual = paineltexto.textContent
    const novoTexto = String(textoAtual) + novoSimbolo

    if (!simbolo) {
        simbolo = novoSimbolo
        paineltexto.textContent = novoTexto
    }
}

function dividir(x, y) {
    return Number(x) / Number(y)
} 

function resetar(C) {
    simbolo = '';
    valorAtual = 0;
    const paineltexto = window.document.getElementById('texto');
    paineltexto.textContent = 0;
    proxValor = 0;
}

function somar(x, y) {
    return Number(x) + Number(y)
}
function multiplicar(x, y) {
    return Number(x) * Number(y)
}
function subtrair(x, y) {
    return Number(x) - Number(y)
}