const books = [
    { id: 1, price: 10.50, available: true },
    { id: 2, price: 13.00, available: false },
    { id: 3, price: 8.50, available: false },
    { id: 4, price: 20.75, available: true },
    { id: 5, price: 10.50, available: false },
];

const sorted = [...books].sort((a,b) => {
    // Pour sort, a - b , si < 0, a va devant b ; si = 0, a=b , aucun changement ; si > 0 , b va devant a;
    // Donc vérifie d'abord si b est true (1) et a false (0), ce qui donnerait 1, donc b va devant a. 
    // Si la première expression return qqchose falsy (0,false,null,undefined,NaN,empty string), execute le || (comme en java).
     return b.available - a.available || a.price - b.price;
});

console.log(sorted);
/* Valeur attendue :
[ { id: 1, price: 10.5, available: true },
  { id: 4, price: 20.75, available: true },
  { id: 3, price: 8.5, available: false },
  { id: 5, price: 10.5, available: false },
  { id: 2, price: 13, available: false } ]
*/

console.log(books);
/* Valeur attendue :
[ { id: 1, price: 10.5, available: true },
  { id: 2, price: 13, available: false },
  { id: 3, price: 8.5, available: false },
  { id: 4, price: 20.75, available: true },
  { id: 5, price: 10.5, available: false } ]
*/