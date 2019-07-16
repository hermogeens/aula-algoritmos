//Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
var usuario = prompt('Entre com o seu usuario.');//Recebe o nome do usuario e armazena na variavel usuario.
var senha = prompt('Entre com a Senha.');// Recebe a senha e armazena na variavel senha.
var i = 0;
//Inicia o laço para verificação se a senha é igual ao usuario
for (i;usuario == senha; i++) {
    alert('Senha igual a usuario! Insira uma senha diferente.');// caso a senha seja igual ao usuario, exibe um alerta.
    var usuario = prompt('Entre com o seu usuario.');//Recebe o usuario para nova verificação.
    var senha = prompt('Entre com a Senha.');//Recebe a senha para nova verificação.
}