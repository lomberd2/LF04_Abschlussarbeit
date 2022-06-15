function lkRechnung() {
    const warenwertInput = document.getElementById("warenwertInput");
    const plzGebietSelect = document.getElementById("plzGebietInput");
    const expressCheckbox = document.getElementById("expressInput");
    const lieferkostenOutput = document.getElementById("lieferkostenOutput");

    const warenwert = parseFloat(warenwertInput.value);
    const plzGebiet = plzGebietSelect.value;
    const express = expressCheckbox.checked;

    console.log();

    if(!warenwert || plzGebiet === "-1") {
        lieferkostenOutput.innerHTML = "<b>Bitte alle Felder ausfüllen!</b>";
        return null;
    }

    let lieferkosten, lieferkostenProzent = 0;

    switch (plzGebiet) {
        case "1": lieferkostenProzent = 0.05; break;
        case "2": lieferkostenProzent = 0.05; break;
        case "3": lieferkostenProzent = 0.07; break;
        case "4": lieferkostenProzent = 0.07; break;
        case "5": lieferkostenProzent = 0.07; break;
        case "6": lieferkostenProzent = 0.09; break;
        case "7": lieferkostenProzent = 0.09; break;
        default: {
            lieferkostenProzent = 0.11;
        }
    }

    lieferkosten = warenwert * lieferkostenProzent;

    //Wenn Express ausgewählt ist, dann 20% + auf lieferkosten
    if (express) {
        lieferkosten = lieferkosten * 1.2;
    }

    //Kaufmännisch runden
    lieferkosten = Math.round(lieferkosten * 100);

    //Komma setzten für Korrekten wert (Schritt drüber, mal 100)
    let lieferString = lieferkosten.toString().split("");
    let outputString = "";

    for(let i = 0; i < lieferString.length; i++) {

        if (i === lieferString.length - 2) {
            //Wenn erstes Zeichen mit komma beginnt, dann "0" setzten
            if (i === 0) {
                outputString += "0";
            }

            outputString += ",";
            outputString += lieferString[i].toString();
        } else {
            outputString += lieferString[i].toString();
        }
    }

    //Output
    lieferkostenOutput.innerHTML =  outputString + " €";
}


document.getElementById("calculateButton").addEventListener("click", lkRechnung);