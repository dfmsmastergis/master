const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

let siete = [];
let num = 0;

for (let i = 0; i < meses.length; i++) {
	if (meses[i].length >= 7) {
		siete.push(meses[i].toUpperCase());
		num++;
	};
};

alert("Meses con siete letras o más: {" + siete + "}\nHay " + num);
/*
document.write(siete);
document.write("<p>");
document.write("Hay " + num);*/