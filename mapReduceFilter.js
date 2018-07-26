// nada de iteraciones/loops. usar map, reduce y filter
// new list slice in map for each element in my recepy list 
//reduce combines modified list in a certain way sandwich
// filter if hate someting use filter so that veggie does not get into sandwich
var veggies=['tomate', 'pepino', 'lechuga', 'cebolla'];
var sliced= veggies.map(function(veg){
	return veg.split('');
});

console.log(sliced);

var sandwich=sliced.reduce(function(a,b){
	return a.concat(b);
});

console.log(sandwich);

var sandwichParaMi= sandwich.filter(function(item){
	return item!='t';
});

console.log(sandwichParaMi);