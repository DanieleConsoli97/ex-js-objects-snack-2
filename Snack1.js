const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); 

console.log(secondBurger.name ); 
//Vengono viasualizzati in entrambi i console.log Double Cheese Burger perchè in questo caso non viene creato un nuovo oggetto 
// ma si punta all'oggetto esistente 

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

// Double Cheese

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// { name: "Cheese Burger", weight: 250 }