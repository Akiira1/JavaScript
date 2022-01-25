// 1. EXO1
//   - Traduire le code suivant en class et en instances



// class Lieux {
//     constructor(nom, contenu, ingredients) {
//         this.nom = nom;
//         this.contenu = contenu;
//         this.ingredients = ingredients;
//     }
// }


// let maison = new Lieux("maison", [])
// let epicerie = new Lieux("epicerie", [], [])
// let cuisine = new Lieux("cuisine", [], [])

// console.log(maison, epicerie, cuisine)


// class Ingredients {
//     constructor(nom, etat, prix) {
//         this.nom = nom;
//         this.etat = etat;
//         this.prix = prix;
//     }
// }


// let poivron = new Ingredients("oignon", "entier", 1)
// let oignon = new Ingredients("oignon", "entier", 2)
// let oeuf = new Ingredients("oeuf","entier", 4)
// let epice = new Ingredients("epice","moulu", 3.25)
// let paprika = new Ingredients("paprika", "moulu", 1.5)
// let fromage = new Ingredients("fromage", "coupé", 1.6)

// console.log(poivron, oignon, oeuf, epice, paprika, fromage)



// class Personne {
//     constructor(nom, lieu, argent, panier){
//         this.nom = nom;
//         this.lieu = lieu;
//         this.argent = argent;
//         this.panier = panier;
//         se_deplacer = (x) => {
//         }
//     }
//     payer(x){
//     }
//     couper(x,y){
//     }
// }
// // lieux
// ### let maison = {
// ###   nom: "maison",
// ###   contenu: [],
// ### };
// ### let epicerie = {
// ###   nom: "epicerie",
// ###   contenu: [],
// ###   ingredients: [],
// ### };
// ### let cuisine = {
// ###   nom: "cuisine",
// ###   contenu: [],
// ###   ingredients: [],
// ### };



// // ingredients
// ### let poivron = {
// ###   nom: 'poivron',
// ###   etat: 'entier',
// ###   prix:  1 ,
// ###  };
// ###  let oignon = {
// ###   nom: 'oignon',
// ###   etat: 'entier',
// ###   prix:  2 ,
// ###  };
// ###  let oeuf = {
// ###   nom: 'oeuf',
// ###   etat: 'entier',
// ###   prix:  4 ,
// ###  };
// ###  let epice = {
// ###   nom: 'epice',
// ###   etat: 'moulu',
// ###   prix:  3.25 ,
// ###  };
// ###  let paprika = {
// ###   nom: 'paprika',
// ###   etat: 'moulu',
// ###   prix:  1.5 ,
// ###  };
// ###  let fromage = {
// ###   nom: 'fromage',
// ###   etat: 'coupé',
// ###   prix:  1.6 ,
// ###  };





// // Personne
// ### let personnage = {
// ###  nom: "Maxime",
// ###  lieu: "néant",
// ###  argent: 100,
// ###  panier: [],
// ###  se_deplacer(x){
// ###  },

// ###  payer(x){
// ###  },
// ###  couper(x,y){
// ###  }
// ### }





// 2. EXO02
//   - Créer une class Personnage avec comme propriétés : 
//   - age , nom , ville
//   - Faire 2 instances de cette class.


// class Personnage {
//     constructor(age, nom, ville){
//         this.age = age;
//         this.nom = nom;
//         this.ville = ville;
//     }
//     se_presenter = () => {
//         console.log(`Bonjour, je m'appel ${this.nom}`)
//     }
// }

// let Akiira = new Personnage(28, "Akiira", "Tokyo")
// let Luffy = new Personnage(20, "Luffy", "East blue")

// // 3. EXO03
// //   - Rajouter la methode 'sePresenter' à la class Personnage qui dira "Bonjour, je m'appelle [nom-de-la-personne] !" via un console.log
// //   - Lancer cette méthode sur les deux instances de l'exo1

// console.log(Akiira, Luffy)
// Akiira.se_presenter();
// Luffy.se_presenter()




// Exo04
//    - Créer une class Objet
//      - _Propriétés : nom, prix

// class Objet {
//     constructor(nom, prix) {
//         this.nom = nom;
//         this.prix = prix;
//     }
// }

//    - Créer deux instances d'objets avec un nom et un prix
//    - Créer une boite (tableau) et mettre les deux objets dedans.

// let pommes = new Objet("pomme", 2)
// let poires = new Objet("poire", 3)
// console.log(pommes, poires)

// let boite = []

// boite.push(pommes, poires)
// console.log(boite)

//    - Créer une class Personnage
//     - _Propriétés : nom(string), sac(tableau), argent(number)
//     - _Méthode : acheter(objet)
//     - _Méthode : acheter(vendeur, objet)

