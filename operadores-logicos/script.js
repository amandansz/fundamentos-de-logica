// Operadores lógicos: AND (&&) OR (||) NOT (!)  
let frequencia = 75;
let media = 6;


if (frequencia >= 90 && media >= 8) {
    console.log("O aluno foi aprovado direto!")
}    

else if (frequencia >= 75 && media >= 6) {
    console.log("O aluno pode fazer a prova final!");

} else {
    console.log("O aluno não pode fazer a prova final!");
}
