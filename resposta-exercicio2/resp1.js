//Solicita ao usuario para digitar 2 numeros
let num1 = parseInt(prompt('Digite o 1° Número'));
let num2 = parseInt(prompt('Digite o 2° Número'));
//Verifica qual numero é maior
if (num1 > num2) {
    alert('Maior Número: ' + num1);
} else if (num1 < num2) {
    alert('Maior Número: ' + num2);
} else {
   alert('Repita a operação')
}
//não compativel com o switch devido a verificação de maior ou menor.
