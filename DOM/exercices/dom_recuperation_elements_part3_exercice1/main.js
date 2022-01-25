// 1
let exo1 = document.querySelector("h2")
console.log(exo1);

// 2
exo1.innerHTML = "Exercice 1"
console.log(exo1);
// 3
let exo3 = document.querySelector("h2").nextElementSibling
exo3.innerHTML = "Exercice 1"
console.log(exo3);

// 4
let exo4 = document.querySelector("section")
console.log(exo4.id);

// 5
let exo5 = document.querySelector("h1")
console.log(exo5.className);
console.log(exo5.classList);

// 6
let exo6 = document.querySelectorAll("h1")
exo6.forEach(element => {
    console.log(element.classList)
})

// 7
let exo7 = document.querySelector("input")
console.log(exo7.attributes);

// 8
console.log(exo7.getAttribute("type"));

// 9
let exo9 = document.querySelector("#inputPassword3")
exo9.setAttribute("type", "password")
console.log(exo9);
// 10
exo9.setAttribute("type", "color")
console.log(exo9);