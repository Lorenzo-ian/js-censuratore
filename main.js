/*Il software riceve in input un lungo testo e una serie di parole da censurare.
Restituisce il testo con xxx al posto delle parole censurate.
Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali*/

var text = prompt("Inserisci delle parole");
var proibite = ["io", "tu", "egli", "noi", "voi", "essi"];

console.log(text.split(" "));
var text_split = text.split(" ");

for (var i = 0; i < text_split.length; i++) {
    if (proibite.includes(text_split[i])) {
        text_split[i] = "XXX";
    }
}

console.log(text_split);


var parole_totali = text_split.length;

console.log("Parole totali: ", parole_totali);

var counter = 0;

for (var i = 0; i < text_split.length; i++) {
  if (text_split[i] == "XXX") {
    counter ++;
  }
}

console.log("Parole censurate: ", contatore);

console.log("Ne sono state censurate ", contatore, " su ", parole_totali);

