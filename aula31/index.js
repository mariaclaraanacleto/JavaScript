const pessoa = {
    nome: 'Maria',
    sobrenome: 'Anacleto',
    idade: 18,
    endereco: {
        rua: 'Basílio Alves Morango',
        numero: 1403,
    }
}

const {idade, endereco: {rua, numero}} = pessoa;
console.log(idade, rua, numero);