// class Personnages {
//     constructor(nom, tableau, argent){
//     this.nom = nom;
//     this.tableau = tableau;
//     this.argent = argent;
//     }
//     acheter() {
//         this.tableau.push(boite.pop())
//     }
//     acheter = (vendeur, objet) =>{
//         this.tableau.push(objet)
//         vendeur.tableau.splice(vendeur.tableau.indexOf(objet), 1)
//         this.argent = this.argent - objet.prix
//         vendeur.argent = vendeur.argent + objet.prix
//     }
// }

// - Créer deux instances de Personnage et faites leur chacun [acheter] un objet de la boite avec leur méthode.
// - Ensuite faites acheter à l'un des deux, l'objet de l'autre.

// let Akiira = new Personnages("Akiira", [], 100);
// let Luffy = new Personnages("Luffy", [], 50);

// Akiira.acheter()
// Luffy.acheter()


// console.log(Akiira.tableau)
// console.log(Luffy.tableau)
// console.log(boite)

// Akiira.acheter(Luffy, pommes)
// console.log(Akiira, Luffy)




// ## EXO5

// // ### Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).
// class Lieu {
//     constructor(nom, personnes) {
//         this.nom = nom;
//         this.personnes = personnes;
//     }
// }
// // // ### Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison
// let molengeek = new Lieu("Molengeek", [])
// let snack = new Lieu("Snack", [])
// let maison = new Lieu("Maison", [])

// // ### Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus.

// class Personne {
//     constructor(nom, prenom, argent) {
//         this.nom = nom;
//         this.prenom = prenom;
//         this.argent = argent;
//         this.lieu = maison;
//     }
//     changerLieu(newLieu){
//         this.lieu.personnes.splice(this.lieu.personnes.indexOf(this), 1)
//         newLieu.personnes.push(this)
//         this.lieu = newLieu;
//     }
//     seDeplacer = () => {
//         bus.embarquer(this)
//     }
// }

// // ### Puis créez une instance de votre personnage.

// let Akiira = new Personne("Akiira", "Shin", 500)

// // ### Créez une class [Bus] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.

// class Bus {
//     constructor(personnes, caisse) {
//         this.personnes = personnes;
//         this.caisse = +caisse;
//     }
//     embarquer(personnes) {
//         if (personnes.argent >= 2.80) {
//             personnes.argent -= 2.80;
//             personnes.argent = personnes.argent.toFixed(2);
//             this.caisse += 2.80;
//             this.personnes.push(personnes);
//         } else {
//             console.log("pas d'argent, tu rentres pas !")
//         }
//     }
// }

// // ### Créez une instance de Bus. 
// let bus = new Bus([], 50)
// // ### 8h00 Vous êtes à la maison.
// console.log(Akiira)
// // ### 8h30 Vous prennez le bus vers MolenGeek.
// Akiira.seDeplacer(bus)
// Akiira.changerLieu(molengeek)
// console.log(Akiira)
// // ### 8h45 Vous êtes à MolenGeek.
// console.log(Akiira)
// // ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
// Akiira.seDeplacer(bus)
// Akiira.changerLieu(snack)
// console.log(Akiira)
// // ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
// Akiira.changerLieu(molengeek)
// console.log(Akiira)
// // ### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.
// Akiira.seDeplacer(bus)
// Akiira.changerLieu(maison)
// console.log(Akiira)
// // ### Faites un console.log() de votre argent, ainsi que l'argent du Bus
// console.log(Akiira.argent, bus.caisse.toFixed(2))





// !!!!!!!!!!!!!!! CORRECTION !!!!!!!!!!!!!!




// EXO5

// Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).
class Lieu {
    constructor(nom, personnes) {
        this.nom = nom;
        this.personnes = personnes;
    }
}

// Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison
let molengeek = new Lieu("MolenGeek", []);
let snack = new Lieu("Snack", []);
let maison = new Lieu("Maison", []);

// Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus.
class Personne {
    constructor(nom, prenom, argent) {
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;
        this.seDeplacer = (depart, arrivee, transport) => {
            depart.personnes.splice(depart.personnes.indexOf(this), 1);
            if (transport !== "pied") {
                transport.embarquer(this)
            } else {
                console.log(`${this.prenom} va aller à pied`);
            }
            arrivee.personnes.push(this);
            console.log(`${this.prenom} est actuellement à ${arrivee.nom}`);
        }
    }
}

// Puis créez une instance de votre personnage.
let akiira = new Personne("Shin", "Akiira", 100);
let michael = new Personne("Test", "Michael", 100)

