// Global
let counter = 0;

// Example functionality
function makePara(parentID, text) {
    var p = document.createElement("p");
    p.innerHTML = text;
    document.getElementById(parentID).appendChild(p);
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