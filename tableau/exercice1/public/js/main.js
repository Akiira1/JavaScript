// ## Exercice 1 JavaScript -> Array

// 1. Créer une variable qui reçois un array avec 3 éléments -> ex: coding 20, coding 21, coding 22
let tableau = ["coding 20", "coding 21", "coding 22"]

// 2. Afficher les éléments de l'array
console.log(tableau)

// 3. Afficher le nombre d'éléments de l'array
console.log(tableau.length)

// 4. Afficher les éléments de l'array 1 par 1 
console.log(tableau[0])
console.log(tableau[1])
console.log(tableau[2])


// ## Exercice 2 JavaScript -> Array

// 1. Créer une variable qui reçois un array avec 3 éléments -> ex: coding 20, coding 21, coding 22
let semaine = ["lundi", "mardi", "mercredi"]

// 2. Afficher les éléments de l'array
console.log(semaine)

// 3. Ajouter et afficher votre prénom a l'array
semaine.push("Aleks")
console.log(semaine)

// ## Exercice 3 JavaScript -> Array

// 1. Créer une variable qui reçois un array avec 3 éléments -> coding 20, coding 21, coding 22
let mois = ["janvier", "fevrier", "mars"]

// 2. Afficher les éléments de l'array
console.log(mois)

// 3. Ajouter et afficher votre prenom a l'array
mois.push("Aleks")
console.log(mois)

// 4. Remplacer et afficher un élément de l'array par autre chose
mois.splice(mois.indexOf("janvier"), 1, "juillet")
console.log(mois)

// ## Exercice 4 JavaScript -> Array

// 1. Créer une variable qui reçois un array avec 3 éléments -> ex: coding 20, coding 21, coding 22
let annee = [2020, 2021, 2022]

// 2. Afficher les éléments de l'array
console.log(annee)

// 3. Ajouter et afficher votre prenom a l'array
annee.push("Aleks")
console.log(annee)

// 4. Remplacer et afficher un élément de l'array par autre chose
annee.splice(annee.indexOf("2022"), 1, 2077)
console.log(annee)

// 5. Effacer un élément de l'array
annee.shift()

// 6. Afficher le contenu le d'array
console.log(annee)
