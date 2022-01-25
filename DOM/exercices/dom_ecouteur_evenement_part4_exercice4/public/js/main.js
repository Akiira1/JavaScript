// 1
let exo1 = document.getElementsByTagName("input")[0]
exo1.addEventListener("focus", () => {
    exo1.style.backgroundColor = "blue";
})


// 2
let exo2 = document.getElementsByTagName("input")[1]
exo2.addEventListener("focus", () => {
    exo2.style.backgroundColor = "blue";
})
exo2.addEventListener("focusout", () => {
    exo2.style.backgroundColor = "white";
})


// 3
let p1 = document.getElementsByClassName("premierParagraphe")[0]
let p2 = document.getElementsByClassName("secondParagraphe")[0]
let p3 = document.getElementsByClassName("dernierParagraphe")[0]

document.getElementsByTagName("button")[0].addEventListener("click", () => {
    p3.textContent = p2.textContent
    p1.textContent = p2.textContent
})


// 4
let exo4 = document.getElementById("exo4")
let exo4Input = document.getElementsByTagName("input")[2]

document.getElementsByTagName("button")[1].addEventListener("click", () => {
    exo4.textContent = exo4Input.value
})

// 5
let exo5 = document.getElementsByClassName("img-responsive")[0]
let source = document.getElementsByTagName("p")[4].textContent

document.getElementsByTagName("button")[2].addEventListener("click", () => {
    exo5.src = source.slice(9, source.length)
})

// 6
let exo6 = document.getElementsByClassName("img-responsive")[1]
let exo6Bis = document.getElementsByClassName("img-responsive")[2]
let e 

exo6.addEventListener("click", () => {
    e =  exo6.attributes[1].textContent
})
exo6Bis.addEventListener("click", () => {
    exo6Bis.setAttribute("src", e)
})


// 7

let texte1 = document.getElementsByTagName("p")[5]
let texte2 = document.getElementsByTagName("p")[6]
let switch1 = document.getElementsByTagName("button")[3]
let i 
switch1.addEventListener("click", () => {
    i = texte1.textContent
    texte1.textContent = texte2.textContent
    texte2.textContent = i
})

