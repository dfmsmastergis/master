const topics = ["JavaScript", "Variables", "funciones", "condicionales", "bucles"];

let inverso = [];
for (var i of topics) {
	inverso.push(i.toUpperCase());
};

inverso.reverse();
document.write(inverso);