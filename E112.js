const words = ["Environmental", "Systems", "Research", "Institute"];

let num = [];
let primera = words[0].length;
let id = 0;

for (let i = 1; i < words.length; i++) {
	if (primera < words[i].length) {
		primera = words[i].length;
		id = i;
	};
};

alert("La palabra mas larga es: " + words[id] + " de {" + words + "}");