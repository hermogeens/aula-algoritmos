/*Faça um Programa que leia um vetor de 10 caracteres, e diga quantas 
consoantes foram lidas. Imprima as consoantes. */
var texto = prompt('Digite um texto com 10 caracteres');
var consoantes = [];
var x = 0;

for (let i = 0; i < texto.length; i++) {
    let codigoAsc = texto[i].toLowerCase().charCodeAt(0);
    if (codigoAsc >= 97 && codigoAsc <= 122) {
        switch (codigoAsc) {
            case 97: case 101: case 105: case 111: case 117:
                break;
            default:
                consoantes[x] = texto[i];
                x++;
        }
    }
}
alert(consoantes);