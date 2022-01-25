// Pour l'exercice 2
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"


// 1 // 2
let div = document.querySelectorAll("div")[0].children

let div2 = [...div]

div2.forEach(element => {
    element.addEventListener("click",() => {
        element.textContent = element.textContent.toUpperCase()
    })
});



// 3
let tabEvent = ["border: 1px solid gold", "background-color: blue", "background-color: red", "border: 5px dotted gold"]

function getRandomInt() {
    return Math.floor(Math.random() * 4);
}
let btn = document.getElementsByTagName('input')[0]

btn.onclick = function () {
    div2.forEach(element => {
        element.style = tabEvent[getRandomInt()]
    });
}