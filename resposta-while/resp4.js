/*Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% 
e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e
 escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento. */

var a = 80000;
var b = 200000;

const taxaA = 3 / 100;
const taxaB = 1.5 / 100;

var ano = 0;

for (var i = 1; i < 100; i++) {
    a += a * taxaA;
    b += b * taxaB;
    if (a >= b) {
        ano = i;
        break;
    }
}
alert('População A : ' + a + '\n'
    + 'População B: ' + b + '\n'
    + 'Quantidade de Anos: ' + ano
 )

/* var a = 80000;
var b = 200000;
var ano = 0;
for (var i = 0; i < 100; i++) {
    if (a <= b) {
        a += a * 0.03
        b += b * 0.015
        ano += 1
        break;
    }
}

alert('A ultrapassa ou iguala a B em ' + ano + ' Ano(s)');*/