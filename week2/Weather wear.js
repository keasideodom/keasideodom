function getClothingSuggestion(temperature) {
    if (temperature >= 25) {
        return "Wear shorts and a t-shirt.";
    } else if (temperature >= 18) {
        return "Wear jeans and a light sweater.";
    } else if (temperature >= 10) {
        return "Wear a jacket and long pants.";
    } else if (temperature >= 0) {
        return "Wear a warm coat, scarf, and gloves.";
    } else {
        return "Bundle up with a heavy coat, hat, and gloves!";
    }
}


