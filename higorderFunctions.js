//higerorder functions, functions within functions or that return other functions las funciones pueden ser inputs o outputs

function adjetificador(adjetivo){
	return function (str){
		return adjetivo + " " + str;
	};
}

var severisador = adjetificador("severa");
severisador("presentacion");
