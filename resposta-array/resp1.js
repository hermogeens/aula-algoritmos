//Faça um Programa que leia um vetor de 5 números inteiros e mostre-os. 

var numeros = new Array(5);//Cria vetor para armazenamento dos 5 numeros.
//Inicia o laço para armazenamento dos número interiros no array.
for (let i = 0; i < numeros.length; i++) {
    numeros[i] = parseInt(prompt('Informe o ' + (i+1) + 'º Número'));  
} 
//Exibe os numeros armazenados no array.
for (let i = 0;i < numeros.length;i++) {
    alert(numeros[i]);
    
}
