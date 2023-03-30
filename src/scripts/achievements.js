window.onload = () => {
    let mainWindow = document.getElementById("mainWindow");
    function addItem(name, description) {
        mainWindow.innerHTML += `<br><ul><li><h2>${name}</h2><b>${description}</b></li></ul>`;
    }

    if (getLocalStorage("a1")) {
        addItem("Who's the monster™ now?", `
            Het drinken van energie drank is misschien wel een van de slechtste dingen.<br>
            Het bevat veelte veel cafeïne en suiker. De nummers per blik energie drank is veel<br> hoger dan wat veilig is voor een kind
            en bij sommige merken zelfs te hoog voor volwassenen.<br>
            Dit kan oplopen naar suikerziektes en zelfs hartstilstand.<br>
            `);
    }
    if (getLocalStorage("a2")) {
        addItem("Te fanatiek", `
            Je ging twee keer achter elkaar sporten, het is belangrijk om genoeg<br>tijd te nemen om je spieren te laten herstellen.
        `);
    }
    if (getLocalStorage("a3")) {
        addItem("We waarderen de motivatie", `
        We waarderen dat je graag wilt studeren, maar lange periodes van leren zonder pauze kan leiden tot<br>concentratieproblemen, vermoeidheid en hoofdpijn.`);
    }
    if (getLocalStorage("a4")) {
        addItem("Cheat Day 1", `Als je dan toch een burger moet kiezen, dan is de Whopper Burger van de Burger King<br>
        de 'gezondere' optie. Die bevat namelijk minder kcal dan de Big Mac.`);
    }
    if (getLocalStorage("a5")) {
        addItem("Cheat Day 2", `Als je dan toch een burger neemt, neem dan degene met minder kcal.`);
    }
}
