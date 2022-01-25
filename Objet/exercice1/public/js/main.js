// 1. Exo 1 
//   - Créez un objet avec vos valeurs
//   - 'Nom', 'prenom', 'age', 'taille'
//   - Affichez votre age via un console.log()



// let Akiira = {
//     age: 28,
//     nom: "Aleksic",
//     prenom: "Akiira",
//     taille: 170
// }

// console.log(Akiira.age)


// 2. Exo 2 
//   - Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)



// let luffy = {
//     age: 27,
//     nom: "monkey D",
//     prenom: "Luffy",
//     taille: 170
// }

// let inconnu = {}

// 3. Exo 3
//   - Remplir les propriétées du 3eme personnage
//   - Son nom doit valoir le nom du personnage1
//   - Son age doit valoir celui du personnage2
//   - Et sa taille doit être rempli avec la valeur que vous souhaitez

// inconnu.nom = Akiira.nom

// inconnu.age = Luffy.age

// inconnu.taille = 190

// console.log(inconnu)

// 3. Exo 3
//   - Créez un personnage avec un nom un et prenom et donnez lui une méthode 'sePresenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.

// let personnage = {
//     nom: "Akiira",
//     prenom: "Aleksic",
//     sePresenter(){
//         console.log(`Bonjour je m'appelle ${this.nom} ${this.prenom}`)
//     }
// }

// personnage.sePresenter()

// 4. Exo 4
//   - Créer un objet avec un nom et une méthode
//   - La méthode de votre objet lance un prompt permetant de changer son age
//   - Une alert renvoi "[nom de l'objet] a [age de l'objet] ans"

// let obj = {
//     nom: "Akiira",
//     changeAge(){
//         obj.age = +prompt("Changer l'âge de obj : (chiffre)")
//         alert(`${this.nom} a ${this.age} ans`)
//     }
// }

// obj.changeAge()


// exo5
// ### Créer deux personnages du nom de François et Sergio
// ### Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
// ### Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier.




let francois = {
    nom: "Francois",
    panier: ["pommes", "poires", "fraises", "tomates"],
    voleur(){
        this.panier.push(sergio.panier.pop())
        this.panier.push(sergio.panier.pop())
    }
}
let sergio = {
    nom: "sergio",
    panier: ["pommes", "poires", "fraises", "tomates"],
}

francois.voleur()
console.log(sergio.panier)
console.log(francois.panier)



//  Exo 6

//    - Créer un objet "vieille_dame" avec une propriété "âge" assez élevée une propriété "nom" contenant un "prenom" et un "nom de famille" (/!\ Objet dans objet), une propriété "moral" avec comme valeur "mal" et une propriété "objet" par exemple une canne

//    - une méthode "parler" qui selon son moral fait une alert différente, si son moral = "mal" alors elle dira "Vous me dérangez et le frappe avec son objet", si son moral = "bien" alors elle dira "bonjour" + le nom du vieil_homme.

//    - Créer ensuite l'objet vieil_homme avec une propriété "nom" et une méthode "adoucir" qui change le moral de la "vieille_dame" en "bien".

//    - Faites parler la vieille dame, puis lancer la méthode adoucir du vieil homme et relancer la méthode parler de la vieille dame.


let vieille_dame = {
    age : 89,
    nom : {
        prénom: "Charline",
        nomDeFamille: "Dubois"
    },
    moral: "mal",
    objet: "canne",
    parler(){
        if(this.moral === "mal"){
            console.log(`Vous me dérangez et le frappe avec sa ${this.objet}`)
        }else if(this.moral === "bien"){
            console.log(`bonjour ${vieil_homme.nom}`)
        }
    }
}

let vieil_homme = {
    nom : "Charles",
    adoucir(){
        vieille_dame.moral = "bien"
    }
}

vieille_dame.parler()
vieil_homme.adoucir()
vieille_dame.parler()
