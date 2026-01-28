
// Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
// Primo step: eliminare gli spazi e i segni di punteggiatura:
// Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando → str.replace(/\W/g, "");

function palindroma(str){

    //tolgo spazi e simboli e rendo tutto minuscolo
    let parola = str.replace(/\W/g, "").toLowerCase();
    // concatenazione dei metodi: con split divido una stringa in un array di caratteri, con reverse inverto l'ordine dell'array e con join unisco l'array in una stringa.
    let inversa = parola.split('').reverse().join('');

    //confronto e restituisco un booleano, true o false.
    return parola === inversa;

}

console.log(palindroma(`i topi non avevano nipoti`));
console.log(palindroma(`Giulia`));

