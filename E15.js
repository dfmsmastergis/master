let dni = parseInt(prompt("DNI sin Letra"));

if (typeof dni === 'number') {
	
	if (dni >= 0 && dni <= 99999999) {
		let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
		let resto = dni % 23;
		let letra = dni[resto];
		
		alert(dni + letras[resto]);
	} else {
		alert("Número no válido");
	}
	
};


