//Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa. 
var numeros = new Array(10);//Cria vetor para armazenamento dos 10 numeros.
//Inicia o laço para armazenamento dos número no array.
for (let i = 0; i < numeros.length; i++) {
    numeros[i] = parseFloat(prompt('Informe o ' + (i+1) + 'º Número'));  
} 
//Exibe os numeros armazenados no array na ordem inversa.
for (let i = 0;i < numeros.length;i++) {
    alert(numeros[9-i]);
    
}
