let valorCompra = 120;
let formaPagamento = "avista";
let compra;


if (valorCompra >= 100 && formaPagamento === "avista") {
    console.log(`Parabéns! Você ganhou um desconto de 10% na sua compra de R$ ${valorCompra.toFixed(2)}`);
    compra = valorCompra * 0.10;
    console.log(`O valor do desconto é: R$ ${compra.toFixed(2)}\nTotal a pagar: R$ ${(valorCompra - compra).toFixed(2)}`);
}
else {
    console.log("Desculpe, você não se qualifica para o desconto.");
}