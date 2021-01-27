var texto = prompt("Comprobar texto Mayúscula-Minúscula-Ambas");

function check(cadena) {
	if (cadena == cadena.toUpperCase()) {
		alert("Todo en mayúsculas");
		return;
	} else if (cadena == cadena.toLowerCase()) {
		alert("Todo en minúsculas");
		return;
	} else {
		alert("Hay mezcla de mayúsculas y minúsculas");
		return;
	}
}

check(texto);