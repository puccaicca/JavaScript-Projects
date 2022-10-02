function my_Dictionary() { // KVP - Key value pair
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Woof!"
    };
    delete Animal.Sound; // delete operator - will make it undefined
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}