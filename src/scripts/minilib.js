// DOM Manipulation
function makeNewParent(type, id=null) {
    var parent = document.createElement(type);
    if (id !== null) parent.id = id;
    document.body.appendChild(parent);
}

function makeNewChild(Element, Parent, Child) {
    var child = document.createElement(Element);
    child.id = Child;
    document.getElementById(Parent).appendChild(child);
}

let setInnerHTML = (id, text) => document.getElementById(id).innerHTML = text;

// Local Storage
function setLocalStorage(key, value) {
    window.localStorage.setItem(key, value);
}

function getLocalStorage(key) {
    return window.localStorage.getItem(key);
}

function removeLocalStorage(key) {
    window.localStorage.removeItem(key);
}

function clearLocalStorage() {
    window.localStorage.clear();
}

function supportsLocalStorage() {
    return typeof Storage !== 'undefined';
}

// Example functionality

if (!supportsLocalStorage()) alert('ERROR: Please use a browser that supports localStorage');

let counter = localStorage.getItem('counter') || 0;

window.onload = () => {
    makeNewParent("div", "container");
    makePara("container", `This is text ${counter}`);
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
    else replacePara("container", `This is text ${counter}`);
    localStorage.setItem('counter', counter);
}

function clearCounter() {
    counter = 0;
    replacePara("container", `This is text ${counter}`);
    localStorage.setItem('counter', counter);
}