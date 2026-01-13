
//1) chiedo all'utente quante volte vuole lanciare il dado.
let number;
number = Number(prompt(`lancia i dadi 3 volte`));


//2)funzione: lancia un dado che restituisce valore da 1 a 6
function lancioDado(){

 return Math.floor(Math.random() * (6 - 1 + 1)) + 1;

}

// 3) calcolo il punteggio del giocatore facendo dei lanci partendo da 0
function punteggio(){

    let somma = 0;

    for(let i = 0; i < 3; i++){
        
        somma = somma + lancioDado();

    }

    return somma;

}

// calcolo il punteggio dei due giocatori
let punteggio1 = punteggio();
let punteggio2 = punteggio();

// stampo i rispettivi punteggi
console.log(`punteggio giocatore 1:`, punteggio1);
console.log(`punteggio giocatore 2:`, punteggio2);

// confronto i punteggi e stampo il vincitore
if(punteggio1 > punteggio2){
  console.log(`vince il giocatore 1`);
  
}else if(punteggio1 < punteggio2){
    console.log(`vince il giocatore 2`);
    

}else{
    console.log(`pareggio`);
    
}




