//array di 6 numeri
let arr = [4, 88, 9, 2, 17, 80];

//sommo il totale
let somma = arr.reduce((acc, n)=> acc + n, 0);

console.log(somma);

//media
let media = somma / arr.length;

console.log(media);

//valori minori della media
let minori = arr.filter((n)=> n < media);

console.log(minori);

//maggiori
let maggiori = arr.filter((n)=> n > media);

console.log(maggiori);
