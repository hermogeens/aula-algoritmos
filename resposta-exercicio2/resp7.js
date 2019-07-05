//Valores para verificação
let num1 = parseFloat(prompt('Digite o 1º Número'));
let maior = num1;
let menor = num1;

let num2 = parseFloat(prompt('Digite o 2º Número'));
if (num2 > maior) {
    maior = num2;
} else {
    menor = num2;
}

let num3 = parseFloat(prompt('Digite o 3º Número'));
if (num3 > maior) {
    maior = num3;
} else if (num3 < menor) {
    menor = num3;
}
alert('Maior:' + maior + '\nMenor: ' + menor);