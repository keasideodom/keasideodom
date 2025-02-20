// Assign a random amount of money to spend
let amountToSpend = Math.random() * 100;

// Array to store candy prices
let boughtCandy = [];

// Function to add candy to the array
function buyCandy(price) {
    boughtCandy.push(price);
}

// Function to check if more candy can be bought
function canBuyMoreCandy() {
    let totalSpent = 0;
    
    // Using a for loop to calculate total price
    for (let i = 0; i < boughtCandy.length; i++) {
        totalSpent += boughtCandy[i];
    }

    return totalSpent < amountToSpend;
}

// Buying some candy
buyCandy(10);
buyCandy(15);
buyCandy(20);

// Checking if more candy can be bought
if (canBuyMoreCandy()) {
    console.log("You can buy more, so please do!");
} else {
    console.log("Enough candy for you!");
}

// Alternative: Using a while loop to calculate totalSpent
function canBuyMoreCandyWhileLoop() {
    let totalSpent = 0;
    let i = 0;

    while (i < boughtCandy.length) {
        totalSpent += boughtCandy[i];
        i++;
    }

    return totalSpent < amountToSpend;
}

// Checking with while loop
if (canBuyMoreCandyWhileLoop()) {
    console.log("You can buy more, so please do!");
} else {
    console.log("Enough candy for you!");
}
