//Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. 
var nota = parseFloat(prompt('Digite um valor entre 0 a 10')); //Recebe a nota pela primeira avaliação.
var i = 0; // variavel de inicialização.
// Iniciar o laço.
for (i;isNaN(nota) || i <10 || nota < 0 || nota > 10;i++) {
    var nota = parseFloat(prompt('Valor invalido! Digite um valor entre 0 a 10'));
}
alert('O valor entre 0 a 10 digitado é ' + nota);

