let array_1 = [
  ['un', 'per', 'incatenarli.'],
  ['Anello', 'trovarli,'],
  ['ghermirli', 'e'],
  ['gondor', 'mark'],
];

let array_2 = [
  [['trovarli,']],
  ['tu,', 'sciocchi'],
  ['tu,', 'sciocchi', ['padron', 'Sauron']],
  ['nel', ['fuggite', 'gandalf']],
  [['domarli,', 'passare'], 'buio']
];

let frase =
//un anello per domarli
array_1[0][0] + ` ` +
array_1[1][0] + ` ` +
array_1[0][1] + ` ` +
array_2[4][0][0] + ` ` +

//un anello per trovarli
array_1[0][0] + ` ` +
array_1[1][0] + ` ` +
array_1[0][1] + ` ` +
array_1[1][1] + ` ` +

//un Anello per ghermirli e nel buio incatenarli.
array_1[0][0] + ` ` +
array_1[1][0] + ` ` +
array_1[0][1] + ` ` +
array_1[2][0] + ` ` +
array_1[2][1] + ` ` +
array_2[3][0] + ` ` +
array_2[4][1] + ` ` +
array_1[0][2];


console.log(frase);


// ripeto l'esercizio utilizzando un unica stringa.

let frase2 =
  `${array_1[0][0]} ${array_1[1][0]} ${array_1[0][1]} ${array_2[4][0][0]} ` +
  `${array_1[0][0]} ${array_1[1][0]} ${array_1[0][1]} ${array_1[1][1]} ` +
  `${array_1[0][0]} ${array_1[1][0]} ${array_1[0][1]} ${array_1[2][0]} ${array_1[2][1]} ` +
  `${array_2[3][0]} ${array_2[4][1]} ${array_1[0][2]}`;

console.log(frase2);







