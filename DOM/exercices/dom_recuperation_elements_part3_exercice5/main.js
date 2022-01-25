let softSkills = {
    Trello: '49%',
    Git: '87%',
    GitHub: '50%',
    Discord: '15%',
}

let titres = document.querySelectorAll("#liste-soft-skills > h2")

for (const key in softSkills) {
    titres.forEach(element => {
        if (element.textContent === key) {
            element.innerText += " : " + softSkills[key]
            let pourcentage = Number(softSkills[key].substring(0, softSkills[key].length - 1));
            if (pourcentage < 50) {
                element.style.backgroundColor = "red"
            } else if (pourcentage === 100) {
                element.style.backgroundColor = "gold"
            } else if (pourcentage > 50) {
                element.style.backgroundColor = "green"
            } else if (pourcentage === 50) {
                element.style.backgroundColor = "none"
            }
        }
    });
}






