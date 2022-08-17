# Buchstabieralphabet-Bookmarklet

**Bookmarklet, welches einen markierten Text ins deutsche Buchstabieralphabet „übersetzt“.**

## Benutzung

Erstelle einen Link in deinen Bookmarks und nenne ihn beispielsweise „Markierten Text buchstabieren“. Als Adresse gibst du das JavaScript unten ein. Markiere dann einen Text auf einer beliebigen Seite und klicke das neu erstellte Lesezeichen. Fertig. 😀

## Bookmarklet-Link

```js
javascript:(function()%7Bconst%20spellingAlphabet%3D%7Ba%3A%22Aachen%22%2C%C3%A4%3A%22Umlaut%20Aachen%22%2Cb%3A%22Berlin%22%2Cc%3A%22Chemnitz%22%2Cd%3A%22D%5Cxfcsseldorf%22%2Ce%3A%22Essen%22%2Cf%3A%22Frankfurt%22%2Cg%3A%22Goslar%22%2Ch%3A%22Hamburg%22%2Ci%3A%22Ingelheim%22%2Cj%3A%22Jena%22%2Ck%3A%22K%5Cxf6ln%22%2Cl%3A%22Leipzig%22%2Cm%3A%22M%5Cxfcnchen%22%2Cn%3A%22N%5Cxfcrnberg%22%2Co%3A%22Offenbach%22%2C%C3%B6%3A%22Umlaut%20Offenbach%22%2Cp%3A%22Potsdam%22%2Cq%3A%22Quickborn%22%2Cr%3A%22Rostock%22%2Cs%3A%22Salzwedel%22%2C%C3%9F%3A%22Eszett%22%2Ct%3A%22T%5Cxfcbingen%22%2Cu%3A%22Unna%22%2C%C3%BC%3A%22Umlaut%20Unna%22%2Cv%3A%22V%5Cxf6lklingen%22%2Cw%3A%22Wuppertal%22%2Cx%3A%22Xanten%22%2Cy%3A%22Ypsilon%22%2Cz%3A%22Zwickau%22%2C%220%22%3A%22Null%22%2C%221%22%3A%22Eins%22%2C%222%22%3A%22Zwei%22%2C%223%22%3A%22Drei%22%2C%224%22%3A%22Vier%22%2C%225%22%3A%22F%5Cxfcnf%22%2C%226%22%3A%22Sechs%22%2C%227%22%3A%22Sieben%22%2C%228%22%3A%22Acht%22%2C%229%22%3A%22Neun%22%2C%22'%22%3A%22Apostroph%22%2C%22!%22%3A%22Ausrufezeichen%22%2C'%22'%3A%22Anf%5Cxfchrungszeichen%20oben%22%2C%22%23%22%3A%22Raute%20(Doppelkreuz)%22%2C%22%24%22%3A%22Dollarzeichen%22%2C%22%26%22%3A%22kaufm%5Cxe4nnisches%20Und%22%2C%22(%22%3A%22%5Cxf6ffnende%20Klammer%22%2C%22)%22%3A%22schlie%5Cxdfende%20Klammer%22%2C%22*%22%3A%22Sternchen%22%2C%22%2C%22%3A%22Komma%22%2C%22.%22%3A%22Punkt%22%2C%22%3A%22%3A%22Doppelpunkt%22%2C%22%3B%22%3A%22Strichpunkt%22%2C%22%3C%22%3A%22Kleiner-als-Zeichen%22%2C%22%3D%22%3A%22Gleichheitszeichen%22%2C%22%3E%22%3A%22Gr%5Cxf6%5Cxdfer-als-Zeichen%22%2C%22%40%22%3A%22At-Zeichen%22%2C%22%2F%22%3A%22Schr%5Cxe4gstrich%20(Slash)%22%2C%22%5C%5C%22%3A%22umgekehrter%20Schr%5Cxe4gstrich%20(Backslash)%22%2C%22%25%22%3A%22Prozentzeichen%22%2C%22%2B%22%3A%22Pluszeichen%22%2C%22%3F%22%3A%22Fragezeichen%22%2C%22%5B%22%3A%22%5Cxf6ffnende%20eckige%20Klammer%22%2C%22%5D%22%3A%22schlie%5Cxdfende%20eckige%20Klammer%22%2C%22%7B%22%3A%22%5Cxf6ffnende%20geschweifte%20Klammer%22%2C%22%7D%22%3A%22schlie%5Cxdfende%20geschweifte%20Klammer%22%2C%22%7C%22%3A%22vertikaler%20Strich%22%7D%3Bvar%20highlightedText%3Dwindow.getSelection().toString().trim()%2CcleanedText%3DhighlightedText.toLowerCase()%2CoutputText%3D%22%5Cu201E%22%2BhighlightedText%2B%22%5Cu201C%20buchstabiert%3A%5Cn%5Cn%22%3BcleanedText.split(%22%22).forEach(function(a)%7B%22%20%22%3D%3Da%3FoutputText%2B%3D%22%5Cn-%20Leerzeichen%20-%5Cn%5Cn%22%3AoutputText%2B%3D%22%5Cu201E%22%2Ba.toUpperCase()%2B%22%5Cu201C%20wie%20%22%2B(spellingAlphabet%5Ba%5D%7C%7Ca)%2B%22%5Cn%22%7D)%2Calert(outputText)%7D)()%3B
```



