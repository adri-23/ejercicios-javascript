console.log(' ');
console.log('Ejercicio 3');
var pagoDia = parseInt(prompt('Ingrese el salario por día: '));
var quincenal = pagoDia * 14;
var mensual = quincenal *2;
console.log('Su salario bruto quincenal es: ' + quincenal);
console.log('Su salario bruto mensual es: ' + mensual);

quincenal = quincenal - (quincenal * 0.30) - (quincenal * 0.1);
mensual = mensual - (mensual * 0.3) - (mensual * 0.1);

console.log('Su salario neto quincenal es: ' + quincenal);
console.log('Su salario neto mensual es: ' +mensual);