const scores = [
	{name: "A", country: "A", time: 11.80},
	{name: "B", country: "B", time: 11.43},
	{name: "C", country: "C", time: 10.22},
	{name: "D", country: "D", time: 12.40},
	{name: "E", country: "E", time: 10.89}
];

let tiempo = scores.reduce((time, actual) => {
	if (time > actual.time) {
		time = actual.time;
	}
	return time;
}, 1000);


let campeona = scores.filter(atleta => atleta.time == tiempo);
console.log(campeona);