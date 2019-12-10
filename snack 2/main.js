// JSnack 2: Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)


$ (document).ready (function () {

    var stringa = prompt ("Inserisci una parola");

    console.log(stringa);

    var stringaCapovolta = stringaInversa(stringa)
    console.log(stringaCapovolta);

    function stringaInversa (stringa) {
        // 
        return stringa.split("").reverse().join("");
    }

});
