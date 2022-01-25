// 1
let myBody = document.getElementsByTagName("body")

// 2
console.log(myBody[0].childNodes[1])

// 3
console.log(myBody[0].lastChild)

// 4
let exo4 = document.querySelector("div").children
console.log(exo4);

// 5
let li = document.querySelector("li")
console.log(li.nextElementSibling);

// 6
let li2 = document.querySelector("li").nextElementSibling
console.log(li2.previousElementSibling);