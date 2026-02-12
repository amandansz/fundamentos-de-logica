let userName = getFirstName("Maria de Lourdes");
console.log("Seja bem vindo(a) " + userName + "!");

userName = getFirstName("Antonio Carlos José");
console.log("Seja bem vindo(a) " + userName + "!");


function getFirstName(name, splitChar){
    let firstName =  name.split(splitChar || " ")[0];
    return firstName;
}