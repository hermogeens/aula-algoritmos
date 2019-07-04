//Solicita os valores
let num1 = parseFloat(prompt('Digite o 1º Numero!'));
let num2 = parseFloat(prompt('Digite o 2º Numero!'));
let num3 = parseFloat(prompt('Digite o 3º Numero!'));


let valor

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

alert('Ordem descrecente: ' + num3 + ' - ' + num2 + ' - ' + num1);