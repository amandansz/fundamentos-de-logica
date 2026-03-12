function calcularDesconto(valorCompra, formaPagamento) {

    const pagamento = {
        avista: "avista",
        debito: "debito",
        credito: "credito"
    };

    let desconto = 0;

    if (valorCompra >= 300 && formaPagamento === pagamento.avista) {
        desconto = valorCompra * 0.15;
    } 
    else if (valorCompra >= 200 && formaPagamento === pagamento.debito) {
        desconto = valorCompra * 0.05;
    } 
    else {
        console.log("Desculpe, você não se qualifica para o desconto.");
    }

    let total = valorCompra - desconto;

    return {
        valorCompra,
        desconto,
        total
    };
}

let resultado = calcularDesconto(350, "avista");
console.log(`----------------------------------------`);
console.log(`O valor da sua compra é: R$ ${resultado.valorCompra.toFixed(2)}`);
console.log(`----------------------------------------`);
console.log(`Desconto aplicado: R$ ${resultado.desconto.toFixed(2)}`);
console.log(`----------------------------------------`);
console.log(`Total a pagar: R$ ${resultado.total.toFixed(2)}`);