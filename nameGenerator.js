var firstNames = [],
    secondNames = [],
    display1 = setInterval(function () {
        createMessage()
    }, 100),
    display2;

firstNames = ['Little', 'Heavy', 'Big', 'Total', 'Howling', 'Erronious', 'Main', 'Double', 'Random', 'Fuzzy', 'Null', 'Bad', 'Noisy', 'Nasty', 'The', 'Hot', 'Dangerous', 'Ugly', 'Trojan', 'Wrigglin\'', 'Angry', 'Short', 'Primary', 'Confused'];
secondNames = ['Syntax', 'Mouse', 'Java', 'Progress', 'Indent', 'Terminal', 'Entry Point', 'Bug', 'Integer', 'String', 'Click', 'Code', 'Logic', 'Pointer', 'Function', 'Control', 'Key', 'Shift', 'Shell', 'Virus', 'Worm', 'Minus', 'Operator', 'Exception', 'Number', 'Dev', 'Server', 'Client'];


function getRandomItem(array) {
    var rnd = Math.floor(Math.random() * array.length);
    return array[rnd];
}

function generateName() {
    var firstName = getRandomItem(firstNames),
        secondName = getRandomItem(secondNames);
    return firstName + ' ' + secondName;
}

function createMessage() {
    document.getElementById('message').innerHTML = generateName();
}

function turnOn() {
    display2 = setInterval(function () {
        createMessage()
    }, 100);
    document.getElementById("stop").style.visibility = "visible";
    document.getElementById("generate").style.visibility = "hidden";
}

function turnOff() {
    window.clearInterval(display1);
    window.clearInterval(display2);
    document.getElementById("stop").style.visibility = "hidden";
    document.getElementById("generate").style.visibility = "visible";
    console.log( document.getElementById('message').innerHTML = generateName());

}