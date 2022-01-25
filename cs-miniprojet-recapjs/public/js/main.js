// EXERCICE1
let h2Replace = document.getElementsByTagName("h2")[0]
console.log(h2Replace);
h2Replace.innerText = "le titre modifié"
h2Replace.style.color = "red"
h2Replace.className = "bg-primary"



// EXERCICE2
let button1 = document.getElementsByTagName("button")[0]
let button2 = document.getElementsByTagName("button")[1]
let button3 = document.getElementsByTagName("button")[2]
let button4 = document.getElementsByTagName("button")[3]
let button5 = document.getElementsByTagName("button")[4]
let button6 = document.getElementsByTagName("button")[5]

let section1 = document.querySelector("#section1")
let section2 = document.querySelector("#section2")
let section3 = document.querySelector("#section3")
let section4 = document.querySelector("#section4")
let section5 = document.querySelector("#section5")
let section6 = document.querySelector("#section6")
let section7 = document.querySelector("#section1")

button1.addEventListener("click", () => {
    section1.style.display = "block"
    section2.style.display = "none"
    section3.style.display = "none"
    section4.style.display = "none"
    section5.style.display = "none"
    section6.style.display = "none"
})

button2.addEventListener("click", () => {
    section1.style.display = "none"
    section2.style.display = "block"
    section3.style.display = "none"
    section4.style.display = "none"
    section5.style.display = "none"
    section6.style.display = "none"
})

button3.addEventListener("click", () => {
    section1.style.display = "none"
    section2.style.display = "none"
    section3.style.display = "block"
    section4.style.display = "none"
    section5.style.display = "none"
    section6.style.display = "none"
})

button4.addEventListener("click", () => {
    section1.style.display = "none"
    section2.style.display = "none"
    section3.style.display = "none"
    section4.style.display = "block"
    section5.style.display = "none"
    section6.style.display = "none"
})

button5.addEventListener("click", () => {
    section1.style.display = "none"
    section2.style.display = "none"
    section3.style.display = "none"
    section4.style.display = "none"
    section5.style.display = "block"
    section6.style.display = "none"
})

button6.addEventListener("click", () => {
    section1.style.display = "none"
    section2.style.display = "none"
    section3.style.display = "none"
    section4.style.display = "none"
    section5.style.display = "none"
    section6.style.display = "block"
})


// EXERCICE3
let vieuNom = document.getElementsByTagName("span")[0]
let newNom = document.getElementsByTagName("input")[0]
let btnChange = document.getElementsByTagName("button")[6]

btnChange.addEventListener("click", () => {
    vieuNom.innerText = newNom.value
    newNom.value = ""
})


// EXERCICE4
let blueSquare1 = document.getElementsByClassName("carreRouge")[0]
let blueSquare2 = document.getElementsByClassName("carreRouge")[1]
let btnChange2 = document.getElementsByTagName("button")[7]
let span1 = document.getElementsByTagName("span")[1]
let i = 0

btnChange2.addEventListener("click", () => {
    if (blueSquare1.style.display === "block") {
        blueSquare1.style.display = "none"
        blueSquare2.style.display = "block"
    }
    else if (blueSquare1.style.display === "none") {
        blueSquare1.style.display = "block"
        blueSquare2.style.display = "none"
    } i++
    span1.innerText = i
})

console.log(btnChange2);

// EXERCICE5

let addEggs = document.querySelector("#addEggs")
let divEggs = document.querySelector("#eggs")

addEggs.addEventListener("click", () => {
    let egg = document.createElement("img")
    egg.src = "./public/img/oeuf.png"
    egg.style.width = "10%"
    divEggs.appendChild(egg)
})

// EXERCICE6
// part1
let btnReponse = document.getElementById("btnReponse")
let reponseCalc = document.getElementById("reponseCalc")

btnReponse.addEventListener("click", () => {
    let total
    let premierNombre = document.getElementById('input1')
    let deuxiemmeNombre = document.getElementById('input2')
    if (premierNombre.value !== '' && deuxiemmeNombre.value !== '') {
        total = parseFloat(premierNombre.value) + parseFloat(deuxiemmeNombre.value);
        // return total;
        console.log(total);
    }
    reponseCalc.textContent = total;
});

console.log(btnReponse, reponseCalc);
// part2

let touches = document.querySelectorAll('.bouton');
touches = [...touches]
let listeKeycode = touches.map(touche => touche.dataset.key);
let ecran = document.querySelector('.ecran');


document.addEventListener('click', (e) => {
    let valeur = e.target.dataset.key;
    calculer(valeur)

})

let calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                let calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                let indexKeycode = listeKeycode.indexOf(valeur);
                let touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}
