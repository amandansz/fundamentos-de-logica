function verificarLogin() {

let usuarioLogado = true;
let usuarioBloqueado = false;

let senhaDigitada = "2210";
let senhaCadastrada = senhaDigitada === "2210"

if (usuarioLogado === true && !usuarioBloqueado && senhaCadastrada) {
    console.log("Acesso permitido!");
} else {
    console.log("Acesso negado!");
}
}
verificarLogin();