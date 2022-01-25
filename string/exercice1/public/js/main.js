// 1
let phrase = "Bonjour tout le monde         "
console.log(phrase)

// 2
console.log(phrase.length)

// 3
let newPhrase = phrase.slice(0, 21)
console.log(newPhrase)
// reponse phrase = phrase.trim()

// 4

console.log(newPhrase.length)

// 5
console.log(newPhrase.charAt(newPhrase.length-1))

// 6
console.log(newPhrase.substr(8, 14))

// 7
console.log(newPhrase)

// 8 
console.log(newPhrase.substr(0, 7))

// 9
let newPhrase2 = newPhrase.replace("Bonjour", "String")
console.log(newPhrase2)

// 10 
console.log(Math.random())

// 11
let phrase1 = "Bonjour tout le monde"
phrase1  = phrase1.substring(0, 4) + phrase1.substring(4, 5).toLocaleUpperCase() + phrase1.substring(5, 8) + phrase1.substring(8, 9).toLocaleUpperCase() + phrase1.substring(9)
console.log(phrase1)

// 12
let phrase1_bis = "Bonjour"
let searchO = "o"
let phrase_o = phrase1_bis.lastIndexOf(searchO)
console.log(phrase_o)

console.log(phrase1_bis.indexOf("o", 2))

// 13
let nom = "aleks"
nom = nom.charAt(0).toUpperCase() + nom.slice(1, 4) + nom.charAt(4).toUpperCase()
console.log(nom)
/