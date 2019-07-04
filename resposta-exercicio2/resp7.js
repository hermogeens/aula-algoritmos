//Solicita os valores para verificação
let num1 = parseFloat(prompt('Digite o 1º numero!'));
let num2 = parseFloat(prompt('Digite o 2º numero!'));
let num3 = parseFloat(prompt('Digite o 3º numero!'));

let valor;

//verifica e atribui os valores nas variaveis auxiliares
if (num1 > num2) {
    valor = num1;
    num1 = num2;
    num2 = valor;
}

if (num2 > num3) {
    valor = num2;
    num2 = num3;
    num3 = valor;

}

if (num1 > num2) {
    valor = num1;
    num1 = num2;
    num2 = valor;
}
//Exibe qual número é maior e menor
alert('O Maior é: ' + num3 + ' e o menor é: ' + num1);



