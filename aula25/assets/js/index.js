const form = document.querySelector('.form');

form.addEventListener ('submit', function  (e) {
    e.preventDefault();
const peso = Number(form.querySelector('.peso').value);
const altura = Number(form.querySelector('.altura').value);

if (!peso){
    setResultado('Peso inválido');
    return;
}

if (!altura){
    setResultado('Altura inválida');
    return;
}

const imc = peso / (altura ** 2);

let nivel;

if (imc <= 18.5) {
    nivel = 'Abaixo do peso';
} else if (imc >=18.5 && imc <= 24.9) {
    nivel = 'Peso normal';
} else if (imc >= 35 && imc <= 29.9) {
    nivel = 'Sobrepeso';
} else if (imc >= 30 && imc <= 34.9) {
    nivel = 'Obesidade grau 1';
} else if (imc >= 35 && imc <= 39.9) {
    nivel = 'Obesidade grau 2';
} else {
    nivel = 'Obesidade grau 3';
}

setResultado(`Seu IMC é ${imc.toFixed(2)} (${nivel})`);

});

function criaP (){
    const p = document.createElement ('p');
    p.classList.add ('paragrafo-resultado');
    return p;
}

function setResultado (msg, isValid){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild (p);
}