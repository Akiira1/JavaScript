
// 1
let coach = "Elias"
let tabExo = ["Aleks", 28, true, 25, coach]
console.log(tabExo)

// 2
console.log(tabExo.length)

// 3
tabExo.pop()
console.log(tabExo)

// 4
tabExo.shift()
console.log(tabExo)

// 5
tabExo.unshift("Aleks")
tabExo.push("coach")
console.log(tabExo)

// 6
tabExo.unshift("bonjour", "salut", "Luffy")
console.log(tabExo)

// 7
tabExo.reverse()
console.log(tabExo)

// 8
let boite = ["Elias", "coach"]
alert(boite)
boite.unshift("Aleks")
alert(boite)
boite.push("molengeek", "coding", "javascript")
alert(boite)
boite.splice(0, 3)
boite.unshift("vscode")
alert(boite)
alert(boite.length)
boite.splice(2, 2)
alert(boite)
boite.splice(0, 2)
alert(boite)
console.log(boite)