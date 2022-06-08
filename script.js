function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {

        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

function show() {
    var arr = ["Joseph", "Mary", "Tedan", "Imam", "Chiamaka", "Isreal"];
    var arr1 = shuffleArray(arr)

    document.write(arr1)
}