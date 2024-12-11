




//DOM ELEMENTS
let TimerElm = document.getElementById("timer")
const RememeberNumberElm = document.getElementById("ricordanumeri")
const NumberOneElm = document.getElementById("num1")
const NumberTwoElm = document.getElementById("num2")
const NumberThreeElm = document.getElementById("num3")
const NumberFourElm = document.getElementById("num4")
const NumberFiveElm = document.getElementById("num5")
const BtnConfirmElm = document.getElementById("btn-confirm")
const NumberGuessElm = document.getElementById("numberguess")
const InsertNumberElm = document.getElementById("insertnumber")
const RandomNumberElm = document.getElementById("numerirandom")

//FUNCTIONS

function TimerRandomNumber(){
    const numerirandom = RandomNumber()
    const NumeriSpaziati = numerirandom.join(", ")
    RandomNumberElm.innerHTML = NumeriSpaziati
    RandomNumberElm.classList.add("d-none")
    RememeberNumberElm.innerHTML = "Inserisci tutti i numeri che ricordi (l'ordine non è importante) , "
}

function RandomNumber(){
    let numerirandom = []
    for(i = 0; i < 5; i++){
        numerirandom.push(Math.floor(Math.random() * 101))
    }
    return numerirandom
}

//TIMER
const countdown = setInterval(() => {
    TimerElm.innerHTML = NumberTimer
    if(NumberTimer === 0){
        clearInterval(countdown)
        RememeberNumberElm.innerHTML = "Inserisci tutti i numeri che ricordi (l'ordine non è importante)"
        TimerElm.innerHTML = ""
        RandomNumberElm.innerHTML = ""
        InsertNumberElm.classList.remove("d-none")
        BtnConfirmElm.classList.remove("d-none")
    }
    NumberTimer--
}, 1000);

//VARIABLES
let NumberTimer = 5
const numerirandom = RandomNumber()
const NumeriSpaziati = numerirandom.join(", ")
RandomNumberElm.innerHTML = NumeriSpaziati



console.log(numerirandom)
//MAIN


//al click del bottone devo verificare se i numeri negli input sono uguali ai numeri random
BtnConfirmElm.addEventListener("click", function(event) {
    event.preventDefault();

    // Raccogli i numeri inseriti dall'utente in un array
    const UserNumber = [
        Number(NumberOneElm.value),
        Number(NumberTwoElm.value),
        Number(NumberThreeElm.value),
        Number(NumberFourElm.value),
        Number(NumberFiveElm.value)
    ];

    let SavedNumber = [];

    // Itera su un numero sufficiente di tentativi (ad esempio, 10)
    for (let i = 0; i < UserNumber.length; i++) {
        let randomNum = numerirandom; // Ottieni un numero casuale
        console.log(randomNum)

        // Controlla se il numero casuale è nell'elenco fornito dall'utente
        if (UserNumber.includes(randomNum)) {
            SavedNumber.push(randomNum); // Aggiungi il numero trovato a SavedNumber
        }
    }

    // Stampa l'elenco completo dei numeri salvati
    console.log(SavedNumber);
});



