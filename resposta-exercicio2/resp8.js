//Solicita os valores dos produtos
let preco1 = parseFloat(prompt('Digite o preço do primeiro produto: '));
let preco2 = parseFloat(prompt('Digite o preço do segundo produto: '));
let preco3 = parseFloat(prompt('Digite o preço do terceiro produto: '));
//Verifica os valores de cada produto e informa qual produto você deve comprar
if (preco1 < preco2 && preco1 < preco3) {
    alert('Recomendamos você comprar o produto 1');
} else if (preco2 < preco1 && preco2 < preco3) {
    alert('Recomendamos você comprar o produto 2');
} else if (preco3 < preco1 && preco3 < preco2) {
    alert('Recomendamos você comprar o produto 3');
}