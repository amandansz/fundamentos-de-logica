function classificaçãoIdade() {

    let idade = 8;

    if (idade < 13) {
        console.log("Criança");
    } else if (idade >= 13 && idade <= 18) {
        console.log("Adolescente");
    } else if (idade >= 19 && idade <= 60) {
        console.log("Adulto");
    } else {
        console.log("Idoso");
    }

}

classificaçãoIdade();
