// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.

//---------STUDENTE------
var student = {
    nome: "paolo",
    cognome: "di biase",
    eta: 19
}

for (var key in student) {
    var nameStud = student.nome;
    var surName = student.cognome;
    var age = student.eta;
    console.log( key, student[key]);
}
//---------ARR STUDENTI


