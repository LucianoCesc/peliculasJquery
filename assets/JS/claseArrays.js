/*let curso = ["Luciano", "Oscar", "Rodrigo", "Lisbeth", "Sebastian", "Eduardo", "Silvia", "Rolando", "Constanza", "Nicolas", "Paula", "Paulette", "Patricio"];
console.log(curso);

var pares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 2.2, "kessillox"];
console.log(pares);

var booleanos = [false, false, true, 1, 0, "false", "true"];
console.log(booleanos);

var nombre = "Rodrigo";

let humanoide = {
    propietario: {
        nombre: "Silvia",
        apellido: "Gonzalez",
        edad: 30,
        direccion: {
            calle: "Av. Siempre Viva",
            numero: 742,
            comuna: "Springfield",
            region: "Oregon"
        }
    },
    nombre: "Luciano",
    apellido: "Gonzalez",
    edad: 30,
    curso: "Full Stack",
    materias: ["HTML", "CSS", "JS", "PHP", "MySQL"],
    activo: true,
    sonidos: function() {
        console.log("Miwau")
    }
}

humanoide.
humanoide.sonidos() //notacion de punto
humanoide['sonidos']() //notacion de corchetes

humanoide.materias[0] = "HTML5"
humanoide.edad = 20
console.log(humanoide.materias)
console.log(humanoide.edad)
console.log(humanoide)
console.log(humanoide.propietario.direccion)
console.log(humanoide.propietario.direccion.calle)


//Object.keys(direccion) //devuelve un array con las propiedades del objeto
console.log(Object.keys(humanoide.propietario.direccion))
let values = Object.values(humanoide.propietario.direccion) //devuelve un array con los valores del objeto
console.log(values)

Object.entries(humanoide.propietario.direccion).forEach(([key, value]) => {
    console.log(key, value)
})

let valor = Object.entries(humanoide.propietario.direccion)
console.log(valor)*/

let set1 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 8, 9]); //set es un objeto que permite almacenar valores unicos de cualquier tipo, es un array sin indices
let set2 = new Set(); //set vacio
let set3 = new Set("Hola Mundoooooo Hola Mundos"); //set con string
console.log(set1);
console.log(set2);
console.log(set3);

set1.add(11);
set1.add(12);

set1.delete(3);
set1.delete(4);

console.log(set1);

set1.forEach((value) => {
        console.log(value);
    })
    /*
    var lista = ["Luciano", "Oscar", "Rodrigo", "Lisbeth", "Sebastian", "Eduardo", "Silvia", "Rolando", "Constanza", "Nicolas", "Paula", "Paulette", "Patricio"];
    var cant = lista.length;
    var cants = lista.size;
    var listaSet = new Set(lista); //set con string
    var cantSet = listaSet.size;
    var cantSetl = listaSet.length;
    console.log(cant);
    console.log(cants);
    console.log(cantSet);
    console.log(cantSetl);
    console.log(listaSet);
    console.log(lista);
    lista.unshift("Felipe");   //agrega al inicio del array
    lista.push("Danitxa", "Cristian");//agrega al final del array
    console.log(lista);
    var eliminadoPop = lista.pop(); //elimina el ultimo elemento del array
    console.log(lista);
    console.log(eliminadoPop);
    var eliminarShift = lista.shift();//elimina el primer elemento del array
    console.log(eliminarShift);
    console.log(lista);
    var lista1 = 'Luciano;20;Oscar;30;Rodrigo;40;Lisbeth;50;Sebastian;60;Eduardo;70;Silvia;80;Rolando;90;Constanza;100;Nicolas;110;Paula;120;Paulette;130;Patricio;140;Danitxa;150;Cristian;160';
    console.log(lista1);
    var lista2 = lista1.split(";"); //convierte un string en un array
    console.log(lista2);

    lista.forEach((value, index) => { //forEach recorre el array
        console.log(value, index);
    });
    lista.sort(); //ordena alfabeticamente
    console.log(lista);
    lista.reverse(); //ordena alfabeticamente al reves
    console.log(lista);
    lista.forEach((value, index) => {
            console.log(value, index);
        }) //recorre el array*/