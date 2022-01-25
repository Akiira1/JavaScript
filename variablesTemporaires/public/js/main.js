// - # Variables temporaires
// - # Exo 1
//     - ## let a = 1; -> 2
//     - ## let b = 2; -> 3
//     - ## let c = 3; -> 1

// let a = 1
// let b = 2
// let c = 3
// let temp = a

// a = b
// b = c
// c = temp 
// //     - ## Afficher le changement des variables
// console.log(a, b, c)




// - # Exo 2
//     - ## Afficher 4, 3, 2, 1
//     - ## let a = 1; -> 4
//     - ## let b = 2; -> 3
//     - ## let c = 3; -> 2
//     - ## let d = 4; -> 1

// let a = 1
// let b = 2
// let c = 3
// let d = 4
// let temp1 = a

// a = d
// d = temp1
// temp1 = c 
// c = b
// b = temp1
// //     - ## Afficher le changement des variables
// console.log(a, b, c, d)





// - #  Exo 3
//     - ## let a = 1; -> 2
//     - ## let b = 2; -> 3
//     - ## let c = 3; -> 4
//     - ## let d = 4; -> 1

// let a = 1
// let b = 2
// let c = 3
// let d = 4
// let temp3 = a

// a = b 
// b = c
// c = d
// d = temp3

//     - ## Afficher le changement des variables
// console.log(a, b, c, d)





// - # Exo 4
//     - ## Afficher 4, 3, 2, 1 avec une variable temporaire
//     - ## let tableau = [1, 2, 3, 4];

let tableau = [1, 2, 3, 4]
let temp4 = tableau[0]

tableau[0] = tableau[3]
tableau[3] = temp4
temp4 = tableau[1]
tableau[1] = tableau[2]
tableau[2] = temp4

console.log(tableau)

// - # Exo 5
//     - ## let a = 1 -> 4
//     - ## let b = 2 -> 5
//     - ## let c = 3 -> 1
//     - ## let d = 4 -> 2
//     - ## let e = 5 -> 6
//     - ## let f = 6 -> 3

let a = 1
let b = 2
let c = 3
let d = 4
let e = 5
let f = 6
let temp5 = a

a = d
d = b
b = e
e = f
f = c
c = temp5

//     - ## Afficher le changement des variables
console.log(a, b, c, d, e, f)