//Solicita o valor para calculo de temperatura
let farenheit = parseFloat(prompt('Informe a temperatura em Farenheit '));
//Realiza o calculo
let celsius = 5 * (farenheit - 32)/9;
//Exibe o resultado
alert(farenheit + '°F correspondem a ' + celsius + '°C')