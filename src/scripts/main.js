// Check if localStorage is supported
if (!supportsLocalStorage())
    alert("ERROR: Please use a browser that supports localStorage");

// Global variables
let level = localStorage.getItem("level") || 0;

// onPageload
window.onload = () => {
    makeNewParent("div", "container");
    // makePara("container", `Counter: ${counter}`);
    replacePara("level", `Level: ${getLocalStorage("level") || 0}`);
    replacePara("health", "Health: 1");
    setLocalStorage("health", 1);
    Level1();
};

// Actions
function damage(damage) {
    let health = parseInt(getLocalStorage("health"));
    if (health - damage < 1) {
        alert("You died :(");
        setLocalStorage("health", 1);
        replacePara("health", `Health: 1`);
    } else {
        setLocalStorage("health", parseInt(getLocalStorage("health")) - damage);
        replacePara("health", `Health: ${getLocalStorage("health")}`);
    }
}

function heal(heal) {
    setLocalStorage("health", parseInt(getLocalStorage("health")) + heal);
    replacePara("health", `Health: ${getLocalStorage("health")}`);
}

// Example functions (Counter)
let counter = localStorage.getItem("counter") || 0;

function makePara(parentID, text) {
    makeNewChild("p", parentID, "para");
    document.getElementById("para").innerHTML = text;
}

function replacePara(parentID, text) {
    var p = document.createElement("p");
    p.innerHTML = text;
    document
        .getElementById(parentID)
        .replaceChild(p, document.getElementById(parentID).firstChild);
}

function textOne() {
    counter++;
    if (counter === 0) makePara("container", `This is text ${counter}`);
    else replacePara("container", `Counter: ${counter}`);
    localStorage.setItem("counter", counter);
}

function clearCounter() {
    counter = 0;
    replacePara("container", "Counter: 0");
    localStorage.setItem("counter", counter);
}

function initButtons(left, right) {
    leftOption = document.getElementById("leftOption");
    rightOption = document.getElementById("rightOption");
    leftOption.textContent = left;
    rightOption.textContent = right;
}

// Levels
function Level1() {
    function roundTwo() {
        initButtons("Ga naar de sportschool", "Neem een dag rust");

        leftOption.addEventListener("click", function () {
            damage(1);
            // roundThree();
        });
        rightOption.addEventListener("click", function () {
            heal(1);
        });
    }

    function roundOne() {
        initButtons("Ga naar de sportschool", "Drink een energy blikje");

        leftOption.addEventListener("click", function () {
            heal(1);
            roundTwo();
        });
        rightOption.addEventListener("click", function () {
            damage(parseInt(getLocalStorage("health")));
        });
    }

    roundOne();
}
