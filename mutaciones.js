//evitar mutaciones cambiar valores objetos, usar inmutables

//mutaciones malas!
var letras=["a","b","c"];
letras[2]="d";
console.log(letras);

//mor inmutablejsde facebook for inmutables lodash y underscore para map reduce y filter
// articulo fp https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming

var newLetras=letras.map(function (lt){
	if (lt=="c") {return "d";}
	else {return lt;}
});

console.log(newLetras);
console.log(letras)

//crea el problema de duplicar todas las estructuras de datos que se tienen, no es escalable.
//para eso se usan estructuras de datos inmutables. 

/*estructura de datos que contiene
   / \
  /___\______
 / \   \     |
[a][b][c]   [d]

structural sharing you can share parts of the old version with the new version
mori URl http://swannodette.github.io/mori
inmutableJs https://facebook.github.io/immutable-js/
Underscore http://underscorejs.org
lodash https://lodash.com
Ramda http://ramdajs.com
*/