// Créez une class [Transport] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.
class Transport {
    constructor(personnes, caisse) {
        this.personnes = personnes;
        this.caisse = caisse;
        this.embarquer = (x) => {
            if (x.argent >= 2.80) {
                x.argent -= 2.80;
                x.argent = Number(x.argent.toFixed(2))
                this.caisse += 2.80;
                this.caisse = Number(this.caisse.toFixed(2));
                this.personnes.push(x)
                console.log(`${x.prenom} est dans le bus`);
                console.log(`${x.prenom} vient de descendre du bus`);
                this.personnes.splice(this.personnes.indexOf(x), 1);
            } else {
                console.log(`${x.prenom} n'a pas assez d'argent pour payer le bus`);
                console.log(`${x.prenom} va continuer à pied`);
            }
        }
    }
}

// Créez une instance de Transport (Bus). 
let bus = new Transport([], 0);

// 8h00 Vous êtes à la maison.
maison.personnes.push(akiira)
console.log(`${akiira.prenom} est actuellement à la ${maison.nom}`);


// 8h30 Vous prennez le bus vers MolenGeek.
console.log(`8h : ${akiira.prenom} se réveille`)
// 8h45 Vous êtes à MolenGeek.
akiira.seDeplacer(maison, molengeek, bus);
console.log(`8h45 : ${akiira.prenom} àrrive à Molengeek`)

// 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
console.log(`Dur journée, il est déjà 12h45 ! ${akiira.prenom} s'en va manger au Snack en Bus`)
akiira.seDeplacer(molengeek, snack, bus);
// 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
console.log(`Fini de manger à 13h30. ${akiira.prenom} retourne en classe `)
akiira.seDeplacer(snack, molengeek, "pied")
// 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.
console.log(`Journée terminée, ${akiira.prenom} rentres ce reposer à la maison`);
akiira.seDeplacer(molengeek, maison, bus)
// Faites un console.log() de votre argent, ainsi que l'argent du Bus
console.log(bus.caisse);
console.log(akiira.argent);












// exo avant mega-pokemon 


// - Vous allez créer une class Personne qui aura besoin d'un nom, prenom, age, argent, panier et d'une methode acheter
// - Vous allez créer une class Produit dans laquelle il y a un nom, un prix et une taille

// - Vous allez créer 3 instances de Personne et 5 instance de Produit
// - Avez la méthode acheter, vous allez mettre les produits dans votre sac

// - Vous allez ajouter une propriété dans le produits appelé acheté qui sera false
// - Dans la classe personne, vous allez créer une méthode acheter qui va faire passer tous les éléments de votre sac en acheté true et vous allez retirer l'argent de que vous avez par rapport au prix du produit

// - Vous allez créer une classe appelé Appartement avec un nom, une armoire (tableau vide), et personnes (tableau vide)
// - Vous allez créer une instance d'Appartement appelé chambre et vous allez push la parsonne à l'interieur de la chambre
// - Tous les éléments qui se trouvent dans le sac vont aller dans l'armoire grâce à une méthode deposer() qui va se trouver dans la personne

class Appartement {
    constructor(nom, armoire, personnes) {
        this.nom = nom;
        this.armoire = armoire;
        this.personnes = personnes;
    }
}
let batcave = new Appartement("Batcave", [], [])


class Persos {
    constructor(nom, prenom, age, argent, panier){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.argent = argent;
    this.panier = panier;
    this.acheter = (prod) => {
        this.panier.push(prod);
        this.argent -= prod.prix;
        prod.acheté = true;
        }
    this.deposer = (x) => {
        x.push(...panier)
        this.panier.length = 0;
        }
    }
}
let zoro = new Persos("Roronoa", "Zoro", 21, 500, []);
let robin = new Persos("Nico", "Robin", 30, 500, []);
let vivi = new Persos("Nefertari", "Vivi", 18, 500, []);

class Produit {
    constructor(nom, prix, taille){
        this.nom = nom;
        this.prix = prix;
        this.taille = taille;
        this.acheté 
    }
}
let katana = new Produit("Katana", 200, "120cm",)
let fleur = new Produit("Fleur", 50, "5cm",)
let couronne = new Produit("Couronne", 400, "50cm", )
let coffre = new Produit("Coffre", 100, "100cm",  )
let fruit = new Produit("Demon-Fruit", 250, "20cm",)

zoro.acheter(katana)
robin.acheter(fleur)
vivi.acheter(couronne)
zoro.acheter(fruit)
vivi.acheter(coffre)
console.log(zoro, robin, vivi)
console.log(katana, fleur, couronne, coffre, fruit)
batcave.personnes.push(zoro)
zoro.deposer(batcave.armoire)
console.log(batcave)
console.log(zoro)