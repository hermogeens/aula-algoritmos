//Faça um Programa que leia 4 notas, mostre as notas e a média na tela. 
var nota = new Array(4);//Cria vetor para armazenamento dos 4 notas.
let media = 0;
//Inicia o laço para armazenamento dos número no array.
for (let i = 0; i < nota.length; i++) {
    nota[i] = parseFloat(prompt('Informe a ' + (i + 1) + 'º Nota'));
}
//Realiza o calculo da media
media = (nota[0] + nota[1] + nota[2] + nota[3]) / nota.length;
//Exibe as Notas.
for (let i = 0;i < nota.length;i++) {
    alert((i+1) + 'º Nota: ' + nota[i]);  
}
  alert('Média: ' + media);//Exibe a Média.