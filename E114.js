const users = [
	{username: "a", age: 30, premium: false}, 
	{username: "b", age: 31, premium: false}, 
	{username: "c", age: 32, premium: true}, 
	{username: "d", age: 33, premium: false}, 
	{username: "e", age: 34, premium: true}, 
	{username: "f", age: 35, premium: false}, 
];

let frases = [];

for (let i = 0; i < users.length; i++) {
	if (users[i].premium == true) {
		frases.push(" El usuario " + users[i].username + " es premium");
	}
};

//document.write(frases);
//alert("Premium: " + frases);

let nopremium = users.filter(user => user.premium == false);
console.log(nopremium);

alert("Premium: " + frases + "\n*Los no premium salen por console.log*");