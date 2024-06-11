/*Data una lista della spesa, stampare sulla pagina (anche brutalmente, 
basta che si vedano) gli elementi della lista individualmente con un ciclo while*/

//creare un array che elenca gli elementi della spesa
const myList = [
    "patate", 
    "pomodori", 
    "olio d'oliva", 
    "vino",
    "pasta", 
    "gamberi",
    "broccoli",
    "farina",
    "uova",
    "caffè",    
    "biscotti",
    "frutta",
    "gelato"
];

console.log(myList);

//dichiarare la variabile da associare al singolo elemento in lista
let i = 0;

//selezionare l'd che corrisponde alla lista ul in HTML
let divList = document.querySelector("#list");

while (i < myList.length) {

    //estrarre tutti i valori della lista array per tutta la lunghezza dell'array
    let contentList = myList[i];
    console.log(contentList);

    //creare elementi lista e stamparli
    divList.innerHTML += `<li>${contentList}</li>`;

    //incrementare il singolo elemento della lista
    i++;

}



