/*Data una lista della spesa, stampare sulla pagina (anche brutalmente, 
basta che si vedano) gli elementi della lista individualmente con un ciclo while*/

//creare un array che elenca gli elementi della spesa
const myList = [
    "patate", 
    "olio d'oliva", 
    "vino",
    "pasta", 
    "gamberi",
    "broccoli",
    "farina",
    "uova",
    "caffè",    
    "biscotti",
    "arance",
    "gelato"
];

//creare un array che raccoglie le icone degli elementi
const myIcons = [
    'img/potato.png',
    'img/olio.png',
    'img/vino.png',
    'img/pasta.png',
    'img/gambero.png',
    'img/broccoli.png',
    'img/farina.png',
    'img/uova.png',
    'img/caffé.png',
    'img/biscotti.png',
    'img/arance.png',
    'img/gelato.png'

];

console.log(myList);
console.log(myIcons);

//dichiarare la variabile da associare al singolo elemento in lista
let i = 0;
let j = 0;
//selezionare l'd che corrisponde alla lista ul in HTML
let divList = document.querySelector("#list");

while ((i < myList.length) && (j < myIcons.length)) {

    //estrarre tutti i valori della lista array per tutta la lunghezza dell'array
    let contentList = myList[i];
    console.log(contentList);

    //estrarre le icone dalla lista
    let icon = myIcons[j];
    console.log(icon);
    //creare elementi lista e stamparli
    divList.innerHTML += `<li class="item-style">
                                <img src="${icon}">
                                <span> 
                                    ${contentList}
                                </span>
                                </img>
                            </li>`;

    //incrementare il singolo elemento della lista
    i++;
    j++;
}



