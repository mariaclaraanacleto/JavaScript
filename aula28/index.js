function getDiaSemanaTexto (diaSemana){
let diaSemanaTexto;

switch (diaSemana){
case 0:
    diaSemanaTexto = 'Domingo';
    return diaSemanaTexto;
case 1:
    diaSemanaTexto = 'Segunda';
    return diaSemanaTexto;
case 2:
    diaSemanaTexto = 'Terça';
    break;
case 3:
    diaSemanaTexto = 'Quarta';
    return diaSemanaTexto;
case 4:
    diaSemanaTexto = 'Quinta';
    return diaSemanaTexto;
case 5:
    diaSemanaTexto = 'Sexta';
    return diaSemanaTexto;
case 6:
    diaSemanaTexto = 'Sabádo';
    return diaSemanaTexto;
default:
    diaSemanaTexto = '';
    return diaSemanaTexto;
}
}

const data = new Date('2026-06-15');
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto (diaSemana);

console.log(diaSemana, diaSemanaTexto);