/* Maria Clara Anacleto tem 18 anos, pesa 64kg 
tem 1.57 de altura e seu IMC é de 25,9645421721 
Maria Clara nasceu em 2007 */
const nome = 'Maria Clara';
const sobrenome = 'Anacleto';
const idade = 18;
const peso = 64;
const alturaEmM = 1.57;

let imc = peso / (alturaEmM * alturaEmM);
console.log(imc);
let anoNascimento = 2026 - idade;
console.log(anoNascimento);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg.`)
console.log(`Tem ${alturaEmM} de altura e seu IMC é de ${imc}.`)
console.log(`${nome} nasceu em ${anoNascimento}.`)