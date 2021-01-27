const data = ["hola", 2, 5, "adios"];
let nums = [];

for (let d of data) {
	if (typeof d === 'number') {
		nums.push(d);
	}
};

document.write("Max=" + nums.sort()[nums.length - 1]);

let a = nums[0];
let b = nums[1];

let suma = a + b;
let resta = a - b;
let multi = a * b;
let div = a / b;
let mod = a % b;

console.log("\n. Suma=" + suma + ", Resta=" + resta + ", Multiplicación=" + multi + ", División=" + div + ", Resto=" + mod);
alert("Suma=" + suma + "\nResta=" + resta + "\nMultip=" + multi + "\nDivis=" + div + "\nResto=" + mod);
//document.write("\n. Suma=" + suma + ", Resta=" + resta + ", Multip=" + multi + ", Divis=" + div + ", Resto=" + mod);

