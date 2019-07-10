//Solicita os valores
let valorA = parseFloat(prompt('Informe o número 1'));
let valorB = parseFloat(prompt('Informe o número 2'));
let valorC = parseFloat(prompt('Informe o número 3'));

let valor = 0;

if (valorA > valorB) {
    valor = valorA;
    valorA = valorB;
    valorB = valor;
}
if (valorB > valorC) {
    valor = valorB;
    valorB = valorC;
    valorC = valor;
}
if (valorA > valorB) {
    valor = valorA;
    valorA = valorB;
    valorB = valor;
}
alert('Ordem descrecente: ' + valorC + ' - ' + valorB + ' - ' + valorA);
//não compativel com o switch devido a verificação de maior ou menor.