//Solicita ao usuario para digitar um valor
let numero = parseFloat(prompt('Digite um valor positivo ou negativo'));
//Verifica se o valor é positivo ou negativo
if (numero < 0) {
    alert('Negativo');
} else if (numero > 0) {
    alert('Positivo');
} else {
   alert('Valor inválido')
}