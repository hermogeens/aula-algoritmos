/*Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Sexo: 'f' ou 'm';
Estado Civil: 's', 'c', 'v', 'd' */

//Inicia o laço para verificação da primeira condição (Nome: maior que 3 caracteres).
var nome = prompt('Informe seu Nome');
while (nome.length > 3) {
   alert('Nome invalio! Minimo 3 caracteres.');
    nome = prompt('Informe seu Nome');
}//Inicia o laço para verificação da segunda condição (Idade: entre 0 e 150).
var idade = parseInt(prompt('Informe sua Idade'));
while ((isNaN(idade) || idade < 0 || idade > 150)) {
    alert('Valor Invalido! Insira um valor entre 0 a 150');
    idade = parseInt(prompt('Informe sua Idade'));
}//Inicia o laço para verificação da terceira condição (Salário: maior que zero).
var salario = parseFloat(prompt('Informe seu Salário'));
while (isNaN(salario) && salario < 0) {
    alert('Valor Invalido!');
    salario = parseFloat(prompt('Informe seu Salário'));
}//Inicia o laço para verificação da quarta condição (Sexo: 'f' ou 'm').
var sexo = prompt('Informe seu Sexo (F - Feminino, M-Masculino').trim().toLocaleLowerCase();
while (sexo != 'f' || sexo != 'm') {
    alert('Valor Invalido!');
    sexo = prompt('Informe seu Sexo (F - Feminino, M-Masculino').trim().toLocaleLowerCase();
}