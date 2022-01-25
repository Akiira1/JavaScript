// ## Exercice 6
//     1. 
let monTab = ["pomme", "fraise", "melon", "citron"]
//         - Supprimer le dernier élément de l'array
monTab.pop()

//         - Supprimer le premier élément de l'array
monTab.shift()

//         - Ajouter un élément a la fin de l'array
monTab.push("ajout1")

//         - Ajouter un élément au debut de l'array
monTab.unshift("ajout2")

//         - Mettre le deuxième élément en majuscule 
monTab[1] = monTab[1].toUpperCase()   // marche pas :s !!!!!
console.log(monTab)

//         - Changer l'ordre de l'array
monTab.reverse()



//     2.
let chiffres = [4, 5, 2, 1, 3]

//         - Ordonner les chiffres
//         - Première methode (Ordonner)
chiffres.sort()
console.log(chiffres)
//         - *Resultat : 1, 2, 3, 4, 5*


//         - Deuxième methode (Concaténer les chiffres en un string)
chiffres = chiffres.join('-')
console.log(chiffres)

//         - *Resultat : 1-2-3-4-5*

//         - Utiliser une méthode qui permet de revenir la chaine de caractères en un tableau
chiffres = chiffres.split('-')

//         - Afficher l'array avec les chiffres ordonnées
console.log(chiffres)




//     3. 
//         - Créez un tableau vide
emptyTab = []

//         - Ajouez 10 élément dans votre array
emptyTab.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

//         - Affichez le contenu de l'array et sa taille
console.log(emptyTab.length)

//         - Touvez l'index de chaque éléments
console.log(emptyTab.indexOf(1))
console.log(emptyTab.indexOf(2))
console.log(emptyTab.indexOf(3))
console.log(emptyTab.indexOf(4))
console.log(emptyTab.indexOf(5))
console.log(emptyTab.indexOf(6))
console.log(emptyTab.indexOf(7))
console.log(emptyTab.indexOf(8))
console.log(emptyTab.indexOf(9))
console.log(emptyTab.indexOf(10))

//         - Utiliser une methode qui permet de supprimer un element grâce à l'index
emptyTab.splice(0, 1)
console.log(emptyTab)

//         - Créez un tableau vide et rajoutez toutes les personnes de la classe. Faite un console.log de quelqu'un aléatoirement dans le tableau
let coding22 = []
coding22.push("Aleks", "Calvin", "Marcyl","Kevin", "Louis", "Mohamed", "Ilias", "Kevin", "Adil", "Nicolas", "Samy", "Gursel","Michael", "Isma", "Jade", "Imane", "Elliot", "Baptiste", "Amanda", "Anis")

//         - En une ligne supprimer 'Anis' du tableau
coding22.pop()
console.log(coding22)
