function cycleText(id, items, fromIndex) {
    var toIndex = (fromIndex + 1) % items.length;
    transitionOutText(id, items, fromIndex, toIndex, 0);
}

function transitionOutText(id, items, fromIndex, toIndex, currentChar) {
    var garbage = "";
    for(var i = 0; i < currentChar; i++) {
        garbage += getGarbageCharacter();
    }
    $(id).text(garbage + items[fromIndex].substring(currentChar + 1));

    if(currentChar < items[fromIndex].length) {
        setTimeout(() => {
            transitionOutText(id, items, fromIndex, toIndex, currentChar + 1);
        }, 10);
    }
    else {
        setTimeout(() => {
            transitionInText(id, items, fromIndex, toIndex, 0);
        }, 10);
    }
}

function transitionInText(id, items, fromIndex, toIndex, currentChar) {
    var garbage = "";
    for(var i = currentChar + 1; i < items[toIndex].length; i++) {
        garbage += getGarbageCharacter();
    }
    $(id).text(items[toIndex].substring(0, currentChar + 1) + garbage);

    if(currentChar < items[toIndex].length) {
        setTimeout(() => {
            transitionInText(id, items, fromIndex, toIndex, currentChar + 1);
        }, 10);
    }
    else {
        setTimeout(() => {
            cycleText(id, items, toIndex);
        }, 5000);
    }
}

function getGarbageCharacter() {
    var chars = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '/', '+', '=', '>', '<'];
    return chars[Math.floor(Math.random() * chars.length)];
}