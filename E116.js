class Cuadrado {
	constructor(lado) {
		this.lado = lado;
	};
	
	area() {
		return 2 * this.lado;
	}
	
	perimetro() {
		return 4 * (this.lado);
	}
};

let c1 = new Cuadrado(2, 2);
let c2 = new Cuadrado(5, 5);
let c3 = new Cuadrado(10, 10);

alert("Area 1=" + c1.area() + "\nPermimetro 1=" + c1.perimetro() + "\nArea 2=" + c2.area() + "\nPermimetro 2=" + c2.perimetro() + "\nArea 3=" + c3.area() + "\nPermimetro 3=" + c3.perimetro());

/*
document.write("Area 1=" + c1.area());
document.write(" Permimetro 1=" + c1.perimetro());
document.write("<p>");

document.write("Area 2=" + c2.area());
document.write(" Permimetro 2=" + c2.perimetro());
document.write("<p>");

document.write("Area 3=" + c3.area());
document.write(" Permimetro 3=" + c3.perimetro());*/
