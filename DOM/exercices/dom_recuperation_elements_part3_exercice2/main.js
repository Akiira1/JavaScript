// 1
let exo1 = document.querySelector("h1")
exo1.innerHTML = "Les attributs class et id"
console.log(exo1);

// 2
let exo2 = document.querySelector("h2")
exo2.innerHTML = "Exercice 2 partie A"

// 3
let exo3 = document.querySelectorAll("h2")[1]
exo3.innerHTML = "Exercice 2 partie B"

// 4
let exo4 = document.querySelector("p")
exo4.innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> "

// 5
let exo5 = document.querySelectorAll("p")[1]
exo5.innerHTML = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide"

// 6
exo1.setAttribute("id", "bigTitle")

// 7
let exo7 = document.querySelector("div")
exo7.setAttribute("class", "content")

// 8
let exo8 = document.querySelectorAll("h2")
exo8.forEach(element => {
    element.setAttribute("class", "title")
})
// 9
let exo9 = document.querySelectorAll("p")
exo9.forEach(element => {
    element.setAttribute("class", "text")
})

// 10
let exo10 = document.querySelector("section")
exo10.setAttribute("class", "margin-bottom, border-black padding")

// 11
let exo11 = document.querySelectorAll("section")[1]
exo11.setAttribute("class", "margin-top, border-black padding")

// 12
let exo12 = document.querySelector("section>div")
exo12.setAttribute("style", "background-color: blue; border: 1px solid red; height: 20px; width: 20px;")
console.log(exo12);
