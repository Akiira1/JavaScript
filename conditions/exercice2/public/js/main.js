// // Exo 1
// let num1 = +prompt("choisisez un nombre")
// let num2 = +prompt("choisisez un nombre")
// let rep1 = true
// let rep2 = false
// if(num1 == num2){
//     alert("le nombre" + " " + num1 + " " + "le nombre" + " " + num2 + " " + "sont-il égaux ? :" + " " + rep1)
// }
//     else{
//         alert("la réponse est : " + rep2) 
//     }
// // Exo 2
// let num3 = +prompt("choisisez un nombre")
// let num4 = +prompt("choisisez un nombre")
// let rep3 = true
// let rep4 = false
// if(num3 < num4){
//     alert("le nombre" + " " + num3 + " " + "est t'il plus petit que le nombre" + " " + num4 + " " + "?" + rep3)
// }
//     else{
//         alert("la réponse est : " + rep4) 
//     }

// // Exo 3
// let num5 = +prompt("choisisez un nombre")
// let num6 = +prompt("choisisez un nombre")
// let num7 = +prompt("choisisez un nombre")
// let rep6 = true
// let rep7 = false
// if(num5 + num6 > num7){
//     alert("La somme du nombre" + " " + num5 + " " + "+" + " " + num6 + " " + "est-elle plus grande que le nombre " + num7 + " ? : " + rep6 )
// }
//     else{
//         alert("la réponse est : " + rep7)
//     }
// // Exo 4
// let phrase = prompt("entrez une phrase!")
// let cara = +prompt("à votre avis, combien de caractères comprenais votre phrase ? ")
// let taille = phrase.length
// let calc = Math.abs(cara - taille)
// if(taille == cara){
//     alert("parfait")
// }
// else{
//     alert("il y à " + calc + " caractères de diffèrences ")
// }

// exo 5

let prenom = prompt('prenom')

if (prenom === '') {
    prenom = prompt("Attention vous devez remplir le champs ci-dessous, Quel est votre prénom ?")
} else {
    alert("bonjour " + prenom) 
}



// exo 6

let login = window.confirm('login ?')

if (login) {
    let option = prompt('luxe ou normal ?')
    if (option === 'luxe' || option === 'normal') {
        alert("thx for sub")
        if (option === 'luxe') {
            alert("Félicitation vous avez choisis la formule Luxe !")
        }
        if (option === 'normal') {
            alert("Merci pour votre abonnement")
        }
    } else {
        let sure = window.confirm('sure ?')
        if (sure) {
            alert('dommage')
        } else {
            option = prompt('luxe ou normal ?')
        }
    }
}

// exo 7
let question1 = prompt("Quel est mon prénom ?");
let question2 = prompt("Je suis né en quelle année ?");

let reponse1 = "Elias";
let reponse2 = "1996";

if (question1 !== reponse1 && question2 !== reponse2) {
    alert("Vous avez échoué");
} else if(question1 === reponse1 && question2 === reponse2){
    alert("Vous avez réussi");
} else if (question1 === reponse1){
    alert("Vous avez réussi la première question");
} else if (question2 === reponse2){
    alert("Vous avez réussi la deuxième question");
}

// Exercice 8

let age = +prompt("Vous avez quel âge ?")

if (age < 0) {
    alert("Vous n’êtes même pas nés, n’essayez pas de tricher")
} else if (age > 100) {
    alert("Vous êtes encore vivant ? Évitez de voir ce film pour le rester.")
} else if (age === 18) {
    alert("Pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant.")
} else if (age > 18) {
    alert("Vous êtes majeur, vous pouvez réserver")
} else {
    alert("Vous êtes mineur, l’accès est réservé aux grands")
}


// Exo 9 

