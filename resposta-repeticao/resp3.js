/*Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Sexo: 'f' ou 'm';
Estado Civil: 's', 'c', 'v', 'd' */

//Inicia o laço para verificação da primeira condição (Nome: maior que 3 caracteres).
// Realiza o laço sem utilizar a variavel de inicializaçãoe (i) e expressão final (i++).
var nome = prompt('Informe seu Nome');
for (let i = 0;nome.length < 3;i++) {
   alert('Nome invalio! Minimo 3 caracteres.');
    nome = prompt('Informe seu Nome');
}//Inicia o laço para verificação da segunda condição (Idade: entre 0 e 150).
// Realiza o laço sem utilizar a variavel de inicializaçãoe (i) e expressão final (i++).
var idade = parseInt(prompt('Informe sua Idade'));
for (let i = 0; (isNaN(idade) || idade < 0 || idade > 150); i++) {
    alert('Valor Invalido! Insira um valor entre 0 a 150');
    idade = parseInt(prompt('Informe sua Idade'));
}//Inicia o laço para verificação da terceira condição (Salário: maior que zero).
// Realiza o laço sem utilizar a variavel de inicializaçãoe (i) e expressão final (i++).
var salario = parseFloat(prompt('Informe seu Salário'));
for (let i = 0; isNaN(salario) && salario < 0; i++) {
    alert('Valor Invalido!');
     salario = parseFloat(prompt('Informe seu Salário'));
}//Inicia o laço para verificação da quarta condição (Sexo: 'f' ou 'm').
// Realiza o laço sem utilizar a variavel de inicializaçãoe (i) e expressão final (i++).
var sexo = prompt('Informe seu Sexo (F - Feminino, M-Masculino').trim().toLocaleLowerCase();
for (let i = 0; sexo != 'f' || sexo != 'm'; i++) {
    alert('Valor Invalido!');
     sexo = prompt('Informe seu Sexo (F - Feminino, M-Masculino').trim().toLocaleLowerCase();
}