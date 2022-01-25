class Appartement {
    constructor(nom, armoire, personnes) {
        this.nom = nom;
        this.armoire = armoire;
        this.personnes = personnes;
    }
}

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

class Produit {
    constructor(nom, prix, taille, acheté){
        this.nom = nom;
        this.prix = prix;
        this.taille = taille;
        this.acheté 
    }
}


export {Appartement, Persos, Produit}