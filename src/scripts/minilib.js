// DOM Manipulation
function makeNewParent(type, id = null) {
    var parent = document.createElement(type);
    if (id !== null) parent.id = id;
    document.body.appendChild(parent);
}

function makeNewChild(Element, Parent, Child) {
    var child = document.createElement(Element);
    child.id = Child;
    document.getElementById(Parent).appendChild(child);
}

let setInnerHTML = (id, text) => (document.getElementById(id).innerHTML = text);

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
    return typeof Storage !== "undefined";
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }