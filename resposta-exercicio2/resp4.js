

let letra = prompt('Digite uma letra');
let teste = parseFloat(letra);
if (isNaN(teste)) {
    switch (letra) {
        case 'a': case 'e': case 'i': case 'o': case 'u':
            alert(letra + ' é Vogal');
            break;
        default:
            alert(letra + ' É Consoate');
    }
} else {
    alert('Invalido');
}
