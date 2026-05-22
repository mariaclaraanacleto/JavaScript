const pessoa1 = {
    nome: 'Maria Clara',
    sobrenome: 'Anacleto',
    idade: 18,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
}
pessoa1.fala();
pessoa1.incrementaIdade();

//vendo objeto agrupado