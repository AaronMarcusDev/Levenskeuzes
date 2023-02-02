// MINILIB NEEDS TO BE IMPORTED IN HTML FIRST:
// <script src="../scripts/minilib.js"></script>

// Example functionality

if (!supportsLocalStorage()) alert('ERROR: Please use a browser that supports localStorage');

let counter = localStorage.getItem('counter') || 0;
let level = localStorage.getItem('level') || 0;

window.onload = () => {
    setLocalStorage('level', 69);
    makeNewParent("div", "container");
    makePara("container", `Counter: ${counter}`);
    replacePara("level", `Level: ${getLocalStorage('level') || 0}`);
}

function makePara(parentID, text) {
    makeNewChild("p", parentID, "para");
    document.getElementById("para").innerHTML = text;
}

function replacePara(parentID, text) {
    var p = document.createElement("p");
    p.innerHTML = text;
    document.getElementById(parentID).replaceChild(p, document.getElementById(parentID).firstChild);
}

function textOne() {
    counter++;
    if (counter === 0) makePara("container", `This is text ${counter}`);
    else replacePara("container", `Counter: ${counter}`);
    localStorage.setItem('counter', counter);
}

function clearCounter() {
    counter = 0;
    replacePara("container", "Counter: 0");
    localStorage.setItem('counter', counter);
}