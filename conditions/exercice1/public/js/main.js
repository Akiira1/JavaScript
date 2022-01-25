// // - Les conditions - Exercice 1
// //     1. Via un console.log() vérifie l'egalité entre 1 et "1"
// console.log(1 == "1")


// //     2. Via un console.log() vérifie l'egalité STRICTE entre 1 et "1"
// console.log(1 === "1")


// //     3. Créer un programme qui demande le prénom d'une personne, si le prénom de la personne comporte moins de 5 caractères, affichée une alerte avec comme message " Ton nom est trop court "

// let nom = prompt("quel est votre nom ?")
    // if(nom.length < 5){
//         alert("not good")
//     }

// //     4. Affiche une addition a l'utilisateur et demande lui de résoudre l'addition, si il répond juste, félicitez le, sinon dite lui que c'est incorrect.

// let calc = +prompt("5 + 5 = ?")
//     if(calc === 10){
//         alert("Bonne réponse")
//     }
//     else{
//         alert("Nop, raté")
// }


//     5. Affiche une multiplication à l'utilisateur et demande lui de la résoudre, si il répond juste félicitez le "la réponse était bien xx" sinon dite lui, à combien d'unité il était de la réponse exemple si la réponse etait 35 et qu'il répont 40 renvoyez lui une alerte avec "C'est dommage, tu n'étais qu'a 5 unité de la bonne réponse"
// let multi = +prompt("combien font 3*3 ?")
// let diff = Math.abs(multi - 9)
// if (multi === 9) {
//     alert("Bonne réponse")
// }
// else {
//     alert("tu es à " + diff + " " + " de la bonne réponse")
// }


// //     6. Créer un programme qui permet d'ajouter des elements dans un tableau via des prompts quand le tableau contient 3 éléments, renvoyez une alerte avec le contenu du tableau
// let tab = []
// do {
//     let rep = prompt("ajoutez des éléments au tableau s'il vous plait!")
//     tab.push(rep)
// } while (tab.length < 3)
// alert(tab)


//     7. Créer un programme qui permet a l'utilisateur de mettre des chiffres dans des bacs, si le chiffre est plus grand ou égal à 12 il va dans le bac "grandNombres" si il est plus petit que 12 il va dans le bac "petitNombres" affiche ensuite une seule alerte avec le contenu des deux bacs

let tabP = []
let tabG = []

let rep = +prompt("choisisez un numéro!")
if(rep <= 12){
    tabP.push(rep)
} else{
    tabG.push(rep)
}
alert("Plus grand")


//     8. Invente un exercice avec ce que tu as appris en Javascript jusqu'a maintenant en incluent des conditions

let rep = prompt("quel jour de la semaine est-on ?")
if(rep == "samedi"){
    alert("ah bah, il était temps!")
}
else if(rep == "dimanche"){
    alert("ah bah, il était temps!")
}
    else{
    alert("c'est bientôt le week-end tkt")
}