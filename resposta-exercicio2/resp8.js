//Solicita os valores dos produtos
let produtoA = parseFloat(prompt('Informe o preço do produto A'));
let menor = produtoA;
let recomendacao = 'Produto A'

let produtoB = parseFloat(prompt('Informe o preço do produto B'));

if (produtoB < menor) {
    menor = produtoB;
    recomendacao = 'Produto B';
}

let produtoC = parseFloat(prompt('Informe o preço do produto C'));
if (produtoC < menor) {
    menor = produtoC;
    recomendacao = 'Produto C';
}

alert('Melhor preço: ' + menor + '\nProduto Recomendado: ' + recomendacao);
