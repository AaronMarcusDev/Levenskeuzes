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