//Solicita o turno
let turno = prompt('Qual o seu turno: M- matutino ou V- Vespertino ou N- Noturno?: ').toLowerCase();
//Verifica qual turno foi digitado.
if (turno == 'm') {

    alert('Bom dia!');

} else if (turno == 'v') {

    alert('Boa Tarde!');

} else if (turno == 'n') {

    alert('Boa Noite!');
} else {
    alert('Valor digitado é invalido!! Por Favor entre com as informações descritas!');//imprime a mensagem
}