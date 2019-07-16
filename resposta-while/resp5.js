//Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação. 
var a = parseInt(prompt('Informe a População A'));
var b = parseInt(prompt('Informe a População B'));

var taxaA = parseFloat(prompt('Informa a Taxa de A'));
var taxaB = parseFloat(prompt('Informa a Taxa de B'));
var tA = taxaA/100;
var tB = taxaB/100;

var ano = 1

while (a <= b) {
    a += a * taxaA;
    b += b * taxaB;
    if (a <= b) {
        ano += 1 ;
    }
}
alert('População A : ' + a + '\n'
    + 'População B: ' + b + '\n'
    + 'Quantidade de Anos: ' + ano
 )