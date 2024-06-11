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

//selezionare l'id che corrisponde alla lista ul in HTML
let divList = document.querySelector("#list");

//selezionare la classe che corrisponde al pulsante deputato ad attivare al lista
const sendButton = document.querySelector(".btn-input");

//selezionare la classe che corrisponde al pulsante deputato al reset
const resetButton = document.querySelector(".btn-close");

//creare evento che permette di visualizzare la lista al click del pulsante

sendButton = addEventListener('click', 
    function(){
        
        // Cancellare l'elenco della lista prima di aggiungere nuovi elementi
        divList.innerHTML = '';

        while ((i < myList.length) && (j < myIcons.length)) {

            //estrarre tutti i valori della lista array per tutta la lunghezza dell'array
            let contentList = myList[i];
            console.log(contentList);

            //estrarre le icone dalla lista
            let icon = myIcons[j];
            console.log(icon);

            //creare elementi lista e stamparli
            let listItem = document.createElement('li');
            listItem.classList.add('item-style');
            listItem.style.opacity = 0; // Impostare inizialmente l'opacità a 0

            listItem.innerHTML = `<img src="${icon}"><span>${contentList}</span>`;

            divList.appendChild(listItem);

            // Effetto di dissolvenza (fade-in)
            setTimeout(() => {
                listItem.style.transition = 'opacity 1s';
                listItem.style.opacity = 1;
            }, 100 * i); // Ritardare leggermente ogni elemento

            
            //incrementare il singolo elemento della lista
            i++;
            j++;
        }

    }
)

//evento che permette di resettare il contenuto
resetButton.addEventListener('click', 
    function () {
    divList.innerHTML = '';
});



