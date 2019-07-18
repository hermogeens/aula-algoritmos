function calcular() {
let numero1 = document.getElementById('valor1').Value;
 if (ehNumero(numero1)){
     numero1 = parseInt(numero1);
 } else{
     let mensagem = 'Campo 1 deve ser número';
     document.getElementById('mensagem').innerHTML = mensagem;
 }

let numero2 = document.getElementById('valor2').Value;
numero2 = parseInt(numero2);

let resultado = numero1 + numero2;

document.getElementById('resultado').Value = resultado;
}

function ehNumero(numero){
    return !isNaN(numero);
}



