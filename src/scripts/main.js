// Check if localStorage is supported
if (!supportsLocalStorage()) alert('ERROR: Please use a browser that supports localStorage');

// Global variables
let level = localStorage.getItem('level') || 0;

// onPageload
window.onload = () => {
    setLocalStorage('level', 69);
    makeNewParent("div", "container");
    makePara("container", `Counter: ${counter}`);
    replacePara("level", `Level: ${getLocalStorage('level') || 0}`);
    replacePara("health", "Health: 0");
    setLocalStorage("health", 0);
    setInnerHTML("gameWindow", "") // clear gameWindow
}

// Actions
function damage(damage) {
    setLocalStorage("health", parseInt(getLocalStorage('health')) - damage);
    replacePara("health", `Health: ${getLocalStorage('health')}`);
}

function heal(heal) {
    setLocalStorage("health", parseInt(getLocalStorage('health')) + heal);
    replacePara("health", `Health: ${getLocalStorage('health')}`);
}

// Example functions (Counter)
let counter = localStorage.getItem('counter') || 0;

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