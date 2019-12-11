// Scrivi una funzione che accetti tre argomenti:
//
// un array e due numeri (“a” più piccolo di “b” e “b” grande al
// massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra “a” e “b”


$ (document).ready (function () {

    var lettere = ["a", "b", "c", "d", "e"];
    var x = numeroRandom (1, lettere.length - 1);
    console.log(x);
    var y = numeroRandom (x + 1, lettere.length);
    console.log(y);

    var risultato = estraiArray (lettere, x, y);
    console.log(risultato);



    function estraiArray (array, a, b) {
        var arrayLimitato = [];
        for (var i = a-1; i < b; i++) {
            arrayLimitato.push (array[i]);
        }
        return arrayLimitato;
    }

    function numeroRandom (min, max) {
        return Math.floor(Math.random() * (max-min+1)) + min;
    }

});
