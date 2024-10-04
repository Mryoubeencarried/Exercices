const arr = [1, 2, 3];
let res = arr.map((val, index, arr) => {
  return { value: val, index: index, array: arr };
});
console.log(res);
/*
[ { value: 1, index: 0, array: [ 1, 2, 3 ] }, 
  { value: 2, index: 1, array: [ 1, 2, 3 ] }, 
  { value: 3, index: 2, array: [ 1, 2, 3 ] } ] 
*/

// Exercice : implémenter notre propre fonction "myMap" qui se comporte comme la méthode "map" d'un Array JS

const testArray = [1,2,3];

Array.prototype.myMap = function(callback) {
    const tableau = [];                         //Créé un tableau vide qui sera retourné.
    for (let i = 0; i < this.length; i++) {     // Itère sur la taille du Array sur laquelle la fonction myMap est appelée.
      tableau.push(callback(this[i],i, this));  // Push le résultat de la fonction callback qui sera passé par l'usagé dans arr.mymap( function () { ... } ) dans le nouveau tableau
    }
    return tableau;                             // return le nouveau tableau
}


// Fonction callback défini dand myMap(  ...   ) , donc pour chaque élément de l'array, on return le format désiré d'affichage.
res = testArray.myMap((val, index, arr) => {
  return { value: val, index: index, array: arr };
});
console.log(res);
/*
[ { value: 1, index: 0, array: [ 1, 2, 3 ] }, 
  { value: 2, index: 1, array: [ 1, 2, 3 ] }, 
  { value: 3, index: 2, array: [ 1, 2, 3 ] } ] 
*/