let fecha = {
	dia: 1,
	mes: 'Enero'	
};

let meses = ["Enero", "Febrero", "Marzo"];
let nac = 'Mi cumpleaños es el ' + fecha.dia + ' de ' + fecha.mes;
let pos = meses.indexOf("Enero");
let mes = meses[pos + 1];

console.log(nac);
console.log(mes)
alert(nac + ". Mes siguente; " + mes);
