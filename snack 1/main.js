// JSnack 1 (blocco 5):
// Crea 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

$ (document).ready (function() {

    var zucchina = [
        {
            "varieta": "rosso",
            "peso": 2,
            "lunghezza": 3
        },
        {
            "varieta": "giallo",
            "peso": 4,
            "lunghezza": 4
        },
        {
            "varieta": "verde",
            "peso": 4,
            "lunghezza": 3
        },
        {
            "varieta": "azzurro",
            "peso": 2,
            "lunghezza": 3
        },
        {
            "varieta": "grigio",
            "peso": 4,
            "lunghezza": 4
        },
        {
            "varieta": "rosa",
            "peso": 4,
            "lunghezza": 3
        },
        {
            "varieta": "viola",
            "peso": 2,
            "lunghezza": 2
        },
        {
            "varieta": "arancione",
            "peso": 6,
            "lunghezza": 7
        },
        {
            "varieta": "nero",
            "peso": 1,
            "lunghezza": 3
        },
        {
            "varieta": "blu",
            "peso": 5,
            "lunghezza": 7
        }
    ]

    var pesoTotale = 0;

    for (var i = 0; i < zucchina.length; i++) {
        var pesoCorrente = zucchina[i].peso;
        // o
        pesoTotale = pesoTotale + pesoCorrente;
    }

    console.log("In totale le zucchine pesano: " + pesoTotale + " kg");

});
