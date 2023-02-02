// Library
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

// Example functionality
let counter = 0;

window.onload = () => {
    makeNewParent("div", "container");
    makePara("container", "This is text 0");
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
    if (counter === 0) makePara("container", `This is text ${counter}`);
    else replacePara("container", `This is text ${counter}`);
    counter++;
}