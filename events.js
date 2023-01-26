/********  Variablen **********/
const btn = document.getElementById("trigBtn");
// let btn = document.body.children[0]; // hier bestimme ich den Trigger als "Prozeduale Prograrmmierung", die Headline Kind array 0
let appStatus = true;

/********  Event-Listener **********/

// Webseite geladen --> auf (Anfangs)-Zustand umschalten
// window.addEventListener("wheel", toggleAppStatus);
window.addEventListener("load", toggleAppStatus); // damit gesichert ist, dass alle nötigen Bestandteile geladen sind und im Event-Listener aktiviert werden.


// Klick auf Btn  --> Zustand umschalten
btn.addEventListener("click",toggleAppStatus);
// btn.addEventListener("mouseenter", toggleAppStatus)



/********  Business-Logic | Toggle **********/

// Wechselschalter:  true = !false | false = !true
function toggleAppStatus() {
    appStatus = !appStatus; // "!" weist den Gegenteil der Variablen zu (Wechselschalter)
    // output(appStatus); // wirft in der Konsole den Status aus true || false, nur zur Veranschaulichung
    updateView();  // wird unten benötigt, um die Beschriftung zu ändern
}

/********  View-Schicht **********/

// Modul: Update der View-Schicht | Test:
// .. View folgt status
function updateView() {
    if (appStatus) {
        switchClassName("night");
        switchBtnTxt("day");
    } else {
        switchClassName("day");
        switchBtnTxt("night");
    }
}

// Modul: Umschaltung Klassenamen | Test:
// switchClassName("night");
// switchClassName("day");
function switchClassName(modeStr) {  

     // Kritik: wenig robust, da starre Indexierung
    document.body.className = modeStr; 
    document.body.children[0].className = modeStr;
    document.body.children[1].className = modeStr;

}

// Modul: Umschaltung BtnTxt | Test:
// switchBtnTxt("night");
// switchBtnTxt("day");
function switchBtnTxt(modeStr) {
    btn.innerHTML = modeStr;
 }

/* Tools */
function output(outputData) {
    console.log(outputData);
}