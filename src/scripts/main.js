// onPageload
window.onload = () => {
    // clearLocalStorage();
    // Check if localStorage is supported
    if (!supportsLocalStorage()) {
        swal("ERROR: Please use a browser that supports localStorage");
        swal("The game won't function properly without localStorage. Please try again in another browser.");
    }

    makeNewParent("div", "container");
    replacePara("level", `Level: 1`);
    if (!getLocalStorage("highScore")) localStorage.setItem("highScore", 1);
    replacePara("highScore", `Highscore: ${localStorage.getItem("highScore")}`);

    Level1();
};

function death(message) {
    let timerInterval
    swal({
        title: "Level gefaald",
        text: message,
        icon: "error",
        timer: 6000,
        timerProgressBar: true,
        button: "Oké (sluit automatisch)",
        didOpen: () => {
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
    Level1();
}

function achievement(name, preInfo) {
    let timerInterval
    swal({
        title: "Nieuwe prestatie behaald!",
        text: `${preInfo}De prestatie '${name}' is nu te vinden bij de prestaties! `,
        icon: "info",
        timer: 6000,
        timerProgressBar: true,
        button: "Oké (sluit automatisch)",
        didOpen: () => {
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        Level1();
    })
}

function replacePara(parentID, text) {
    var p = document.createElement("p");
    p.innerHTML = text;
    document
        .getElementById(parentID)
        .replaceChild(p, document.getElementById(parentID).firstChild);
}

function initButtons(left, right) {
    leftOption = document.getElementById("leftOption");
    rightOption = document.getElementById("rightOption");
    leftOption.textContent = left;
    rightOption.textContent = right;
}

// Levels
function Level1() {
    let currentRound = 1;

    leftOption = document.getElementById("leftOption");
    rightOption = document.getElementById("rightOption");

    initButtons("Ga naar de sportschool", "Drink een energy drankje");

    leftOption.onclick = function () {
        // l1
        if (currentRound === 1) {
            initButtons("Ga naar de sportschool", "Neem een dag rust");
            // l2
        } else if (currentRound === 2) {
            if (!getLocalStorage("a2")) {
                setLocalStorage("a2", true);
                achievement("Te fanatiek", "Je ging twee keer achter elkaar sporten, het is belangrijk om genoeg tijd te nemen om je spieren te laten herstellen.");
            } else {
                death("Je ging twee keer achter elkaar sporten, het is belangrijk om genoeg tijd te nemen om je spieren te laten herstellen.");
            }
            // l3
        } else if (currentRound === 3) {
            initButtons("Kijk nog een aflevering van je favoriete serie", "Ga op tijd naar bed");
            // l4
        } else if (currentRound === 4) {
            death("Slaap is heel belangrijk voor je gezondheid, dus de beter optie was om gewoon op tijd naar bed te gaan.")
        }
        currentRound++;
    }

    rightOption.onclick = function () {
        // r1
        if (currentRound === 1) {
            if (!getLocalStorage("a1")) {
                setLocalStorage("a1", true);
                achievement("Who's the monster™ now", "Je dronk een blikje energy, dit is vreselijk slecht voor je gezondheid. ");
            } else {
                death("Je dronk een blikje energy, dit is vreselijk slecht voor je gezondheid.");
            }

            // r2
        } else if (currentRound === 2) {
            initButtons("Eet een gezonde maaltijd", "Eet fast food");
            // r3
        } else if (currentRound === 3) {
            death("Fast food is slecht voor je gezondheid, omdat het veel frituurvet en zout bevat.");
            // r4
        } else if (currentRound === 4) {
            Level2();
        }
        currentRound++;
    }
}

function Level2() {
    if (parseInt(getLocalStorage("highScore")) < 2) {
        setLocalStorage("highScore", 2);
        replacePara("highScore", `Highscore: ${localStorage.getItem("highScore")}`);
    }

    let currentRound = 1;

    leftOption = document.getElementById("leftOption");
    rightOption = document.getElementById("rightOption");

    initButtons("Eet een appel", "Eet een zak chips");

    leftOption.onclick = function () {
        // l1
        if (currentRound === 1) {
            initButtons("Neem een salade mee naar het werk", "Haal fastfood voor lunch");
            // l2
        } else if (currentRound === 2) {
            initButtons("Kook een gezonde maaltijd", "Bestel afhaalmaaltijden");
            // l3
        } else if (currentRound === 3) {
            initButtons("Drink water", "Drink frisdrank");
            // l4
        } else if (currentRound === 4) {
            Level3();
        }
        currentRound++;
    }

    rightOption.onclick = function () {
        // r1
        if (currentRound === 1) {
            death("Chips zijn een ongezonde snack die veel vet, zout en suiker bevatten.");
            // r2
        } else if (currentRound === 2) {
            death("Fastfood is slecht voor je gezondheid en kan leiden tot gewichtstoename en andere gezondheidsproblemen op de lange termijn.");
            // r3
        } else if (currentRound === 3) {
            death("Afhaalmaaltijden bevatten vaak veel vet, zout en suiker, wat slecht is voor je gezondheid op de lange termijn.");
            // r4
        } else if (currentRound === 4) {
            death("Frisdrank is slecht voor je gezondheid, omdat het veel suiker bevat.");
        }
        currentRound++;
    }
}