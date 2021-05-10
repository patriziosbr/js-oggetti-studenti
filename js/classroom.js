// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.

//---------STUDENTE------
var student = {
    nome: "paolo",
    cognome: "di biase",
    eta: 19
};

for (var key in student) {
    // var nameStud = student.nome;
    // var surName = student.cognome;
    // var age = student.eta;
    console.log( key, student[key]);
};

//---------ARR STUDENTI
// Creare un array di oggetti di studenti.

var classRoom = [
    {
        nome: "maria",
        cognome: "verdi",
        eta:24
    },
    {
        nome: "mario",
        cognome: "neri",
        eta: 29
    },
    {
        nome: "giuseppe",
        cognome: "vedi",
        eta: 39
    },
    {
        nome: "paolo",
        cognome: "di biase",
        eta: 49
    },
    {
        nome: "giovanna",
        cognome: "rossi",
        eta: 59
    }
];
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for (var i = 0; i < classRoom.length; i++) {
    var studentName = classRoom[i].nome;
    var studentSurName = classRoom[i].cognome;
    console.log(i + 1, studentName, studentSurName);
};

//-------PROMPT 
// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.


var inputName = prompt('inserisci nome utente');
var inputSurname = prompt('inserisci nome Cognome');
var inputAge = parseInt(prompt('inserisci età'));

var newStudent = {};

newStudent.nome = inputName;
newStudent.cognome = inputSurname;
newStudent.eta = inputAge;

console.log('test new student', newStudent);

classRoom.push(newStudent);

console.log(classRoom);