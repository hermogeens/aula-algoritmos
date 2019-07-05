//Solicita as notas
let nota1 = parseFloat(prompt('Digite a 1º Nota'));
let nota2 = parseFloat(prompt('Digite a 2º Nota'));
//Calcula a média
let media = (nota1 + nota2) / 2;
let resposta = 'Reprovado';
//Verifica a condição para o resultado
if (isNaN(media) || media < 0 || media > 10) {
    resposta = 'Entrada inválida!';
} else if (media == 10) {
    resposta ='Aprovado com Distição';
} else if (media >= 7) {
    resposta ='Aprovado';
} 
alert(resposta);