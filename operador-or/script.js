function verificarCompra() {

let compra = 180; 
let freteValorMedio = compra >= 150 && compra < 250; 
 
 if (compra >= 250) {
    console.log("Sua compra tem frete grátis!");

} else if (freteValorMedio)  {
    console.log("Sua compra tem um frete fixo de: R$12,00"); 

} else {
    console.log("Sua compra tem um frete fixo de: R$20,00") 
  }  
}

verificarCompra();