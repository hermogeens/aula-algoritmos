//Solicita ao usuario para Digita F ou M
/*let sexo1 = 'F'
let sexo2 = 'M'*/

let sexo = prompt('Digite F ou M');
sexo = sexo.toLowerCase() // transforma em minusculo
//Verifica se o sexo é Feminino ou Masculino
switch (sexo) {
    case 'f':
        alert('Feminino');
        break;
    case 'm':
        alert('Masculino');
        break;
    default:
        alert('Sexo inválido')
}

/*
if (sexo == sexo1) {
    alert('Feminino');
} else if (sexo == sexo2) {
    alert('Masculino');
} else {
   alert('Sexo inválido')
}*/