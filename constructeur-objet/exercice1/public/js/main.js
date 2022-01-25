let personne = {
    nom = "Akiira",
    prenom: "Akeks"
}
let personn2 = {
    nom = "Akiira2",
    prenom: "Akeks2"
}
let personne3 = {
    nom = "Akiira3",
    prenom: "Akeks3",

console.log(peronne, personne2, personne3);





class Personne {
    constructor(nom, prenom, age){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    saluer = () => {
        console.log(`Bonjour, je suis ${this.prenom}`)
    }
}


let personne = new Personne("Akiira", "Aleks", 28);
let personne2 = new Personne("Luffy", "D Monkey", 20);
let personne3 = new Personne("Nom3", "Prenom3", 19);

console.log(personne, personne2, personne3)


personne.saluer();
personne2.saluer();
personne3.saluer();