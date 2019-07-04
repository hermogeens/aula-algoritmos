//Recebi os Valores para verificação
let num1 = parseFloat(prompt('Digite o 1º Número'));
let num2 = parseFloat(prompt('Digite o 2º Número'));
let num3 = parseFloat(prompt('Digite o 3º Número'));
// Verifica qual dos valores é maior
if (num1 > num2 && num1 > num3) {
    alert('O maior número é: ' + num1);
} else if (num2 > num1 && num2 > num3) {
    alert('O maior número é: ' + num2);
}else if (num3 > num1 && num3 > num2) {
    alert('O maior número é: ' + num3)
} else {
    alert('Valor invalido')
}