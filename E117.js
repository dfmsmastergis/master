class Cliente {
	constructor(nombre, direccion, telf, dni) {
		this.nombre = nombre;
		this.direcccion = direccion;
		this.telf = telf;
		this.dni = dni;
	};
};

class Elemento {
	constructor(descrip, cant, precio) {
		this.deescrip = descrip;
		this.cant = cant;
		this.precio = precio;
	};
};

class Info {
	constructor(base, iva, total, pago) {
		this.base = base;
		this.iva = iva;
		this.total = total;
		this.pago = pago;
	};
};

class Factura {
	constructor(cliente, elementos) {
		this.cliente = cliente;
		this.elementos = elementos;
		
		let base = 0;
		let iva = 16;
		let total = 0;
		let pago = "Contado";
		
		for (let i = 0; i < elementos.length; i++) {
			base += elementos[i].cant * elementos[i].precio;
		}
		
		total = base * (1 + iva / 100);
		
		this.info = new Info(base, iva, total, pago);
	};
	
	
};

let cli1 = new Cliente("A", "A", "123", "123");
let elem1 = new Elemento("x", 1, 10);
let elem2 = new Elemento("y", 2, 4);
let elems = [];
elems.push(elem1);
elems.push(elem2);
let fac1 = new Factura(cli1, elems);

console.log(fac1);
alert("*Factura mostrada por consola*");