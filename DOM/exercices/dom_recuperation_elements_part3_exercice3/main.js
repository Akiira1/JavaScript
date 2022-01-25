let myObject = {
    nom: 'nicolas',
    age: 18,
}

// 1
let exo1 = document.querySelector("#object").children;
myElements = Array.from(exo1)
console.log(myElements);
// 2
let newArray = Object.keys(myObject).map(key => [key, myObject[key]])
console.log(newArray);

// correction

// ### 3. Créer une boucle qui va parcourir toutes les propriétés contenu dans ton object et qui pour chacune d'elle fait un console.log de la propriétéµ
newArray.forEach(element => console.log(element[1]))
// let i = 0
// for (const elem in myObject) {
//     if (Object.hasOwnProperty.call(myObject, elem)) {
//         console.log(`${myObject[elem]}`);
//     }
//     i++
// }

// ### 4. Efface ton console.log, trouve un moyen d'aller dans ton objet récupéré la valeur de chaque propriétés et fait un console log de ce que cela retourne
let n = 0
for (const elem in myObject) {
    n++
}
// ### 5. Rajoute un count(compteur ou index comme tu l'entends) dans ta boucle
// ### 6. Sert toi de ce count/index pour parcourir ton tableau myElement dans ta boucle et d'y insirer ce qu'on te retourne a l'énoncé 4

let k = 0
for (const elem in myObject) {
        exo1[k].innerText = (`${myObject[elem]}`);
    k++
}










// let h1 = document.createElement("h1")
// h1.innerText = "salut"
// let textH1 = document.createTextNode("Bonjour à tous")
// h1.appendChild(textH1)
// console.log(h1);

// // style
// h1.style.backgroundColor = "red"

// // class
// h1.setAttribute("class", "bg-danger mt-5 mb-2")
// // h1.setAttribute("class", "bg-warning")

// // h1.classname = "bg-primary"

// // ajouter propriété
// h1.classList.add("border")
// h1.classname.remove("mt-5")



// let body = document.body
// body.appendChild(h1)






