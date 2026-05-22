/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)
    let a = 'A';
    let b = a; // cópia
    console.log(a, b);

    a = 'Outra coisa';
    cosole.log(a, b); // aqui so o (a) irá mudar

Referência (mutável) - arraw, object, function
    let a =[1, 2, 3];
    let b = a; // referência
    console.log(a, b)

    a.push(4);
    console.log(a, b); // aqui os dois (a, b), iram mudar, pois ambos apontam na memória

    b.pop();
    console.log(a, b), // aqui a mesmo coisa, retira dos dois
*/