const spellingAlphabet = {
    'a': 'Aachen',
    'ä': 'Umlaut Aachen',
    'b': 'Berlin',
    'c': 'Chemnitz',
    'd': 'Düsseldorf',
    'e': 'Essen',
    'f': 'Frankfurt',
    'g': 'Goslar',
    'h': 'Hamburg',
    'i': 'Ingelheim',
    'j': 'Jena',
    'k': 'Köln',
    'l': 'Leipzig',
    'm': 'München',
    'n': 'Nürnberg',
    'o': 'Offenbach',
    'ö': 'Umlaut Offenbach',
    'p': 'Potsdam',
    'q': 'Quickborn',
    'r': 'Rostock',
    's': 'Salzwedel',
    'ß': 'Eszett',
    't': 'Tübingen',
    'u': 'Unna',
    'ü': 'Umlaut Unna',
    'v': 'Völklingen',
    'w': 'Wuppertal',
    'x': 'Xanten',
    'y': 'Ypsilon',
    'z': 'Zwickau',

    '0': 'Null',
    '1': 'Eins',
    '2': 'Zwei',
    '3': 'Drei',
    '4': 'Vier',
    '5': 'Fünf',
    '6': 'Sechs',
    '7': 'Sieben',
    '8': 'Acht',
    '9': 'Neun',

    "'": 'Apostroph',
    '!': 'Ausrufezeichen',
    '"': 'Anführungszeichen oben',
    '#': 'Raute (Doppelkreuz)',
    '$': 'Dollarzeichen',
    '&': 'kaufmännisches Und',
    '(': 'öffnende Klammer',
    ')': 'schließende Klammer',
    '*': 'Sternchen',
    ',': 'Komma',
    '.': 'Punkt',
    ':': 'Doppelpunkt',
    ';': 'Strichpunkt',
    '<': 'Kleiner-als-Zeichen',
    '=': 'Gleichheitszeichen',
    '>': 'Größer-als-Zeichen',
    '@': 'At-Zeichen',
    '/': 'Schrägstrich (Slash)',
    '\\': 'umgekehrter Schrägstrich (Backslash)',
    '%': 'Prozentzeichen',
    '+': 'Pluszeichen',
    '?': 'Fragezeichen',
    '[': 'öffnende eckige Klammer',
    ']': 'schließende eckige Klammer',
    '{': 'öffnende geschweifte Klammer',
    '}': 'schließende geschweifte Klammer',
    '|': 'vertikaler Strich',
};

var highlightedText = window.getSelection().toString().trim();
var cleanedText = highlightedText.toLowerCase();
var outputText = '„' + highlightedText + "“ buchstabiert:\n\n";

cleanedText.split('').forEach(function(char) {
    if (' ' == char) {
        outputText += "\n- Leerzeichen -\n\n";
    } else {
        outputText += '„' + char.toUpperCase() + '“ wie ' + (spellingAlphabet[char] || char) + "\n";
    }
});

alert(outputText);
