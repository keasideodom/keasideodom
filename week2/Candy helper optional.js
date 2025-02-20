const boughtCandyPrices = [];

function addCandy(candyType, weight) {
    let pricePerGram;
    
    switch (candyType) {
        case 'sweet':
            pricePerGram = 0.5;
            break;
        case 'chocolate':
            pricePerGram = 0.7;
            break;
        case 'toffee':
            pricePerGram = 1.1;
            break;
        case 'chewing-gum':
            pricePerGram = 0.03;
            break;
        default:
            console.log('Unknown candy type');
            return;
    }
    
    const price = pricePerGram * weight;
    boughtCandyPrices.push(price);
}
