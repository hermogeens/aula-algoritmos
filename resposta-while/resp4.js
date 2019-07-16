/*Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% 
e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e
 escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento. */

var a = 80000;
var b = 200000;

const taxaA = 3 / 100;
const taxaB = 1.5 / 100;

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

//Exibe alerta com os anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.