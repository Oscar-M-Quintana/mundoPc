class DispositivoDeEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca
    }
    toString() {
        return `tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}`
    }
}

class Raton extends DispositivoDeEntrada {
    static contadorDeRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorDeRatones;
    }

    get idRaton() {
        return this._idRaton;
    }

    toString() {
        return `Raton: [idRaton: ${this._idRaton}, ${super.toString()}]`
    }
}

class Teclado extends DispositivoDeEntrada {
    static contadorDeTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorDeTeclados;
    }

    get idTeclado() {
        return this._idTeclado;
    }

    toString() {
        return `Teclado: [ idTeclado: ${this._idTeclado}, ${super.toString()}]`
    }
}

let raton1 = new Raton('Usb', 'Logitech');
console.log(raton1.toString());

let raton2 = new Raton('BlueTooth', 'Corsair');
console.log(raton2.toString());

let raton3 = new Raton('Usb', 'Evga');
console.log(raton3.toString());

let teclado1 = new Teclado('Usb', 'Radeon');
console.log(teclado1.toString());

let teclado2 = new Teclado('Bluetooth', 'Redragon');
console.log(teclado2.toString());

let teclado3 = new Teclado('Usb', 'Noga');
console.log(teclado3.toString());



class Monitor {
    static contadorDeMonitores = 0;

    constructor(marca, tamaño) {
        this._marca = marca;
        this._tamaño = tamaño;
        this._idMonitor = ++Monitor.contadorDeMonitores;
    }

    get idMonitor() {
        return this._idMonitor;
    }

    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca
    }

    get tamaño() {
        return `${this._tamaño}"`;
    }
    set tamaño(tamaño) {
        this._tamaño = tamaño;
    }
    toString() {
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this.marca}, tamaño: ${this.tamaño}]`
    }
}

let monitor1 = new Monitor('Samsung', 14);
console.log(monitor1.toString())

let monitor2 = new Monitor('Philips', 15);
console.log(monitor2.toString())

let monitor3 = new Monitor('LG', 17);
console.log(monitor3.toString())

class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, mouse, teclado, monitor) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._mouse = mouse;
        this._teclado = teclado;
        this._monitor = monitor;
    }

    get idComputadora() {
        return this._idComputadora;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get mouse() {
        return this._mouse;
    }
    set mouse(mouse) {
        this._mouse = mouse;
    }

    get teclado() {
        return this._teclado;
    }
    set teclado(teclado) {
        this._teclado = teclado;
    }

    get monitor() {
        return this._monitor;
    }
    set monitor(monitor) {
        this._monitor = monitor;
    }

    toString() {
        return `Computadora ${this._idComputadora}: ${this.nombre}
    * ${this.mouse.toString()}
    * ${this.teclado.toString()}
    * ${this.monitor.toString()}`
    }
}

let computadora1 = new Computadora('combo1', raton1, teclado1, monitor1);
console.log(computadora1.toString());
let computadora2 = new Computadora('combo2', raton2, teclado2, monitor2);
console.log(computadora2.toString());
let computadora3 = new Computadora('combo3', raton3, teclado3, monitor3);
console.log(computadora3.toString());

class Orden {
    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    get computadoras() {
        return this._computadoras;
    }
    set computadoras(computadoras) {
        this._computadoras = computadoras;
    }

    agregarComputadoras(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarOrden() {
        let cpu = '';
        for (let computadora of this._computadoras) {
            cpu += '\n# ' + computadora.toString() + '\n';
        }
        return `Orden: ${this._idOrden},\nComputadoras:\n${cpu}`;
    }

    toString() {
        return this.mostrarOrden();
    }
}

let orden1 = new Orden();
orden1.agregarComputadoras(computadora1);
orden1.agregarComputadoras(computadora2);
orden1.agregarComputadoras(computadora3);

console.log(orden1.toString());


