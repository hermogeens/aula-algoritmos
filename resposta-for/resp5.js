//Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação. 
var a = parseInt(prompt('Informe a População A'));
var b = parseInt(prompt('Informe a População B'));

const taxaA = parseFloat(prompt('Informa a Taxa de A'));
const taxaB = parseFloat(prompt('Informa a Taxa de B'));
var tA = taxaA/100;
var tB = taxaB/100;

var ano = 0;

for (var i = 1; i < 100; i++) {
    a += a * tA;
    b += b * tB;
    if (a >= b) {
        ano = i;
        break;
    }
}
alert('População A : ' + a + '\n'
    + 'População B: ' + b + '\n'
    + 'Quantidade de Anos: ' + ano
 )