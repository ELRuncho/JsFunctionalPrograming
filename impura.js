//evitar side efects y usar funciones puras toma input/argumento hace algo con el y devuelve un output

//no pura, usa la variable global, no tiene argumentos
function nombrador(){
	console.log(nombre+apellido);
}

//funcion pura, tiene argumentos y simplemente retorna el valor despues de usar los argumentos
function renombrador(nom, apell){
	return nom+apell;
}

var nombre="Rafael ";
var apellido="Franco";

nombrador();
renombrador(nombre, apellido);