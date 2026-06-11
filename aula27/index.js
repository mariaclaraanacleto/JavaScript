//const data = new Date (0) // 01/01/1970 Timestamp unix ou época unix
//const data = new Date (2026, 10, 19); // a, m, d, h, M, s, ms -> Mês começa com 0
//const data = new Date ('2026-11-19 20:40:54'); // Uma string
//cosnole.log('Dia Semana', data.getDay()); // 0 - domingo, 6 - sábado
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const data = new Date()
const dataBrasil = formataData(data);
console.log(dataBrasil);