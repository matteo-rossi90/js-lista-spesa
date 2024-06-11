/*Data una lista della spesa, stampare sulla pagina (anche brutalmente, 
basta che si vedano) gli elementi della lista individualmente con un ciclo while*/

// Dichiarare l'array che raccoglierà gli elementi della spesa immessi
const myList = [];

//dichiarare la variabile da associare al singolo elemento in lista
let i = 0;

//selezionare l'id dell'input
let inputData = document.querySelector('#input-item');

//seleionare la classe del bottone che raccoglierà l'informazione
const addButton = document.querySelector('.btn-add');

addButton.addEventListener('click', 
    function (){

        //dichiarare la variabile che corrisponde ai dati immessi dall'utente
        let inputList = inputData.value;
        console.log(inputList);

        //aggiungere gli input nell'array in modo da popolarlo
        myList.push(inputList);
        console.log(myList);

        // Pulire il campo di input dopo aver aggiunto l'elemento
        inputData.value = '';
    }
)

//selezionare l'id che corrisponde alla lista ul in HTML
let divList = document.querySelector("#list");

//selezionare la classe che corrisponde al pulsante deputato ad attivare al lista
const sendButton = document.querySelector(".btn-input");

//selezionare la classe che corrisponde al pulsante deputato al reset
const resetButton = document.querySelector(".btn-close");

//creare evento che permette di visualizzare la lista al click del pulsante
sendButton.addEventListener('click', 
    function(){
        
        // Cancellare l'elenco della lista prima di aggiungere nuovi elementi
        divList.innerHTML = '';

        while (i < myList.length) {

            //estrarre tutti i valori della lista array per tutta la lunghezza dell'array
            let contentList = myList[i];
            console.log(contentList);


            //creare elementi lista e stamparli
            let listItem = document.createElement('li');
            listItem.classList.add('item-style');
            listItem.style.opacity = 0; // Impostare inizialmente l'opacità a 0

            listItem.innerHTML = `<span>${contentList}</span>`;

            divList.appendChild(listItem);

            // Effetto di dissolvenza (fade-in)
            setTimeout(() => {
                listItem.style.transition = 'opacity 1s';
                listItem.style.opacity = 1;
            }, 100 * i); // Ritardare leggermente ogni elemento

            //incrementare il singolo elemento della lista
            i++;
        }

    }
)

//evento che permette di resettare il contenuto
resetButton.addEventListener('click', 
    function () {
    divList.innerHTML = '';
});



