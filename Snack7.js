const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: "Main Street",
            prova: [1,2,3],
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            },
        },
        isOpen: true,
    },
};

function deepCopy(obj) {
    if (typeof obj !== "object") {
        return obj;
    }
    const copy = {};
    for (const key in obj) {
        const value = obj[key];
        if (typeof value !== "object") {
            copy[key] = value;
        } else {
            copy[key] = deepCopy(value);
        }
    }
    return copy;
}

const chefcopy = deepCopy(chef);

console.log("copy1",chefcopy);

chefcopy.makeBurger(2)



function deepCopy1(obj) {
    if (typeof obj !== "object") {
        return obj;
    }
    const copy = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        } else {
            copy[key] = obj[key];
        }
    }
    return copy;
}


const chefcopy2 = deepCopy1(chef);
console.log("copy2",chefcopy2);
console.log(chefcopy2.restaurant.address.prova[0])
console.log(chefcopy.restaurant.address.prova[0])
console.log(Array.isArray(chefcopy2.restaurant.address.prova))
console.log(Array.isArray(chefcopy.restaurant.address.prova))