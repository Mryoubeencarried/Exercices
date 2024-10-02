// Solution No.1
// const ButtonHandler = {
//     getRandom: function () {
//         return Math.floor(Math.random() * 10 + 1);
//     },
//     showValue: function () {
//         const randomValue = this.getRandom();
//         const display = document.getElementById("random-display");
//         display.textContent = `Valeur aléatoire : ${randomValue}`;
//     },
//     addHandler: function (element) {     
//         /** En remplacant this.showvalue  par une fonction arrow, on force que la création de la fonction soient faite par buttonhandler et donc que le this target buttonhandler. */                     
//         element.addEventListener("click", () => this.showValue());  
//     },
// };

// const button = document.getElementById("btn");  
// ButtonHandler.addHandler(button);              /** Button est le this de addhandler, qui est donc un element html et non pas un buttonhandler. Donc appeler this.getrandom est pas fait sur buttonhandler*/



// Solution No.2
const ButtonHandler = {
   
    showValue: function (getRandom) {
        const randomValue = getRandom();
        const display = document.getElementById("random-display");
        display.textContent = `Valeur aléatoire : ${randomValue}`;
    },
    addHandler: function (element, randomfct) {                      
        element.addEventListener("click", () => this.showValue(randomfct));  
    },
};
const getRandom =  function () { return Math.floor(Math.random() * 10 + 1); };
const button = document.getElementById("btn");  
ButtonHandler.addHandler(button, getRandom);