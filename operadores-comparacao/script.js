function avaliarAluno() {

  let nota1 = 7;
  let nota2 = 8;
  let nota3 = 9;

  const notaMaxima = 10;
  let media = (nota1 + nota2 + nota3) / 3;

  if (nota1 < 3 || nota2 < 3 || nota3 < 3) {
    console.log("O aluno foi reprovado: nota abaixo de 3");

  } else if (media >= 7) {
    console.log("O aluno foi aprovado com a média: " + media.toFixed(2));

    if (media === notaMaxima) {
      console.log("O aluno foi aprovado com nota máxima!");
    }

  } else {
    console.log(
      "O aluno foi reprovado com a média: " + 
      media.toFixed(2) +
      "\nMas pode realizar uma segunda chamada."
    );
  }
}

//  chamada da função 
avaliarAluno();