//Solicita as notas
let nota1 = parseFloat(prompt('Digite a 1º Nota'));
let nota2 = parseFloat(prompt('Digite a 2º Nota'));
//Calcula a média
let media = (nota1 + nota2) /2
//Verifica a condição para o resultado
if (media == 10) {
    alert('Aprovado com Distição');
} else if (media > 7 && media < 10) {
    alert('Aprovado');
} else {
    alert('Reprovado')
}
