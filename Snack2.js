const hamburger = { 
    name: "Cheese Burger", 
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // 
console.log(secondBurger.ingredients[0]); // 



// P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// hamburger  ingredients: ["Salad"]
// secondBurger ingredients: ["Salad"]

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// hamburger: { name: "Cheese Burger", weight: 250, ingredients: ["Salad", "Meat", "Bread", "Tomato"] }
// secondBurger: { name: "Cheese Burger", weight: 250, ingredients: ["Salad", "Meat", "Bread", "Tomato"] }