//Solicita os valores (valor hora/quant. horas)
let vhora = parseFloat(prompt('Informe o valor da sua hora trabalhada'));
let qhora = parseInt(prompt('Informe quantas horas você trabalhou'));
//Calcular Valores
let salario = vhora * qhora;
//Exibe a mensagem
alert('Seu salário neste mês é R$' + salario);