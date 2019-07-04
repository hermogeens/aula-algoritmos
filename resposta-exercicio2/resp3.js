//Solicita ao usuario para Digita F ou M
let sexo1 = 'F'
let sexo2 = 'M'
let sexo = prompt('Digite F ou M');
//Verifica se o sexo é Feminino ou Masculino
if (sexo == sexo1) {
    alert('Feminino');
} else if (sexo == sexo2) {
    alert('Masculino');
} else {
   alert('Sexo inválido')
}