// Scrivi una funzione che fonda due array (con lo stesso numero di
// elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var array1 = [1,2,3,4,5,6];
var array2 = ["Pippo", "Pluto", "Paperino", "Topolino", "Minnie", "Clarabella"];
var arrayAlternato = [];

for (var i = 0; i < array1.length; i++) {}

for (var j = 0; j < array2.length; j++) {}

for (var z = 0; z < array1.length; z++) {
    arrayAlternato.push (array1[z]);
    arrayAlternato.push (array2[z]);
}

console.log(arrayAlternato);
