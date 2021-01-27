let n = parseInt(prompt("Escribir un número para ver si es PAR o IMPAR"));

function checkNumber(num) {
	if (num % 2 == 0) {
		alert(num + " es par");
	} else {
		alert(num + " es impar");
	}
}

if (typeof n === 'number') {
	if (n > 0) {
		checkNumber(n);
	}
}

