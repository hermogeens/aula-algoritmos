//Solicita o turno
let turno = prompt('Qual o seu turno: M- matutino ou V- Vespertino ou N- Noturno?: ').toLowerCase();
//Verifica qual turno foi digitado.

turno = turno.toLowerCase();

switch (turno) {
    case 'm':
        alert('Bom dia!');
        break;
    case 'v':
        alert('Boa Tarde!');
        break;
    case 'n':
        alert('Boa Noite!');
        break;
    default:
        alert('Valor digitado é invalido!! Por Favor entre com as informações descritas!');//imprime a mensagem

}

/*if (turno == 'm') {

    alert('Bom dia!');

} else if (turno == 'v') {

    alert('Boa Tarde!');

} else if (turno == 'n') {

    alert('Boa Noite!');
} else {
    alert('Valor digitado é invalido!! Por Favor entre com as informações descritas!');//imprime a mensagem
}*/