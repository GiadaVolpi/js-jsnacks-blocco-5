// Crea 10 oggetti che rappresentano una zucchina.
//  Dividi in due array separati le zucchine che misurano meno o più di 15 cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine

$ (document).ready (function () {

    var zucchina = [
        {
            "varieta": "rosso",
            "peso": 300,
            "lunghezza": 9
        },
        {
            "varieta": "giallo",
            "peso": 450,
            "lunghezza": 12
        },
        {
            "varieta": "verde",
            "peso": 490,
            "lunghezza": 16
        },
        {
            "varieta": "azzurro",
            "peso": 120,
            "lunghezza": 4
        },
        {
            "varieta": "grigio",
            "peso": 280,
            "lunghezza": 7
        },
        {
            "varieta": "rosa",
            "peso": 560,
            "lunghezza": 19
        },
        {
            "varieta": "viola",
            "peso": 700,
            "lunghezza": 22
        },
        {
            "varieta": "arancione",
            "peso": 140,
            "lunghezza": 5
        },
        {
            "varieta": "nero",
            "peso": 550,
            "lunghezza": 18
        },
        {
            "varieta": "blu",
            "peso": 415,
            "lunghezza": 11
        }
    ]

    var zucchineCorte = [];

    var zucchineLunghe = [];

    for (var i = 0; i <zucchina.length; i++) {
        if (zucchina[i].lunghezza < 15) {
            zucchineCorte.push (zucchina[i]);
        } else {
            zucchineLunghe.push (zucchina[i]);
        }
    }

    console.log(zucchineLunghe);
    console.log(zucchineCorte);

    var pesoZucchineCorte = 0;

    for ( var j = 0; j < zucchineCorte.length; j++) {
        pesoZucchineCorte = pesoZucchineCorte + zucchineCorte[j].peso;
    }

    console.log("Il contenitore con le zucchine corte pesa: " + pesoZucchineCorte + " gr");

    var pesoZucchineLunghe = 0;

    for ( var z = 0; z < zucchineLunghe.length; z++) {
        pesoZucchineLunghe = pesoZucchineLunghe + zucchineLunghe[z].peso;
    }

    console.log("Il contenitore con le zucchine lunghe pesa: " + pesoZucchineLunghe + " gr");
});
