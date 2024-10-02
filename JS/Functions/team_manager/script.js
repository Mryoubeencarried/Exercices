const teams = [
    "Habs",
    "Lightning",
    "Maple Leafs",
    "Golden Knights",
    "Penguins"];


/* Var i est ici function scoped, donc possède 1 seule référence pour toute la fonction loadTeams() et donc garde le même i pour tout les eventlisteners 
 *  lorsqu'on sort de la fonction, ou i aurait une valeur de listItems.lengh.
 *  Remplacer var par let ou const car ceux-ci sont block-scoped, donc on une seule référence par block (par itération ici) et donc changent de valeur à chaque fois pour addeventlistener quand on sort de la fonction.
 * If you used var i without an IIFE or let, all of the click handlers would reference the same i, which would eventually be equal to listItems.length after the loop ends.
 * This is because var is function-scoped, and the event handler would "remember" the final value of i.
 *  */ 
function loadTeams() {
    const listItems = document.getElementsByClassName("team");
    for (var i = 0; i < listItems.length; i++) {             
        listItems[i].addEventListener("click", (e) => {      
            e.target.textContent = teams[i];
        });
    }
    document.getElementById("team-loader").disabled = true;
}

/** Ici il faut utiliser IIFE, car cela créé une nouvelle scope de function à chaque itération. Donc à chaque fois que la var i
 *  est passé à la fonction, copyI prend la valeur de i et ce copyI ayant le scope de la fonction IIFE et non de loadTeams(), sa valeur est donc unique
 *  a chaque itération pour addeventlistener. Utiliser (function (copyI) { ...  })(i); de cette facon crée une "closure" pour la variable i.
 */
function loadTeams() {
    const listItems = document.getElementsByClassName("team");
    for (var i = 0; i < listItems.length; i++) {
        (function (copyI) {
                listItems[copyI].addEventListener("click", (e) => {
                    e.target.textContent = teams[copyI];
                });
        })(i);
    }
    document.getElementById("team-loader").disabled = true;
}